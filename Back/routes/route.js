const express=require("express");
const router=express.Router();

const {createUser}=require("../controllers/createUser");
const {getuser}=require("../controllers/getuser");
const { createPost } = require("../controllers/createPost");
const { getposts } = require("../controllers/getPosts");

router.post("/createuser",createUser);
router.get("/getuser",getuser);
router.post("/createpost",createPost);
router.get("/getposts",getposts)


module.exports=router;