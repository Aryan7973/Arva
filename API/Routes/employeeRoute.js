const express = require("express")
const router = express.Router();

const {createEmployee} = require("../Controllers/createEmployee")

router.post("/createEmployee",createEmployee)