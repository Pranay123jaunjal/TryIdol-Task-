const mongoose=require("mongoose")

const servicesSchema=new mongoose.Schema({
    categoryid:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
        
    }],
    serviceName:{
        type:String,

    },
    type:{
        type:String,
        enum:["Normal","VIP"]
    },
    price:{
        type:String
    }
})