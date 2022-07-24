const router = require("express").Router();
const generalService = require("../services/generalService");
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
