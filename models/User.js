const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const { COOKIE_SECRET, COOKIE_SALT_ROUNDS } = require("../config/config");

const userSchema = new mongoose.Schema({
  firmenName: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    lowercase: true,
    index: true,
  },
  name: String,
  vorname: String,
  email: {
    type: String,
    trim: true,
    lowercase: true,
    index: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
//   roles: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Role",
//     },
//   ],
});

userSchema.pre('save', function(next){
   bcrypt.genSalt(parseInt(COOKIE_SALT_ROUNDS))
    .then(salt => bcrypt.hash(this.password, salt))
    .then( hash => {
        this.password = hash;
        next();
    })
});

module.exports = mongoose.model('User', userSchema);
