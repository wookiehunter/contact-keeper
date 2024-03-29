const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
    },
    birthday: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    comments: {
        type: String
    },
    type: {
        type: String,
        default: 'personal'
    },
    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('contact', ContactSchema)