const router = require("express").Router();
const productService = require("../services/productService");

router.get("/", (req, res, next) => {
    productService.getAll()
       .then((prducts) => {
           res.json(prducts)
       }).catch(next);
});

router.post("/new", (req, res, next) => {
    const body = req.body;
    productService.insertProduct(body).then(product => {
        res.json(product)
    }).catch(next);
})

module.exports = router;