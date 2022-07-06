const router = require("express").Router();

const generalController = require("./controllers/generalController");
const timesController   = require("./controllers/timesController.js");
const productListController= require("./controllers/productListController");

router.use("/", generalController);
router.use("/time", timesController);
router.use("/productList", productListController);

module.exports = router;
