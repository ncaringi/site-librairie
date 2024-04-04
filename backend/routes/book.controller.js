const BookModel = require('../model/Book.js');

// détail des routes pour l'API CRUD des livres //

// CREATE
module.exports.setBookes = async (req, res) => {
    try {
        const book = await BookModel.create({
            name: req.body.name,
            id: req.body.id,
            author: req.body.author,
            cover: req.body.cover,
            price: req.body.price,
            resume: req.body.resume
        });
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// READ
module.exports.getBookes = async (req, res) => {
    try {
        const book = await BookModel.find();
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// UPDATE
module.exports.editBookes = async (req, res) => {
    try {
        const book = await BookModel.findById(req.params.id);

        const updateBookes = await BookModel.findByIdAndUpdate(
            book,
            req.body,
            {new: false}
            );

        res.status(200).json(updateBookes);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// DELETE
module.exports.deleteBookes = async (req, res) => {
    try {
        const book = await BookModel.findById(req.params.id);
        await BookModel.deleteOne(book);
        res.status(200).json({ message: "donnée supprimée : " + req.params.id});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}