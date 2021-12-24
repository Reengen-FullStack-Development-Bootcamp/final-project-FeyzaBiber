const { Client } = require("pg");

const client = new Client({
  //host: "ec2-34-251-245-108.eu-west-1.compute.amazonaws.com",
  //user: "fpgnhrmrsgfxdr",
  //port: 5432,
  //password: "f6020829f339dc0fe07f647d3f2136986ce9479b8b3b2996e92a3783b2bf4721",
  //database: "dbtitptvm2s8kl",
  connectionString:
    "postgres://fpgnhrmrsgfxdr:f6020829f339dc0fe07f647d3f2136986ce9479b8b3b2996e92a3783b2bf4721@ec2-34-251-245-108.eu-west-1.compute.amazonaws.com:5432/dbtitptvm2s8kl",
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

module.exports = client;
