const express=require("express");
const dbConnect=require("./config/db");
const rout=require("./routes/route");
const cors=require("cors");

//create express instance
const app=express();

const port=4000;

app.use(cors());


//Middleware
app.use(express.json());

//Routing
app.use("/api/v1",rout);


app.listen(port,()=>{
    console.log(`Server listening at ${port} `);

});

app.get("/",(req,res)=>{
    res.send("Hello client");
});

dbConnect();




