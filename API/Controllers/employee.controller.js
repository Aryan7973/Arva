const Employee = require("../Models/employee.model")


// Create
const createEmployee = async (req, res) => {
    const {
        employeeId,
        firstName,
        lastName,
        jobRole,
        dateOfBirth,
        reportingManager,
        department,
        projectCode,
        joiningDate,
        companyEmail,
        personalEmail,
        gender,
        phoneNumber,
        password,
        workShift
    } = req.body;

    try {

        // Check for Unique information
        let existingEmployeeId = await Employee.findOne({employeeId})
    
        if (existingEmployeeId) { 
            console.log("Employee ID already exists!")
            return res.send("Employee ID already exists!")
        }
        
        let existingEmail = await Employee.findOne({ companyEmail })

        if (existingEmail) {
            console.log("Organisation email already in use!")
            return res.send("Organisation email already in use!")
        }

        const user = await Employee.create({
            employeeId: employeeId, 
            firstName: firstName,
            lastName: lastName,
            jobRole: jobRole,
            dateOfBirth: new Date(dateOfBirth),
            reportingManager: reportingManager,
            department: department,
            projectCode: projectCode,
            joiningDate: new Date(joiningDate),
            companyEmail: companyEmail,
            personalEmail: personalEmail,
            gender: gender,
            phoneNumber: phoneNumber,
            password: password,
            workShift: workShift
        })

        res.send("Employee created!")

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

// Read
const showEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}

// Update
const updateEmployee = async (req, res) => {
    const employeeId = req.params.employeeId;
    console.log(employeeId)
    const {password, companyEmail, ...updates} = req.body;
    try {
        const employeeExists = await Employee.findOne({ employeeId: employeeId });
        console.log(employeeExists)
        if (!employeeExists) {
            return res.send("Employee not found!")
        }
        const employee = await Employee.updateOne({ employeeId:employeeId }, { $set: updates }, { new: true })
        res.send(employee);

    }catch (error) {
        console.log(error)
        res.send("Internal system error!");
    }
}

// Delete
const removeEmployee = async (req, res) => {
    const { employeeId } = req.body

    try {
        const employeeExists = await Employee.findOne({ employeeId: employeeId });
        if (!employeeExists) {
            return res.send("Employee not found!")
        }
        await Employee.deleteOne({ employeeId: employeeId });
        res.send("Employee Removed!")

    } catch (error) {
        console.log(error)
        res.status(500).json("Internal system error!")
    }
}


module.exports = { createEmployee, showEmployees, updateEmployee,removeEmployee }