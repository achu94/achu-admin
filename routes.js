const router = require("express").Router();

const generalController = require("./controllers/generalController");

router.use("/", generalController);

module.exports = router;
