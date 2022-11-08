
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");


// console.log(process.env.MONGO);
console.log("hi");
const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://yatharthDwivedi1:invisibleMan@cluster0.g1jcw3h.mongodb.net/?retryWrites=true&w=majority")
  } catch (error) {
     console.log(error);
  }
};


app.use(express.json());
app.use(cors());


// Available Routes

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen("5000", () => {
  connect()
  console.log("Listening on 5000" );

});
