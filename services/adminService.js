const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { COOKIE_SECRET } = require("../config/config");
const db = require('../config/mongoose');


const register = async ({firmenName, name, vorname, email, password}) => {
    await db.db_switch();

    let user = await User.findOne({email});
    if(user) throw { message: "Email wird verwendet.", status: 404, input : 'eMail'}

    user = new User({firmenName, name, vorname, email, password});
    return user.save();
}

const login = async (email, password) => {
    await db.db_switch();

    let user = await User.findOne({email});
    if(!user) throw {message: 'Потребителското име не съществува.', status: 404, input : 'username'};
    
    let areEqual = await bcrypt.compare(password, user.password);

    if(!areEqual) throw {message: 'Невалидна парола.', status: 404, input : 'password'};

    let token = jwt.sign({_id: user.id, email: user.email, cluster: user.cluster}, COOKIE_SECRET);

    if(user.cluster) await db.db_switch(user.cluster);
    
    return {token: token, _id: user.id, email: user.email};
};

module.exports = {
    register,
    login
}

