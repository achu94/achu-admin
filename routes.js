const router = require("express").Router();
const isAuth = require("./middleware/isAuth");

const generalController = require("./controllers/generalController");
const timesController   = require("./controllers/timesController.js");
const productController= require("./controllers/productController");
const adminController= require("./controllers/adminController");

router.use("/", generalController);
router.use("/time", isAuth, timesController);
router.use("/product", isAuth, productController);
router.use("/admin", isAuth, adminController);

module.exports = router;
