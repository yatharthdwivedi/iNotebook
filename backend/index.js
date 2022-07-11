const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/notebook", () => {
    console.log("notebook DB Connected");
  });
}

app.use(express.json());
app.use(cors());

// Available Routes

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen("5000", () => {
  console.log("Listening");
});
