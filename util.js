"use strict"

const { error } = require("console");
const fs = require("fs"),
    httpStatus = require("http-status-codes"),
    contentType = require("./content-types");

module.exports = {
    getFile : (file,res) => {
        fs.readFile(`/${file}`,(error,data) => {
            if(error) {
                res.writeHead(httpStatus.INTERNAL_SERVER_ERROR,contentType.html);
                res.end("<h1>500</h1><h2>server Error.</h2> ");
            }
            res.end(data);
        });
    }
};