const express = require("express");

const app = express();

let blogs = [
    { id: 1, title: "Understanding JavaScript Closures", content: "Closures are a fundamental concept in JS..." },
    { id: 2, title: "Introduction to Node.js", content: "Node.js is a runtime environment..." },
    { id: 3, title: "Express.js Routing Explained", content: "Routing is a core feature of Express.js..." },
    { id: 4, title: "Asynchronous JavaScript", content: "JavaScript uses async programming for..." },
    { id: 5, title: "RESTful APIs with Express", content: "Building APIs in Express involves..." },
    { id: 6, title: "Understanding Middleware in Express", content: "Middleware functions are used for..." }
];

app.get("/blogs", (req, res) => {
    res.send(blogs);
});

app.get("/deleteblog", (req, res) => {
    const { id } = req.query;
    for(let i=0;i<blogs.length;i++) {
        if(blogs[i].id==id) {
            blogs.splice(i,1);
            return res.send("User Deleted....")
        }
    }
    res.send("NO USER FOUND TO DELETE....")
});

app.get("/addblog", (req,res) =>{
    const{id, title, content} = req.query;
    for(let i=0;i<blogs.length;i++) {
        if(blogs[i].id==id) {
            return res.send("User ALREADY EXISTS....")
        }
    }
    blogs.push({id, title, content});
    res.send("NEW BLOG ADDED");
});

app.listen(4020, () => {
    console.log("Server Started on port 4020..");
});