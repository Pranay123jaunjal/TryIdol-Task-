const express=require("express")
const { signup, login } = require("../controllers/userAuth")
const { auth } = require("../middlewares/authMiddleware")
const { addCategory, getallCategorys, updateCategory, DeleteCategory } = require("../controllers/categoryControllers")
const { addService, getallServices, updateService, DeleteSevices } = require("../controllers/ServicesControllers")

const router=express.Router()

router.post("/signup",signup)
router.post("/login",login)

router.post("/addCategory",auth,addCategory)
router.get("/getallcategory",auth,getallCategorys)
router.put("/updateCategory/:id",auth,updateCategory)
router.delete("/deletecategory/:id",auth,DeleteCategory)


router.post("/addservice",auth,addService)
router.get("/getallservices",auth,getallServices)
router.put("/updateservices/:id",auth,updateService)
router.post("/deleteservice/:id",auth,DeleteSevices)

module.exports={router}