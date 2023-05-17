const {
  getAllNotes,
  createANote,
  deleteANote,
} = require("../controllers/notesController");

const router = require("express").Router();

router.get("/", getAllNotes);
router.post("/", createANote);
router.delete("/:id", deleteANote);

module.exports = router;
