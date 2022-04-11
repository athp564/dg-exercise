const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    joinDate: {
        required: false,
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)