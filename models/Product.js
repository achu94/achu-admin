const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ueberschrift: {
        type: String,
        default: 'Ich bin ein Muster Überschrift.'
    },
    allgemeintext: {
        type: String,
    },
    profilbildid: {
        type: Number,
    },
    bilderid: {
        type: [Number],
    }
}, {timestamps: true});

module.exports = mongoose.model('products', productSchema);