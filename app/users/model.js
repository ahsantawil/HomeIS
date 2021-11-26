const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    email: {
        type: String,
        require: [true, 'Email harus diisi']
    },
    name: {
        type: String,
        require: [true, 'nama harus diisi']
    },
    password: {
        type: String,
        require: [true, 'kata sandi harus diisi']
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'admin'
    },
    status: {
        type: String,
        enum: ['Y', 'N'],
        default: 'Y'
    },
    phoneNumber: {
        type: String,
        require: [true, 'Phone number harus diisi']
    }
}, { timestamps: true })

module.exports = mongoose.model('Users', userSchema);