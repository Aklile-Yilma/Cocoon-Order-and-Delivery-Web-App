require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 4000;

const connectDb = require("./src/config/dbConnect");
connectDb();

app.get("/", (res, req) => {
  res.send("Hello Cocoon!");
});

app.listen(PORT, () => {
  console.log(`Cocoon Rest Api is listening at port ${PORT}`);
});
