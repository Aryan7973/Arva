const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

app.get('/',(req,res)=>{
    res.send("Hi, Babes!")
});

app.listen(5000, () => {
  console.log("ARVA - The Beginning");
});
