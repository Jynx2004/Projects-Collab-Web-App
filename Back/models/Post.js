const mongoose=require("mongoose");

const PostSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true,

    },

    postSender:{
        type:String,
        required:true,
    },

    description:{
        type:String,
        required:true,
    },

    githubL:{
        type:String,
        required:true,
    },

    livedemoL:{
        type:String,
    }
});


module.exports=mongoose.model("Post",PostSchema);