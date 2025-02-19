const express = require("express");

const app = express();

app.get("/profile",(req,res)=>{
    const {username,age,address} = req.query;

    res.send("profile page of "+" "+username+" "+age+" "+address);

});

app.listen(4020,()=>{
    console.log("Server Started..");
});

let userdata = [
    {
        id:1,
        name:"Ronak",
        address:"Jalandhar"
    },
    {
        id:2,
        name:"Yudhish",
        address:"Bathinda"
    },
    {
        id:3,
        name:"Palak",
        address:"Bathinda"
    },
    {
        id:4,
        name:"Shubham",
        address:"Haryana"
    },
    {
        id:5,
        name:"Srishti",
        address:"Cheeka"
    }
]

app.get("/allusers",(req,res)=>{
    res.send(userdata);
});

app.get("/getbyid",(req,res)=>{
    let {id} = req.query;
    for(let i=0;i<userdata.length;i++) {
        if(userdata[i].id==id) {
            return res.send(userdata[i]);
        }
    }
    res.send("...USER NOT FOUND...");
});