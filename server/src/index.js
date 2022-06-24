import express from "express";
import expressConfig from "./config/express";
import "dotenv/config";
import db from "./config/db";

const app = express();
const host = process.env.HOST;
const port = process.env.port || 3000;

app.use(express.static('./views'))

expressConfig(app);
db.connect()
  .then((obj) => {
    app.listen(port, () => {
        obj.done();
        console.log(`Server started at ${host}:${port}/api/v1`);
      })
  })
  .catch((error) => {
    console.log(error.message);
  });
