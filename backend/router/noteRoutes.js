const authMiddleware = require("../middleware/authMiddleware")
const express = require("express");
const router = express.Router();
const {createNote, getNote, getNoteByID, updateNote, deleteNote} = require("../controllers/noteController");


//routes for createnote
router.post("/create", authMiddleware, createNote)

//routes for getnote
router.get("/getnotes", authMiddleware, getNote)

//routes for getnote by id
router.get("/getnotes/:id", authMiddleware, getNoteByID)

//routes for updatenote
router.put("/updateNote/:id", authMiddleware, updateNote)

//routes for deletenote
router.delete("/deletenote/:id", authMiddleware, deleteNote)

module.exports = router;