const mongoose = require("mongoose");

const timesSchema = new mongoose.Schema({
    Montag: [],
    Dienstag: [],
    Mittwoch: [],
    Donnerstag: [],
    Freitag: [],
    Samstag: [],
    Sonntag: [],
}, {timestamps: true});

module.exports = mongoose.model('bussinestimes', timesSchema);