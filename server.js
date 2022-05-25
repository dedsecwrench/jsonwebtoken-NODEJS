const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const server = express();
const port = 8000;

const SECRET_KEY = "qwerty1241!@%$#%!%#$^34626";

server.use(cors());

server.post("/login",(request,response)=>{
    const token = jwt.sign(request.query, SECRET_KEY);
    response.status(200).json({token})
})

server.listen(process.env.PORT || port,()=>{
    console.log(`> HOST URL : http://localhost:${port}/login`);
});
