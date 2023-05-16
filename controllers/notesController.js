const fs = require("fs");

const getAllNotes = (req, res, next) => {
  fs.readFile(`./db/db.json`, (err, data) => {
    if (err) {
      throw new Error(err);
    }
    res.json(JSON.parse(data));
  });
};

module.exports = {
  getAllNotes,
};
