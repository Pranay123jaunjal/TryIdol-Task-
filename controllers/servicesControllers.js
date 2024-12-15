const Service=require("../models/Service")

exports.  addService=async(req,res)=>{
     try {
        const {categoryid,serviceName,type,price}=req.body
        if(!categoryid){
           return res.status(400).json({
               success:false,
               message:"category id is comming from req body"
           })
        } else if(!serviceName){
           return res.status(400).json({
               success:false,
               message:"service name comming from req body"
           })
        }else if(!type){
           return res.status(400).json({
               success:false,
               message:"type is comming from req body"
           })
        }
        else if(!price){
           return res.status(400).json({
               success:false,
               message:"Price is comming from req body"
           })
        }
        // console.log(req.body)
        
        const existedService= await Service.findOne({serviceName})
        if(existedService){
           return res.status(400).json({
               success:false,
               message:"service already existed "
           })
        }
        let services=await Service.create({serviceName,type,price,categoryid:categoryid})
       
       console.log(" this is services",services)
        return res.status(400).json({
           success:true,
           message:"service created successfully",
          
        })
     } catch (error) {

        return res.status(400).json({
            success:false,
            message:"error in creating service",
          
         })
     }

} 

exports.getallServices=async(req,res)=>{
    try {
        const allservices=await Service.find()
        if(!allservices){
            return res.status(400).json({
                success:false,
                message:"services not found "
            })
        }
        return res.status(200).json({
            success:true,
            message:"all services found ",
            data:allservices
        })
    } catch (error) {
    
        return res.status(400).json({
            success:true,
            message:"error in getting  service",
            data:service
         })
    }
}


exports.updateService=async(req,res)=>{
    try {
        const id=req.params.id
        const {serviceName,type,price}=req.body
        

        if(!id){
            return res.status(400).json({
                success:false,
                message:"service id  id is comming from req params"
            })
        }
        const udpatedService=await Service.findByIdAndUpdate(
            id,
            { serviceName: serviceName,type:type, price:price},
            { new: true }
          );
          return res.status(200).json({
            success: true,
            message: "service updated ",
            updatedata: udpatedService,
          });
    } catch (error) {

           return res.status(400).json({
            success:true,
            message:"error in updateing  service",
            data:service
         })
    }
}
exports.DeleteSevices=async(req,res)=>{
    try {
        const id=req.params.id
        if(!id){
            return res.status(400).json({
                success:false,
                message:"service id  id is comming from req params"
            })
        }
            const DeleteService = await Service.findByIdAndDelete(id);
            return res.status(200).json({
                success:true,
                message:"service deleted successfully"
            })
    } catch (error) {
        return res.status(400).json({
            success:true,
            message:"error in getting  service",
            data:service
         })
        
    }
}