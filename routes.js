const router = require("express").Router();

const generalController = require("./controllers/generalController");
const timesController   = require("./controllers/timesController.js")

router.use("/", generalController);
router.use("/time", timesController);

module.exports = router;
