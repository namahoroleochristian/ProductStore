
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
 export const ConnectDB = async () => {
    try{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connection created at ${conn.connection.host}`);
    
}
catch(error){
    console.log(`error is that ${error.message}`);
    process.exit(1)
    
}
 } 
 export default ConnectDB;