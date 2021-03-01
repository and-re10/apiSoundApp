const mongoose = require('mongoose');

const ContactsSchema = mongoose.Schema({
    name: {
        type: String,
        required: false 
    },
    color: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const SoundsSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    categorie: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const UsersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    contacts: [ContactsSchema],
    sounds: [SoundsSchema],
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Users', UsersSchema);