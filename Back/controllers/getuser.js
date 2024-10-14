const User=require("../models/User");

exports.getuser = async (req,res) =>{

    console.log(req.query);
    try{

        const {name,password}=req.query;

        const re= await User.find({name:name,
            password:password
        });

        console.log(re);
        console.log(re.length);
        console.log(typeof(re));

        return res.status(200).json({
            status:200,
            data:re.length,

        });




    }

    catch (error){

        console.log(error);
        return res.status(500).json({
            status:500,
            message:error.message,
        })

    }

};
