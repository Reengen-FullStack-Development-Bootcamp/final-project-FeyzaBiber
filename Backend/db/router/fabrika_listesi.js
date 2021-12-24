const client = require("../db");

const getAll = (request, response) => {
  client.query("SELECT * FROM fabrika_listesi", (err, result) => {
    if (!err) {
      response.status(200).json(result.rows);
    } else {
      console.log("get all error: " + err);
    }
  });
};

const getByName = (request, response) => {
  const { name } = request.body;

  // promise
  client
    .query("SELECT * FROM fabrika_listesi WHERE firma_adi = $1", [name])
    .then((res) => response.status(200).json(res.rows))
    .catch((err) => console.log(err));
};

const create = (request, response) => {
  const {
    firma_adi,
    uyelik_tarihi,
    uyelik_bitis_tarihi,
    calisan_sayisi,
    special_uye,
  } = request.body;

  client.query(
    "INSERT INTO fabrika_listesi VALUES ($1, $2, $3, $4, $5)",
    [
      firma_adi,
      uyelik_tarihi,
      uyelik_bitis_tarihi,
      calisan_sayisi,
      special_uye,
    ],
    (err, res) => {
      if (!err) {
        response.status(201).send(`fabrika listesi row created`);
      } else {
        console.log(err);
      }
    }
  );
};

const updateOne = (request, response) => {
  let keys = Object.keys(request.body);
  let values = Object.values(request.body);
  let str = "";

  for (let i = 0; i < keys.length; i++) {
    if (i == keys.length - 1) {
      str += `${keys[i]}=$${i + 1}`;
    } else {
      str += `${keys[i]}=$${i + 1}, `;
    }
  }

  client.query(
    `UPDATE fabrika_listesi SET ${str} WHERE firma_adi=$1`,
    values,
    (err, res) => {
      if (!err) {
        response.status(201).send(`row updated`);
      } else {
        console.log(err);
      }
    }
  );
};

const delByName = async (request, response) => {
  const { name } = request.body;
  // async await
  try {
    await client.query("DELETE FROM fabrika_listesi WHERE firma_adi = $1", [
      name,
    ]);
    response.status(200).send(`fabrika listesi row successfully deleted`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAll,
  getByName,
  create,
  updateOne,
  delByName,
};
