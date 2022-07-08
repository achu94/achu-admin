const Product = require("../models/Product");

const getAll = () => {
    return Product.find({}).then(productList => productList);
}

const insertProduct = (product) => {
    const newProduct = new Product(product);
    return newProduct.save();
}

module.exports = {
    getAll,
    insertProduct,
}