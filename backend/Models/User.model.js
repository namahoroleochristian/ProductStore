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
    },
    role: {
        type: String,
        enum: ['admin','standard','sudo'],
        required: true
    }
 })
 const userModel = mongoose.model('users',userSchema)
 export default userModel