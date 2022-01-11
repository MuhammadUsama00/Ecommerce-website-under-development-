import Products from './MODELS/products.js'
import asyncHandler from 'express-async-handler'
 export const getproducts= asyncHandler(async(req,res) =>{
   const products=await Products.find({});
   return res.json(products)
 })
 export const getproductsById=asyncHandler(async(req,res)=>{
    const {id}=req.params
    let product= await Products.findById(id);
    if (product) {
     res.json(product);
    }
    else{
      res.status(404).json("Product not found");
    }
  })

