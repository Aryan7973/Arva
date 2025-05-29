const express = require("express");


const app = express();

const cors = require("cors");

const Employee = require("./Models/employeeModel");

mongoose.connect('mongodb+srv://arva:GkYKTgSHWgYkdGis@cluster0.fjsok3j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log('Connected to MongoDB')
}).catch((error) => console.log('Problem connecting'))

const newUser = new Employee({
    employeeId:"fdjldsajfkdsjfdsljfk",
    firstName: 'Aryan',
    lastName: 'Khan',
    jobeRole: "Analyst",
    dateOfBirth: new Date("2022-03-25"),
    reportingManager: "Anup Khan",
    department: "Backup",
    projectCode: "Valaha-9010",
    joiningDate: new Date("2022-03-25"),
    companyEmail: "aryankhan@yopmail.com",
    personalEmail: "aryankhan@yopmail.com",
    gender: "M",
    phoneNumber: 9993333992020,
    password: "MaulaMereMaula",
    workShift: "Morning 7:30"
})

newUser.save().then(console.log("User Saved!")).catch((error) => console.log(error))

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hi, Babes!")
});

app.listen(5000, () => {
    console.log("ARVA - The Beginning");
});
