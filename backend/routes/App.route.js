import express from "express";
// import userModel from "./Models/User.model.js";

import { CreateProduct, DeleteProduct, getAllProducts, UpdateProducts } from "../controllers/Product.controller.js";

export const Router = express.Router();


  Router.post("/", CreateProduct);
  // Router.post("/users", async (req, res) => {
  //   const Users = req.body;
  //   if (!Users.name || !Users.email || !Users.password) {
  //     res.status(400).json({
  //       success: false,
  //       message: "don't give me empty stuff FILL IT 😡",
  //     });
  //     res.send(Users);
  //   }
  //   const newUser = new userModel(Users);
  //   try {
  //     await newUser.save();
  //     res.status(201).json({
  //       success: true,
  //       message: "we done did it !!",
  //     });
  //   } catch (error) {
  //     res.status(500).json({
  //       success: false,
  //       message: "wari uzikko BIRANGIYE Hhhhhh Debugging ubu IRATANGIYE",
  //     });
  //     console.log(`error is ${error.message}`);
  //   }
  // });
  // app.get("/getUsers", async (req, res) => {
  //   try {
  //     const result = await userModel.find();
  //     res.status(200).json(result);
  //   } catch (error) {
  //     console.log(`error message:${error.message}`);
  //   }
  // });
  // app.delete("/delete/user/:id", async (req, res) => {
  //   const { id } = req.params;
  //   if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return  res
  //       .status(404)
  //       .json({ success: false, message: "Nigga give me a valid URL Id" });
  //   }
  //   try {
  //     const result = await userModel.findByIdAndDelete(id);
  
  //     res.status(200).send({
  //       success: true,
  //       message: "Data deleted",
  //     });
  //   } catch (error) {
  //     res.status(404).json({
  //       success: false,
  //       message: `object with id ${id} not found`,
  //     });
  //   }
  // });
  
  Router.get("/Get", getAllProducts);
  Router.delete("/:id", DeleteProduct);
  Router.put('/:id',UpdateProducts)
export default Router;