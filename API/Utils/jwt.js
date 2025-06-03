const jwt = require("jsonwebtoken")

const generateToken = async (id)=>{

    return jwt.sign({id},process.env.JWT_SECRET,{
        expires:'1h'
    })
}

module.exports = {generateToken}