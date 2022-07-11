const router = require("express").Router();
const productService = require("../services/productService");
const multer  = require('multer')
const upload = multer({ dest: "uploads" })
const { uploadFile } = require("../aws");

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

router.post('/upload', upload.single('file'), async (req, res, next) => {
    const file = req.file;
    const productId = req.body.productId;

    try {
        const result = await uploadFile(file);
        if(result.Location){

            const photoData = {
                key: result.key,
                productId: productId
            };

            productService.insertPhoto(photoData);
        }

        res.json(result.Location);
    } catch (error) {
        next(error);
        // res.sendStatus(404);
    }
})

router.post('/:productID', (req, res, next) => {
    let productID = req.params.productID;

    productService.removeProduct(productID).then( status => {
        res.json(status);
    }).catch(next);
})

module.exports = router;