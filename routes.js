const router =require('express').Router();
const productRoute=require('./products/route')

router.use('/product',productRoute)

module.exports=router