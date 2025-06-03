const employeeSchema = require("../Models/employeeModel")
const {generateToken} = require("../Utils/jwt")


const signIn = async(req,res)=>{
     const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {

        // Check if user exists by email
        let employee = await employeeSchema.findOne({ email });
        if (!employee) {
            return res.status(400).json({ msg: 'Invalid email!' });
        }

        // Compare entered password with hashed password
        const isMatch = await employeeSchema.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Wrong password!' });
        }

        // User authenticated, generate JWT token
        const token = generateToken(employee._id);

        res.json({
            msg: 'Signed in successfully',
            token,
            employee: {
                id: employee._id,
                username: employee.username,
                email: employee.email,
            },
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    
}


module.exports = {signIn}