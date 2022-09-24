const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = Schema({
    id:{
        type: Number
    },
    city:{
        type:String
    },
    landmark:{
        type:String
    },
    name:{
        type:String
    },
    phone:{
        type:String
    },
    state:{
        type:String
    },
    street:{
        type:String
    },
    zipcode:{
        type:String
    },
    // get id from eshop_user
    user_id:{
        type:String
    }

})
module.exports = mongoose.model('eshop_shipping_address', addressSchema);