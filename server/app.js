const express = require("express");
const app = express();

const VNDB = require("vndb-api");

const vndb = new VNDB("test", {
  minConnection: 1,
  maxConnection: 10,
});

app.use(express.json());

// vndb
//   .query("dbstats")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     vndb.destroy();
//   });
//get type flags filters options

app.get("/api", (req, res) => {
  vndb
    .query(`get vn basic (title ~ "${req.query.search}")`)
    .then((res1) => {
      res.set({ "access-control-allow-origin": "*" });
      res.status(200).send(res1);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      //vndb.destroy();
    });
});

app.listen(5000);
