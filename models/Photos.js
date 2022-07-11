const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = require("./Product");

const photosSchema = new Schema({
    key: {
        type: String,
        required: true
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'products'
    },
    sort: {
        type: Number
    },
    aktiv: {
        type: Boolean,
        default: true
    }
}, {timestamps: true});

photosSchema.post("save", function (topic, next) {
    Product.updateOne(
        {"_id": this.productId},
        {$push: {
            "bilderid": this._id
        }}
    ).then( () => next());
});

module.exports = mongoose.model('photos', photosSchema);