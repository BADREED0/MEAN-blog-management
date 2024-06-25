const mongoose = require('mongoose')


const Author = mongoose.model('Author' , {

    name: {
        type: String
    },
    duree: {
        type: String,
        minLength: 4,
        maxLength: 10
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    about: {
        type: String
    },
    image: {
        type: String
    }

})

module.exports = Author;