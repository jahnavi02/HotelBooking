const User = require("../models/userModel.js");
const mongoose = require("mongoose");

module.exports.updateUser = async (req,res,next)=>{
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}
module.exports.deleteUser = async (req,res,next)=>{
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
}
module.exports.getUser = async (req,res,next)=>{
  try {

    const user = await User.findById(req.params.id);
    if(user){
      res.status(200).json(user);
    }else{
      res.status(404).json("User not found");
    }
    
  } catch (err) {
    next(err);
  }
}
module.exports.getUsers = async (req,res,next)=>{
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}