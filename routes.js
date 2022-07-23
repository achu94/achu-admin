const router = require("express").Router();

const generalController = require("./controllers/generalController");
const timesController   = require("./controllers/timesController.js");
const productController= require("./controllers/productController");
const adminController= require("./controllers/adminController");

router.use("/", generalController);
router.use("/time", timesController);
router.use("/product", productController);
router.use("/admin", adminController);

module.exports = router;
