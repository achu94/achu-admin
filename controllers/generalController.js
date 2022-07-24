const router = require("express").Router();
const generalService = require("../services/generalService");
const adminService = require("../services/adminService");
const jwt = require("jsonwebtoken");
const { COOKIE_NAME } = require("../config/config");
const isAuth = require("../middleware/isAuth");

router.get("/", isAuth, (req, res, next) => {
  generalService
    .getAll()
    .then((generalData) => {
      res.json({ generalData });
      // res.status(200);
    })
    .catch(next);
});

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  adminService.login(email, password).then((token) => {
    const thirtyDays = 30 * 24 * 60 * 60 * 1000;
    res.cookie(COOKIE_NAME, token, { maxAge: thirtyDays, httpOnly: true, sameSite: 'none', secure: true });
    res.send({ login: true }).status(200);
  })
  .catch(next);
});

router.post("/:itemId/updateItem", isAuth, (req, res, next) => {
  const id = req.params.itemId;
  const body = req.body;

  generalService
    .uptadeItem(id, body)
    .then((newValue) => {
      res.json(newValue);
    })
    .catch(next);
});

module.exports = router;
