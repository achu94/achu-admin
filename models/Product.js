const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
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
    bilderid: [{type: Schema.Types.ObjectId, ref: "photos"}]

}, {timestamps: true});

module.exports = mongoose.model('products', productSchema);