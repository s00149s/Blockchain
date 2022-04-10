const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    collection_name: {
        type: String,
        maxlength: 100
    },
    token_name : {
        type: String,
        maxlength: 100
    },
    token_type : {
        type: String,
        maxlength: 50
    },
    description : {
        type: String,
        maxlength: 500,
    },
    contract address : {
        type: String,
        minlength: 5,
        unique: 1
    },
    token_id: {
        type: String,
            unique: 1
    },
    sale_end: {
        type: String
    },
    current_price: {
        type: String
    },
    img_url: {
        type: String,
        trim: true
    },
    event_type: String,
    price: String,
    from: String,
    to: String,
    Date: Date
})

const Product = mongoose.model('Product', productSchema)
module.export = {Product}
