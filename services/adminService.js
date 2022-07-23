const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { COOKIE_SECRET } = require("../config/config");


const register = async ({firmenName, name, vorname, email, password}) => {

    console.log(firmenName);


    let user = await User.findOne({email});
    if(user) throw { message: "Email word verwendet.", status: 404, input : 'eMail'}

    user = new User({firmenName, name, vorname, email, password});
    return user.save();
}

module.exports = {
    register
}