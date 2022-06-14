const express = require("express");
const connectDB = require("./config/connectDB");
const User = require("./models/User");
require("dotenv").config({ path: "./config/.env" });
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 5000;

connectDB()


// routes 
// post users in the database 

app.post("/add",async(req,res)=>{
    const {fullName,email,phone}=req.body
try {
    const newUser = new User({
        fullName,
        email,
        phone
    })
    await newUser.save()
    res.send(newUser)
} catch (error) {
    console.log(error.message)
}
})


// get all users from the database 
app.get('/getUsers',async(req,res)=>{
    try {
        const users  = await User.find()
        res.send(users)
    } catch (error) {
    console.log(error.message)
        
    }
})

// get a specific 
app.delete("/deleteUser/:x",async(req,res)=>{
    try {
        const specificUser = await User.findByIdAndDelete(req.params.x)
        res.send(`${specificUser.fullName} has been deleted!`)
    } catch (error) {
    console.log(error.message)
        
    }
})

app.put("/edit/:id",async(req,res)=>{
    try {
        const editedUser = await User.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
        res.send(editedUser)
    } catch (error) {
    console.log(error.message)
        
    }
})




app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`server is running on port ${PORT}`)
);
