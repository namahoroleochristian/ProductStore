import express from "express";
import userModel from '../Models/User.model.js';

import { CreateProduct, DeleteProduct, getAllProducts, UpdateProducts } from "../controllers/Product.controller.js";
import { createUser, deleteUser, loginUser, updateUser, viewAllUsers } from "../controllers/user.controller.js";
import { tokenVerifier } from "../middlewares/token.middeware.js";

export const Router = express.Router();


  Router.post("/", CreateProduct);
  // Router.post("/register", createUser);
  
  Router.post("/users", createUser);
  Router.post('/login',loginUser)
  Router.get('/AllUsers',tokenVerifier,viewAllUsers)
  Router.delete("/deleteuser/:id",tokenVerifier, deleteUser);
  Router.put("/updateuser/:id",tokenVerifier, updateUser);
  // app.get("/getUsers", async (req, res) => {
  //   try {
  //     const result = await userModel.find();
  //     res.status(200).json(result);
  //   } catch (error) {
  //     console.log(`error message:${error.message}`);
  //   }
  // });
  // 
  
  Router.get("/Get", getAllProducts);
  Router.delete("/:id", DeleteProduct);
  Router.put('/:id',UpdateProducts)
export default Router;