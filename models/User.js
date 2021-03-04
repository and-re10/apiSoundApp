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
    password: {
        type: String,
        required: true,
        max: 15,
        min: 6
    },
    contacts: [ContactsSchema],
    sounds: [SoundsSchema],
    // pushToken: {
    //     type: String,
    //     required: true
    // },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Users', UsersSchema);