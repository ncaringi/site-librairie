const express = require('express');
const { setBookes, getBookes, editBookes, deleteBookes } = require('./book.controller');
const router = express.Router();

// API CRUD pour la gestion des livres //

//READ
router.get("/", getBookes);

//CREATE
router.post("/", setBookes);

//UPDATE
router.put("/:id", editBookes);

//DELETE
router.delete('/', deleteBookes);
module.exports = router;