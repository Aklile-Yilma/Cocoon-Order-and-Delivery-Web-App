require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const connectDb = require("./src/config/dbConnect");
const verifyJWT = require("./src/middlewares/verifyJWT");
const cookieParser = require("cookie-parser");
connectDb();

//  built in middleware to handle url encoded form data
app.use(express.urlencoded({ extended: false }));

// built in middleware to handle json
app.use(express.json());

// built in cookie parser
app.use(cookieParser());

// routes
app.use("/register", require("./src/routes/register"));
app.use("/auth", require("./src/routes/auth"));
app.use("/auth", require("./src/routes/auth"));
app.use("/refresh", require("./src/routes/refresh"));
app.use("/logout", require("./src/routes/logout"));

//verify jwt for the below routes that can only be accessed after the user has logged in
app.use(verifyJWT);

// mongoose.connection.once("once", () => {
//   console.log("connected to mongodb");
// });

app.listen(PORT, () => {
  console.log(`Cocoon Rest Api is listening at port ${PORT}`);
});
