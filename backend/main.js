import express, { json } from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./config/db.js";
import Routes from './routes/App.route.js'
import cookieParser from "cookie-parser";
import cors from 'cors'


dotenv.config();

console.log(process.env.MONGO_URI);

const PORT = process.env.PORT;

const app = express();


    ConnectDB();
    
// app.use(cors({
//   origin:[
//     'http://localhost:3000'
//   ],
//   method:['POST','GET'],
//   allowedHeaders: ['content-Type']
// }))
app.use(cors())
app.use(express.json());
app.use(cookieParser())
app.use('/api',Routes)

app.listen(PORT, () => {
  console.log("running on http://localhost:3040");
});



// Ua8btcYDW629zkPP                     cluster password
