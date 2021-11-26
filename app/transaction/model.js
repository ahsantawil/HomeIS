const mongoose = require('mongoose');

let transactionSchema = mongoose.Schema({
    historyVoucherTopup: {
        gameName : { type: String, require: [true, 'nama game harus diisi']},
        category : { type: String, require: [true, 'kategori harus diisi']},
        thumbnail : { type: String },
        coinName : { type: String, require: [true, 'Nama koin harus diisi']},
        coinQuantity : { type: String, require: [true, 'Jumlah koin harus diisi']},
        price : { type: Number },
    },

    histroyPayment: {
        name : { type: String, require: [true, 'nama harus diisi']},
        type : { type: String, require: [true, 'tipe pembayaran harus diisi']},
        bankName : { type: String, require: [true, 'Nama bank harus diisi']},
        noRekening : { type: String, require: [true, 'Nomor rekening harus diisi']},
    },

    name: {
        type: String,
        require: [true, 'nama harus diisi'],
        maxLength: [225, 'panjang nama harus antara 3 - 225 karakter'],
        minLength: [3, 'panjang nama harus antara 3 - 225 karakter'],
    },
    
    accountUser: {
        type: String,
        require: [true, 'nama akun harus diisi'],
        maxLength: [225, 'panjang nama harus antara 3 - 225 karakter'],
        minLength: [3, 'panjang nama harus antara 3 - 225 karakter'],
    },

    tax: {
        type: Number,
        default: 0,
    },

    value: {
        type: Number,
        default: 0,
    },

    status: {
        type: String,
        enum: ['pending', 'success', 'failed'],
        default: 'pending'
    },

    player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    },

    historyUser : {
        name: { type: String, require: [true, 'nama player harus diisi']},
        phoneNumber: {
            type: Number,
            require: [true, 'nomor harus diisi'],
            maxLength: [13, 'panjang nomor harus antara 9 - 13 karakter'],
            minLength: [9, 'panjang nomor harus antara 9 - 13 karakter'],
        }
    },

    category : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },

    users : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },

}, { timestamps: true })

module.exports = mongoose.model('Transaction', transactionSchema);