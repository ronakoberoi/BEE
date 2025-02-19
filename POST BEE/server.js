const express = require("express");
const app = express();


app.get("/adduser",(req,res)=>{
    res.sendFile(__dirname+"/register.html");
});


app.listen(4020,()=>{
    console.log("SERVER STARTED...");
});