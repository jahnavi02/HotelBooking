const express = require("express");
const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} = require("../controllers/userController");
const { constants } = require("fs");
const { verifyAdmin, verifyToken, verifyUser } = require("../utils/verifyToken.js");

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req,res,next)=>{
  res.send("hello user, you are logged in")
})

router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
  res.send("hello user, you are logged in and you can delete your account")
})

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
  res.send("hello admin, you are logged in and you can delete all accounts")
})

//UPDATE
router.put("/:id", verifyUser, updateUser); //works good

//DELETE
router.delete("/:id", verifyUser, deleteUser); //works good

//GET
router.get("/:id", verifyUser, getUser); //works good

//GET ALL
router.get("/", verifyAdmin, getUsers);

module.exports = router;