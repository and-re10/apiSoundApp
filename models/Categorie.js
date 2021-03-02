const mongoose = require('mongoose');

const CategoriesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    color: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Categories', CategoriesSchema);