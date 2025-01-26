import mongoose from "mongoose";
export const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required: true
    }
 })
 const userModel = mongoose.model('User',userSchema)
 export default userModel