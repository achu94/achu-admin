const router = require("express").Router();
const timesService = require("../services/timesService");

router.get("/", (req, res, next) => {
  timesService
    .getAll()
    .then((timesData) => {
      res.json(timesData);
    })
    .catch(next);
});

router.post("/:timeId/updateTime", (req, res, next) => {
  const id = req.params.timeId;
  const body = req.body;

  timesService
    .uptadeTime(id, body)
    .then((newValue) => {
      res.json(newValue);
    })
    .catch(next);
});

router.post("/:timeId/updateClosed", (req, res, next) => {
  const id = req.params.timeId;
  const body = req.body;

  timesService
    .uptadeClosed(id, body)
    .then(() => {
      res.json({value: req.body.value});
    })
    .catch(next);
});

module.exports = router;
