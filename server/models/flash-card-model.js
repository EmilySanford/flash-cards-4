var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/flash-cards-4');
// mongoose.connection.on('error', console.error.bind(console, 'connection error:'));


var schema = new mongoose.Schema({
    question: String,
    category: String,
    answers: [
        { text: String, correct: Boolean }
    ]
});

module.exports = mongoose.model('FlashCard', schema);