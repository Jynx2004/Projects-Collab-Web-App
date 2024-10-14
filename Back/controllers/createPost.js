const Post = require("../models/Post");

exports.createPost=async (req,res) =>{

    try{

        console.log(req.body);

        const {name, postSender,description,githubL,livedemoL} = req.body;

        const post = await Post.create({
            name,
            postSender,
            description,
            githubL,
            livedemoL,
        });

        console.log(post);

        return res.status(200).json({
            status:200,
            message:"Post created successfully",
            data:post,
        });


    }

    catch(error){
        console.log(error);
        return res.status(500).json({
            message:error.message,
            status:400,

        });
    }

};
