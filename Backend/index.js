const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const auth = require("./middleware/auth");
const isAdmin = require("./middleware/isAdmin");
const isEditor = require("./middleware/isEditor");
const db = require("./db/index");
const user = require("./router/user");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/user", user);
app.get("/fabrika_adi", auth, isAdmin, db.fabrika_adi.getAll);
app.get("/fabrika_listesi", auth, isEditor, db.fabrika_listesi.getAll);

app.post("/fabrika_adi", auth, isEditor, db.fabrika_adi.getByName);
app.delete("/fabrika_adi", auth, isEditor, db.fabrika_adi.delByName);
app.post("/fabrika_adi", auth, isEditor, db.fabrika_adi.create);
app.post("/fabrika_adi", auth, isEditor, db.fabrika_adi.updateOne);

app.post("/fabrika_listesi", auth, isAdmin, db.fabrika_listesi.getByName);
app.delete("/fabrika_listesi", auth, isAdmin, db.fabrika_listesi.delByName);
app.post("/fabrika_listesi", auth, isAdmin, db.fabrika_listesi.create);
app.post("/fabrika_listesi", auth, isAdmin, db.fabrika_listesi.updateOne);

dotenv.config();

mongoose.connect(
  process.env.DATABASE,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Mongodb connected successfully");
    }
  }
);

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(process.env.PORT + " listening ...");
  }
});
