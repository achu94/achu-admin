const Product = require("../models/Product");
const Photos = require("../models/Photos");

const getAll = () => {
    // return Product.find({}).then(productList => productList);
    return Product.find({}).populate({path: 'bilderid', select: '_id, key'});
}

const insertProduct = (product) => {
    const newProduct = new Product(product);
    return newProduct.save();
}

const removeProduct = (id) => {
    return Product.deleteOne({_id: id})
}

const insertPhoto = (photoData) => {
    const newPhoto = new Photos(photoData);
    return newPhoto.save();
}

module.exports = {
    getAll,
    insertProduct,
    removeProduct,
    insertPhoto
}