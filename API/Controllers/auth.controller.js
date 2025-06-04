const employeeSchema = require("../Models/employee.model")
const {generateToken} = require("../Utils/jwt")


const signIn = async(req,res)=>{
     const { companyEmail, password } = req.body;

    // Basic validation
    if (!companyEmail || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {

        // Check if user exists by email
        let employee = await employeeSchema.findOne({ companyEmail });
        if (!employee) {
            return res.status(400).json({ msg: 'Invalid email!' });
        }

        // Compare entered password with hashed password
        const isMatch = await employee.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Wrong password!' });
        }

        // User authenticated, generate JWT token
        const token = generateToken({employeeId:employee._id,companyEmail:companyEmail,employeeName:employee.firstName});

        res.json({
            msg: 'Signed in successfully',
            token:token,
            employee: {
                id: employee._id,
                username: employee.firstName+" "+employee.lastName,
                companyEmail: employee.companyEmail,
            },
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    
}


module.exports = {signIn}