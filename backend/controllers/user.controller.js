
import userModel from "../Models/User.model.js";
import mongoose from "mongoose";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config()
export const createUser = async (req, res) => {
  const Users = req.body;
  if (!Users.name || !Users.email || !Users.password) {
   return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
    
  }
  
  Users.password = await bcryptjs.hash(Users.password,10)
  console.log(Users.password);
  console.log("Users.password");
  
  
  const newUser = new userModel(Users)
  try {
    await newUser.save();
   return res.status(201).json({
      success: true,
      message: "we done did it !",
    });
  } catch (error) {
   return res.status(500).json({
      success: false,
      message: "wari uzikko BIRANGIYE Hhhhhh Debugging ubu IRATANGIYE",
    });
    console.log(`error is ${error.message}`);
  }
}




export const loginUser = async (req,res) => {

  const user = req.body
  if (!user.email || !user.password) {
   return res.status(404).json({success:false,message:'all fields are required'})
  }
  const isUserThere = await userModel.findOne({email:user.email})
  if (!isUserThere ) {
    return res.status(404).json({success:false,message:'invalid credential'})
  }
  const DoesPasswordMatch =await bcryptjs.compare(user.password,isUserThere.password)
  if (!DoesPasswordMatch ) {
   return res.status(400).json({success:false,message:"invali credential"})
  }
   const Generated_jwt= jwt.sign(
        {
        userId:isUserThere._id,
        role: isUserThere.role
    },
    process.env.SECRET_KEY,
    {expiresIn:'100h'},
)
res.cookie('jwt',Generated_jwt,{
  httpOnly:false,
  secure:process.env.NODE === 'production',
  sameSite: 'strict',
  maxAge: 3600000 *10
})
res.status(200).json({success:true,message:'login was a success welcome',token:Generated_jwt})
}

export const viewAllUsers =async (req,res) => {
  if (req.user.role !== 'admin' && req.user.role !== 'sudo') {
    return res.status(403).json({success:false,message:'forbiden to carry out this operation'})
  }
  try{ 
    const Users = await userModel.find()
   return  res.status(302).json(Users)
  }
  catch(error){
    return res.status(404).json({success:false,message: error.message})
    
  }
 
}
export const deleteUser =  async (req, res) => {
  if(req.user.role !== 'admin' && req.user.role !=='sudo'){
    return res.status(403).json({success: false,message:'not authorised (Forbiden)'})
  }
    
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
      return  res
          .status(404)
          .json({ success: false, message: "Nigga give me a valid URL Id" });
      }
      try {
        const Cureentuser = await userModel.find({_id: id})
        const CurrentUserRole = Cureentuser.role

        const isAdmin = CurrentUserRole == 'admin' 
        if(isAdmin){
          return res.status(401).json({success:false,message:'can not delete admin'})
        };
        const result = await userModel.findByIdAndDelete(id);
    
        return res.status(200).send({
          success: true,
          message: "Data deleted",
        });
      } catch (error) {
       return res.status(404).json({
          success: false,
          message: `object with id ${id} not found`,
        });
      }
    }
    export const updateUser = async (req,res) =>{
      if(req.user.role !== 'admin' && req.user.role !== 'sudo'){
        return res.status(403).json({success:false,message:'forbidden action'})
      }
      const {id} = req.params;
      const newUser = req.body
      if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({
          success:false,
          message : "the id in the Url is not complete and not valid "
        });
      }
      try{
        
        const response = await userModel.findByIdAndUpdate(id, newUser, {new : true,runValidators :true})
        return res.status(200).json({        
          success:true,
          message: response
        })
      }
      catch (error){
       return  res.status(500).json({
          success : false,
          message : error.message
        })
      }
    }