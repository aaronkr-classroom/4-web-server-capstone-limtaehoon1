//main.js

"use strict";

const contentTypes = require('./content-types');


const port = 3000,
    http = require("http"),
    httpStatus = require('http-status-codes'),
    
    router = require('./router'),
   
    util = require('./util');

http.createServer(router.handle).listen(port);
console.log(`Server at : http://localhost: ${port}`);
//get route

router.get("/",(req,res) => {
    res.writeHead(httpStatus.OK,contentTypes.html);
    util.getFile("views/index.html",res);
});

router.get("/courses.html",(req,res) => {
    res.writeHead(httpStatus.OK,contentTypes.html);
    util.getFile("views/courses.html",res);
});

router.get("/contact.html",(req,res) => {
    res.writeHead(httpStatus.OK,contentTypes.html);
    util.getFile("views/contact.html",res);
});
router.post("/contact.html", (req,res) => {
    res.writeHead(httpStatus.OK,contentTypes.html);
    util.getFile("views/thanks.html",res);
});
router.get("/bootstrap.css", (req,res) => {
    res.writeHead(httpStatus.OK,contentTypes.css);
    util.getFile("public/css/bootstrap.css",res);
});
router.get("/confetti_cuisine.css", (req,res) => {
    res.writeHead(httpStatus.OK,contentTypes.css);
    util.getFile("public/css/confetti_cuisine.css",res);
});

router.get("/graph.png", (req,res) => {
    res.writeHead(httpStatus.OK,contentTypes.png);
    util.getFile("public/images/graph.png",res);
});
router.get("/people.jpg", (req,res) => {
    res.writeHead(httpStatus.OK,contentTypes.jpg);
    util.getFile("public/images/people.jpg",res);
});
