const {model, Schema} = require('mongoose');

const receipeSchema = new Schema({
    name: String,
    description: String,
    createdAt: String,
    thumbsUp: Number,
    thumbsDown: Number
   
});

module.exports = model('Receipe', receipeSchema);