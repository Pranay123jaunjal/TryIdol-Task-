const mongoose=require("mongoose")
require("dotenv").config()
exports. dbconnect=()=>{
    mongoose.connect(process.env.MONGOURI).then(()=>{
        console.log("database connection successfully")
    }).catch((err)=>{
        console.log(err)
        console.log("error occurs in database connection")
    })
}
