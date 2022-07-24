const {COOKIE_SECRET, COOKIE_NAME} = require('../config/config');
const jwt = require('jsonwebtoken');
const db = require('../config/mongoose');

module.exports = async function(req, res, next) {
    const token = req.cookies;

    if(!token || !token[COOKIE_NAME]) return res.redirect('/login');

    await jwt.verify(token[COOKIE_NAME], COOKIE_SECRET, async function(err, decoded) {
        if(err) return res.clearCookie(COOKIE_NAME);

        await db.db_switch(decoded.cluster);
        res.locals.user = decoded;
        res.locals.isAuth = true;
        // res.json({userData: decoded, isAuth: true});
    });

    next();
};