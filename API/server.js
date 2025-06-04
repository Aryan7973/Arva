// Packages
const express = require("express");
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv")
dotenv.config()

// Routes
const employeeRoute = require("./Routes/employee.route")
const authRoute = require("./Routes/auth.route")

const app = express();  // Initialise express App
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());

const cors = require("cors");
app.use(cors());

mongoose.connect('mongodb+srv://arva:GkYKTgSHWgYkdGis@cluster0.fjsok3j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log('Connected to MongoDB')
}).catch((error) => console.log('Problem connecting'))


app.listen(5000, () => {
    console.log("Server is runnig on port 5000!");
});

app.use("/api/employee",employeeRoute);
app.use("/api/auth",authRoute)