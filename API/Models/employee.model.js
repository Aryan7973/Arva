const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const employeeSchema = new mongoose.Schema({

    employeeId: {
        type: String,
        required: true,
        unique: true,
        minLength:8,
        maxLength:8
    },
    firstName: {
        type: String,
        required: true,
        minLength:3,
    },
    lastName: {
        type: String,
        required: true,
        minLength:3,
    },
    jobRole: {
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

// Hash password before save
employeeSchema.pre('save', async function(next){
    
    if(!this.isModified('password')){
        return next();
    }

    try{
        //Generate a salt
        const salt = await bcrypt.genSalt(10);

        //Hash password
        this.password = await bcrypt.hash(this.password, salt);
        next();

    }catch(error){
        next(error)
    }

})

// Compare password
employeeSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee