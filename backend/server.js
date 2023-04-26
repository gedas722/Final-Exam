const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8081;

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
