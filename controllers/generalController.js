const router = require("express").Router();
const generalService = require("../services/generalService");

router.get("/", (req, res, next) => {
  generalService
    .getAll()
    .then((generalData) => {
      res.json({ generalData });
    })
    .catch(next);
});

router.post("/:itemId/updateItem", (req, res, next) => {
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
