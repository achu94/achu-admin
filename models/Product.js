const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    header: {
        type: String,
        default: 'Ich bin ein Muster Überschrift.'
    },
    bilderId: {
        type: [Number],
    },
    productId: {
        type: Number,
    },
    profilBildId: {
        type: [Number],
    },
}, {timestamps: true});

module.exports = mongoose.model('productLists', productSchema);