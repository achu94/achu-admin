const router = require('express').Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const {SECRET, COOKIE_NAME} = require('../config/config');
const adminService = require("../services/adminService");

router.post('/register', (req, res, next) => {
    const {firmenName, name, vorname, email, password} = req.body;

    adminService.register(req.body).then(user => {
        res.json(user)
    }).catch(next);
});


module.exports = router;