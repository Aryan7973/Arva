import mongoose from "mongoose";

mongoose.connect('',{useNewUrlParser:true, useUnifiedTopology:true}),then(()=>{
    console.log('Connected to MongoDB')
}).catch(error => console.log('Problem connecting'))

// connection  ke liye alag banao bhai file hehe
// Baad mai server.js mai daal denge

const employeeSchema = mongoose.Schema({

employeeId:{
    type:String,
    required:true,
    unique:true
},
firstName:{
    type:String,
    required:true
},
lastName:{
    type:String,
    required:true
},
jobeRole:{
    type:String,
    required:true
},
dateOfBirth:{
    type:Date,
    required:true
},
reportingManager:{
    type:String,
    require:true
},
department:{
    type:String,
    required:true
},
projectCode:{
    type:String,
    required:true
},
joiningDate:{
    type:Date,
    required:true
},
companyEmail:{
    type:String,
    required:true,
    unique:true
},
personalEmail:{
    type:String,
    required:true,
    unique:true
},
gender:{
    type:String,
    required:true,
    enum:['M','F','O'],
    uppercase:true
},
phoneNumber:{
    type:Number,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
    minLength:8
},
workShift:{
    type:String,
}

},{
    timestamps:true
});

const employee = mongoose.model('Employee',employeeSchem);

export default employee;