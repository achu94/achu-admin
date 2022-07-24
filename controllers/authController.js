const router = require("express").Router();
const adminService = require("../services/adminService");
const { COOKIE_NAME } = require("../config/config");
const isAuth = require("../middleware/isAuth");

router.get("/", isAuth, (req, res, next) => {
    res.send(res.locals).status(200);
    next();
});

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  adminService.login(email, password).then((userData) => {
    const {token, _id, email} = userData;

    const thirtyDays = 30 * 24 * 60 * 60 * 1000;
    res.cookie(COOKIE_NAME, token, { maxAge: thirtyDays, httpOnly: true, sameSite: 'none', secure: true });
    res.send({ id: _id, email: email, isAuth: true }).status(200);
  })
  .catch(next);
});

module.exports = router;
