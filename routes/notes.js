const { getAllNotes } = require("../controllers/notesController");

const router = require("express").Router();

router.get("/", getAllNotes);

module.exports = router;
