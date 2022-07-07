const Product = require("../models/Product");

const getAll = () => {
    return ProductList.find({}).then(productList => productList);
}

const insertProduct = () => {
    const data = {
        name: 'Achu',
        header: 'Test from Achu',
        bilderId: [1,2,3],
        productId: 1,
        profilBild: 1
    }

    const newProduct = new Product(data);
    newProduct.save();
}

module.exports = {
    getAll,
    insertProduct,
}