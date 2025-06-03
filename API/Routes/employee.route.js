const express = require("express")
const router = express.Router();

const {createEmployee, showEmployees, updateEmployee,removeEmployee} = require("../Controllers/employee.controller")


router.post("/test",(req,res)=>res.status(200).send("Post Worked!"))

// Created
router.post("/createEmployee",createEmployee);

// Read
router.get("/",showEmployees);

// Update
router.put("/updateEmployee/:employeeId",updateEmployee);

// Delete
router.delete("/removeEmployee",removeEmployee);

module.exports = router;