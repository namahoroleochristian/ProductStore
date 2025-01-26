import express, { json } from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./config/db.js";
import Routes from './routes/App.route.js'


dotenv.config();
console.log(process.env.MONGO_URI);
const PORT = process.env.PORT;

const app = express();

    ConnectDB();
    

app.use(express.json());
app.use('/api/products',Routes)

app.listen(PORT, () => {
  console.log("running on http://localhost:3040");
});



// Ua8btcYDW629zkPP                     cluster password
