import express, { json } from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./config/db.js";
import userModel from "./Models/User.model.js";
import ProductModel from "./Models/Product.model.js";

dotenv.config();
console.log(process.env.MONGO_URI);
const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log("running on http://localhost:3040");
});

app.get("/", (req, res) => {
  ConnectDB();
  res.send("server is ready");
});
app.post("/product", async (req, res) => {
  const products = req.body;
  if (!products.name || !products.price || !products.image) {
    res.status(400).json({
      success: false,
      message: "don't give me empty stuff FILL IT 😡",
    });
    console.log(products);

    res.send(products);
  }
  const newProduct = new ProductModel(products);
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
});
app.post("/users", async (req, res) => {
  const Users = req.body;
  if (!Users.name || !Users.email || !Users.password) {
    res.status(400).json({
      success: false,
      message: "don't give me empty stuff FILL IT 😡",
    });
    res.send(Users)
  }
  const newUser = new userModel(Users);
  try {
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "we done did it !!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "wari uzikko BIRANGIYE Hhhhhh Debugging ubu IRATANGIYE",
    });
    console.log(`error is ${error.message}`);
  }
});
app.get("/getUsers",async (req, res) => {
  try {
    const result = await userModel.find();
    res.status(200).json(result);
  } catch (error) {
    console.log(`error message:${error.message}`);
  }
});
app.delete("/delete/user",async (req,res) =>{
  const deleteid = await userModel.find().select('_id')
  try{
  const result = await userModel.deleteOne(deleteid)
  res.status(204).send()
  
  

}catch(error){
  res.status(404).json({
    success:false,
    message:`object with id ${deleteid} not found`
  })
}
})

// chat

app.delete("/delete/user/:id", async (req, res) => {
  const { id } = req.params; // Extract ID from the route parameter

  try {
    const result = await userModel.findByIdAndDelete(id); // Find and delete user by ID

    if (!result) {
      return res.status(404).json({
        success: false,
        message: `Object with ID ${id} not found`,
      });
    }

    res.status(204).send(); // No content response for successful deletion
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error occurred: ${error.message}`,
    });
  }
});
app.delete("/delete/user", async (req, res) => {
  const { id } = req.body; // Extract ID from request body

  try {
    const result = await userModel.findByIdAndDelete(id); // Find and delete user by ID

    if (!result) {
      return res.status(404).json({
        success: false,
        message: `Object with ID ${id} not found`,
      });
    }

    res.status(204).send(); // No content response for successful deletion
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error occurred: ${error.message}`,
    });
  }
});

// Ua8btcYDW629zkPP                     cluster password
