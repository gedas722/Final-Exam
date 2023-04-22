import express from "express";
require("dotenv").config();

const app = express();

app.use(express.json());

app.listen(8081, () => {
  console.log("Listening...");
});