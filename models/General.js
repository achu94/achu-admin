const mongoose = require("mongoose");

const generalSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    postalCode: Number,
    country: String,
    telefon: Number,
    email: String,
    steuerId: String,
    aboutUs: String,
}, {timestamps: true});
// }, { collection: 'hm_trockenbau' });

module.exports = mongoose.model('General', generalSchema);