const express=require("express")
const { dbconnect } = require("./config.js/database")
const { router } = require("./routes/userRoutes")
const cookiparser=require("cookie-parser")
const cookieParser = require("cookie-parser")
const app=express()
app.use(cookieParser())

app.use(express.json())
app.use("/api/v1",router)
const PORT=8000
app.listen(PORT,()=>{
    console.log(`app is running at port ${PORT}`)
})
dbconnect()

