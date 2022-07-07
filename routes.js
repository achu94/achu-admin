const router = require("express").Router();

const generalController = require("./controllers/generalController");
const timesController   = require("./controllers/timesController.js");
const productController= require("./controllers/productController");

router.use("/", generalController);
router.use("/time", timesController);
router.use("/product", productController);

module.exports = router;
