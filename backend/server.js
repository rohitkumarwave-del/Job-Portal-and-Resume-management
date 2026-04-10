const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/jobportal")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

/* Models */

const User = require("./models/user");
const Application = require("./models/Application");

/* Test Route */

app.get("/", (req,res)=>{
  res.send("Job Portal Backend Running");
});

/* Register */

app.post("/register", async (req,res)=>{

try{

const {name,email,password,role} = req.body;

const newUser = new User({
name,
email,
password,
role
});

await newUser.save();

res.send("User Registered");

}catch(err){

console.log(err);
res.status(500).send("Registration Failed");

}

});

/* Login */

app.post("/login", async (req,res)=>{

const {email,password} = req.body;

const user = await User.findOne({email,password});

if(user){
res.send("Login Success");
}else{
res.status(401).send("Invalid Login");
}

});

/* Apply Job */

app.post("/apply-job", async (req,res)=>{

const {name,email,job} = req.body;

const newApplication = new Application({
name,
email,
job
});

await newApplication.save();

res.send("Application submitted");

});

app.listen(5000, ()=>{
console.log("Server running on port 5000");
});