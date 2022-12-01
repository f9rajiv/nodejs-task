const mongoose =require('mongoose');
const productSchema = new mongoose.Schema({
    product_name: {
        type:String,
        required:true
    },
    category_name: {
        type:String,
        required:true
    },
    description: String,
    created_by: String,
    status:{
        type:String,
        required:true
        
    },
},{timestamps:true})
module.exports=mongoose.model('product',productSchema)