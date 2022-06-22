const express = require("express");
const { json } = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/flightRoute");
require("dotenv").config()

const app = express();

app.use(json());

app.use("/", routes);

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to Database"))

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
