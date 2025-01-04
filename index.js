const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/sum" ,(req,res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString());
})

app.listen(3000)

// first npm init -y 
// npm install express 
// npm install cors
// node index.js   
// next html page setuu.