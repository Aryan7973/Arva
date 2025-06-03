const express = require("express")
const router = express.Router()
const {signIn} = require("../Controllers/auth.controller")

router.post('/signin',signIn);

module.exports = router
