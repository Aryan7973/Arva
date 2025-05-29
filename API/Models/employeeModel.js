const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({

    employeeId: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    jobeRole: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    reportingManager: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    projectCode: {
        type: String,
        required: true
    },
    joiningDate: {
        type: Date,
        required: true
    },
    companyEmail: {
        type: String,
        required: true,
        unique: true
    },
    personalEmail: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['M', 'F', 'O'],
        uppercase: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    workShift: {
        type: String,
    }
},
    {
        timestamps: true
    });

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee