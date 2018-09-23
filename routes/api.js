var express=require('express');
var router=express.Router();

var Product=require('../models/product');

Product.methods(['Get','Put','post','delete']);
Product.register(router,'/products');
/*
router.get('/products', function(req,res){
  res.send('Api is working');
});
*/
module.exports=router;
