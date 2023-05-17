const fs = require("fs");
const { v4: uuid } = require("uuid");
let dataFile = `./db/db.json`;

const getAllNotes = (req, res, next) => {
  fs.readFile(dataFile, (err, data) => {
    if (err) {
      throw new Error(err);
    }
    res.json(JSON.parse(data));
  });
};
const createANote = (req, res, next) => {
  let newNote = { id: uuid(), ...req.body };
  fs.readFile(dataFile, (err, data) => {
    if (err) {
      throw new Error(err);
    }
    data = JSON.parse(data);
    data.push(newNote);
    fs.writeFile(dataFile, JSON.stringify(data), "utf-8", (err) => {
      if (err) {
        throw new Error(err);
      }
    });
    res.json(data);
  });
};
const deleteANote = (req, res, next) => {
  const { id } = req.params;
  fs.readFile(dataFile, (err, data) => {
    if (err) {
      throw new Error(err);
    }
    if (!id) {
      return res.status(404).json({ error: { msg: `id ${id} not found` } });
    }
    data = JSON.parse(data);
    let updatedData = data.filter((d) => d.id !== id);
    fs.writeFile(dataFile, JSON.stringify(updatedData), "utf-8", (err) => {
      if (err) {
        throw new Error(err);
      }
    });
    res.json(data);
  });
};
module.exports = {
  getAllNotes,
  createANote,
  deleteANote,
};
