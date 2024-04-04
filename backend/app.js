const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// le backend est prêt pour être connecté à une base de donnée MongoDB dans le futur //
const app = express();

// Utilisation de body-parser pour analyser les requêtes JSON
app.use(bodyParser.json());

// Utilisation du middleware cors pour gérer les requêtes CORS
app.use(cors());

// Indication du chemin vers les routes pour les livres
app.use("/book", require("./routes/book.routes"));




module.exports = app;
