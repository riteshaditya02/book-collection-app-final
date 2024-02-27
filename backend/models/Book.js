const mongoose = require('mongoose');



const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Book Title is Required'],
    },
    author:{
        type: String,
        required: [true, 'Author Name is Required'],
    },
    date:{
        type: Date,
        required: [true,'Date is Required'],
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        requred: true,
    },
    }, {
        timestamps: true
});


const Book = mongoose.model('Book', bookSchema);

module.exports = Book;