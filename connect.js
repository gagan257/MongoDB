const express = require("express");
require(`dotenv`).config();
// const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

// dotenv.config({ path: `config` });
// console.log(process.env.PORT);
const PORT = process.env.PORT || 8080;
// console.log(process.env.MONGO_URI);

const connectDB = require("./server/database/connection");

const app = express();

//log requests
app.use(morgan("tiny"));

//mongodb connection
connectDB();

//parse requets to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

//s et view engine
app.set("view engine", "ejs");
// app.set("views".path.resolve(__dirname,"views/ejs"))

//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

//load route
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});