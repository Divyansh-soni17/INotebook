const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

connectToMongo();

const app = express();

const port = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

 
  app.use(express.static((__dirname, "../build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../build/index.html"));
  });
 

app.listen(port, () => {
  console.log(`iNotebook backend  listening at http://localhost:${port}`);
});
