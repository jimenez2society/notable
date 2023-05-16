require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/notes", (req, res, next) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.listen(process.env.LOCAL_PORT, () => {
  console.log(`Connected to ${process.env.LOCAL_PORT}`);
});
