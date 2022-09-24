const mongoose = require('mongoose')
require('mongoose-double')(mongoose);
const Schema = mongooose.Schema;
const double = mongoose.SchemaTypes.double;

const productSchema = Schema({
    product_id:{
        type:Number
    },
    available_items: {
        type: Number
    },
    category: {
        type: String
    },
    created: {
        type: Date
    },
    description: {
        type: String
    },
    image_url: {
        type: String
    },
    manufacturer: {
        type: String
    },
    name: {
        type: String
    },
    price: {
        type: double
    },
    updated: {
        type: Date
    }
})