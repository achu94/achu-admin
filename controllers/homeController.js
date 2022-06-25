const router = require("express").Router();
const homeService = require("../services/homeService");

router.get("/", (req, res, next) => {
  homeService
    .getAll()
    .then((generalData) => {
      res.json({ generalData });
    })
    .catch(next);
});

module.exports = router;
