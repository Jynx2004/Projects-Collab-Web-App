const mongoose=require("mongoose");

require("dotenv").config();

const dbConnect = () =>{
    mongoose.connect(process.env.DBURL)

    .then(() => console.log("DB success"))

    .catch((err) =>{
        console.log("DB Failed");
        console.error(err.message);
        process.exit(1);
    });
};


module.exports=dbConnect;