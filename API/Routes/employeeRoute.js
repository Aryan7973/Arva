const express = require("express")
const router = express.Router();

const {createEmployee} = require("../Controllers/createEmployee")

router.post("/createEmployee",createEmployee)
router.post("/test",(req,res)=>res.status(200).send("Post Worked!"))
router.get("/",(req,res)=>res.status(400).json("Working!"))
module.exports = router;