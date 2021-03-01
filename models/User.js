const mongoose = require('mongoose');

const ContactsSchema = mongoose.Schema({
    name: {
        type: String,
        required: false 
    },
    color: {
        type: String,
        required: false
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
    sounds: [SoundsSchema]
});

module.exports = mongoose.model('Users', UsersSchema);