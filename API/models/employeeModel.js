import mongoose from "mongoose";

mongoose.connect('',{useNewUrlParser:true, useUnifiedTopology:true}),then(()=>{
    console.log('Connected to MongoDB')
}).catch(error => console.log('Problem connecting'))

// connection  ke liye alag banao bhai file hehe

const employeeSchema = mongoose.Schema({



},{
    timestamps:true
});

const employee = mongoose.model('Employee',employeeSchem);

export default employee;