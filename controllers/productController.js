const router = require("express").Router();
const productService = require("../services/productService");

router.get("/", (req, res, next) => {
    productService
       .getAll()
       .then((productList) => {
           console.log(productList);
           res.json(productList)
       })
       .catch(next);
});

module.exports = router;