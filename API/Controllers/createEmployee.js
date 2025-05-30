const Employee = require("../Models/employeeModel")

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
        let existingEmployee = await Employee.findOne({ email: companyEmail })

        if (existingEmployee) {
            console.log("Employee exists!")
            res.send("Employee already exists!")
        }

        const user = await Employee.create({
            employeeId: employeeId,
            firstName: firstName,
            lastName: lastName,
            jobRole: jobRole,
            dateOfBirth:new Date(dateOfBirth),
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
        res.send("Internal system error!")
    }
}

module.exports = {createEmployee}