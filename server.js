const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const server = express();
const port = 8000;

const SECRET_KEY = "qwerty1241!@%$#%!%#$^34626";

server.use(cors());

server.post("/login",(request,response)=>{
    response.status(200)
    const token = jwt.sign(request.query, SECRET_KEY);
    response.send({token});

    // deccoding the jwt-token in user details
    const decodedUser = jwt.decode(token, SECRET_KEY);
    console.log(decodedUser);
})

server.listen(process.env.PORT || port,()=>{
    console.log(`> HOST URL : http://localhost:${port}/login`);
});
