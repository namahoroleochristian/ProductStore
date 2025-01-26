import mongoose from "mongoose";
import productModel from "../Models/Product.model.js"

export const CreateProduct = async (req, res) => {
    const products = req.body;
    if (!products.name || !products.price || !products.image) {
     return  res.status(400).json({
        success: false,
        message: "don't give me empty stuff FILL IT 😡",
      });
     
    }
    const newProduct = new productModel(products);
    try {
      await newProduct.save();
      res.status(201).json({
        success: true,
        message: "Great data saved 🏆😉",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "There was an error saving the product 😞",
      });
      console.error(`error :${error.message}`);
    }
  } 
  export const DeleteProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
  return res.status(404).json({
        success: false,
        message: "YO Fam Your Id in the URL is not valid",
      });
      
    }
      try {
        const result = await productModel.findByIdAndDelete(id);
        console.log("am here");
        res.status(200).json({ success: true, message: "deleted" });
        console.log(result);
        
      } catch (error) {
        console.log(error.message);
  
        res.status(500).json({ success: false, message: error.message });
      }
  }
  export const getAllProducts = async (req, res) => {
    try {
      const response = await productModel.find();
      console.log(response.message);
      res.status(200).json({
        success: true,
        message: response,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  export const UpdateProducts = async (req,res) =>{
    const {id} = req.params;
    const newProduct = req.body
    if(!mongoose.Types.ObjectId.isValid(id)){
     return res.status(404).json({
        success:false,
        message : "gimme complete and valid URL"
      });
    }
    try{
      
      const response = await productModel.findByIdAndUpdate(id, newProduct, {new : true,runValidators :true})
      res.status(200).json({        
        success:true,
        message: response
      })
    }
    catch (error){
      res.status(500).json({
        success : false,
        message : error.message
      })
    }
  }