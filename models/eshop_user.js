const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const userSchema = Schema({
   id: {
       type: Number
   },
    created: {
        type: Date
    },
    email:{
        type: String
    },
    first_name:{
        type: String
    },
    last_name: {
        type: String
    },
    password:{
        type: String
    },
    phone_number:{
        type: String
    },
    role:{
        type: String
    },
    updated:{
        type: Date
    },
    user_name:{
        type: String
    }
})

module.exports = mongoose.model('eshop_user', userSchema);