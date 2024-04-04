const mongoose = require('mongoose');
const {Schema} = mongoose;

const BookSchema = new Schema({
    name: String,
    id: String,
    author: String,
    price: Number,
})

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;