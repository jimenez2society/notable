require("dotenv").config();
const cors = require("cors");
const express = require("express");
const notesRoutes = require("./routes/notes");
const path = require("path");
const app = express();
app.use(cors({}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/notes", notesRoutes);

app.get("/notes", (req, res, next) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.listen(process.env.LOCAL_PORT, () => {
  console.log(`Connected to ${process.env.LOCAL_PORT}`);
});
