const mongoose =  require('mongoose')
require('mongoose-double')(mongoose);
const Schema = mongoose.Schema;
const double = mongoose.SchemaTypes.double;

const orderSchema = Schema({
    id:{
        type: Number
    },
    amount:{
        type: double
    },
    order_date:{
        type: Date
    },
    //get product_id from eshop_product id
    product_product_id:{
        type: Number
    },
    //get id from eshop_shipping_address 
    shipping_address_id:{
        type: Number
    },
    //user_id from eshop_shipping_address 
    user_id:{
        type: Number
    }
})