const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const HASH_ROUND = 10;

let playerSchema = mongoose.Schema({
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    status: {
        type: String,
        enum: ['Y', 'N'],
        default: 'Y'
    },
    email: {
        type: String,
        require: [true, 'Email harus diisi']
    },
    password: {
        type: String,
        require: [true, 'kata sandi harus diisi'],
        maxLength: [50, 'panjang password harus antara 9 - 50 karakter'],
        minLength: [9, 'panjang password harus antara 9 - 50 karakter'],
    },
    phoneNumber: {
        type: String,
        require: [true, 'Phone number harus diisi'],
        maxLength: [13, 'panjang nomor harus antara 9 - 13 karakter'],
        minLength: [9, 'panjang nomor harus antara 9 - 13 karakter'],
    },
    username: {
        type: String,
        require: [true, 'username harus diisi'],
        maxLength: [225, 'panjang username harus antara 3 - 225 karakter'],
        minLength: [3, 'panjang username harus antara 3 - 225 karakter']
    },
    name: {
        type: String,
        require: [true, 'nama harus diisi'],
        maxLength: [225, 'panjang nama harus antara 3 - 225 karakter'],
        minLength: [3, 'panjang nama harus antara 3 - 225 karakter']
    },
    avatar: {
        type: String 
    },
    fileName: {
        type: String
    },
    favorite: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
}, { timestamps: true })

playerSchema.path('email').validate( async function(value){
    try {
        const count = await this.model('Player').countDocuments({ email: value })
        return !count;
    } catch (err) {
        throw err
    }
}, attr => `${attr.value} Sudah Terdaftar`)

playerSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, HASH_ROUND)
    next()
})

module.exports = mongoose.model('Player', playerSchema);