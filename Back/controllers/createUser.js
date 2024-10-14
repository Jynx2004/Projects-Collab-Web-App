
const User = require("../models/User");

exports.createUser = async (req,res) =>{

    try{

        console.log(req.body);
        const {name,password}=req.body;

        const user=await User.create({
            name,
            password,
        });

        return res.status(200).json({
            status:200,
            message:"User Created Sucessfully",
            data:user,
        });

    }

    catch (error){

        console.log(error);
        return res.status(500).json({
            status:500,
            message:error.message,
        });

    }



};
