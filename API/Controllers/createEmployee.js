const mongoose = require("mongoose")
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

    // Here goes the code to validate if the Employee already exists

    const user = await Employee.create({
        employeeId: employeeId,
        firstName: firstName,
        lastName: lastName,
        jobRole: jobRole,
        dateOfBirth: dateOfBirth,
        reportingManager: reportingManager,
        department: department,
        projectCode: projectCode,
        joiningDate: joiningDate,
        companyEmail: companyEmail,
        personalEmail: personalEmail,
        gender: gender,
        phoneNumber: phoneNumber,
        password: password,
        workShift: workShift
    })
}

