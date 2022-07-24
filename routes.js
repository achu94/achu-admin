const router = require("express").Router();
const isAuth = require("./middleware/isAuth");

const generalController = require("./controllers/generalController");
const timesController   = require("./controllers/timesController.js");
const productController= require("./controllers/productController");
const adminController= require("./controllers/adminController");
const authController= require("./controllers/authController");

router.use("/", authController);
router.use("/general", isAuth, generalController);
router.use("/time", isAuth, timesController);
router.use("/product", isAuth, productController);
router.use("/admin", isAuth, adminController);

module.exports = router;
