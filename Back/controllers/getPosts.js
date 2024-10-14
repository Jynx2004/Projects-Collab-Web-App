const Posts = require("../models/Post");

exports.getposts=async (req,res) => {

    try{

        const posts= await Posts.find({});
        console.log("Hello");
        console.log(posts);
        return res.status(200).json({
            status:200,
            data:posts,
        });

    }

    catch(error){
        console.log(error);
        return res.status(500).json({
            message:error.message,
            status:500,
        });
    }

};
