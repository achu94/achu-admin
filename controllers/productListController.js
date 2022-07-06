const router = require("express").Router();
const productListService = require("../services/productListService");

router.get("/", (req, res, next) => {
    productListService
       .getAll()
       .then((productList) => {
           console.log(productList);
           res.json(productList)
       })
       .catch(next);
});

module.exports = router;