const EmployeeModel=require('../models/employee.model')

exports.getEmployeeByID=(req,res)=>{
   // console.log('get emp by id')
   EmployeeModel.getEmployeeByID(req.params.id,(err,employee)=>{
      if(err){
         res.send(err)
      }
      else{
         console.log('single employee data',employee)
         res.send(employee)
      }
   })
}

exports.createNewEmployee=(req,res)=>{
   // console.log('create new emp')
   // console.log('req data',req.body)
   const employeeReqData=new EmployeeModel(req.body)
   if(req.body.constructor===Object && Object.keys(req.body).length===0){
      res.send(400).send({success:false,message:'Please fill all the data'})
   }
   else{
      // console.log('valid data')
      EmployeeModel.createEmployee(employeeReqData,(err,employee)=>{
         if(err){
            res.send(err)
         }
         else{
            res.json({
               status:true,
               message:'Employee data inserted successfully',
               data:employee.insertId
            })
         }
      })
   }
}

exports.updateEmployee=(req,res)=>{
   const employeeReqData=new EmployeeModel(req.body)
   console.log('employeereqdata update',employeeReqData)
   if(req.body.constructor===Object && Object.keys(req.body).length===0){
      res.send(400).send({success:false,message:'Please fill all the data'})
   }
   else{
      EmployeeModel.updateEmployee(req.params.id,employeeReqData,(err,employee)=>{
         if(err){
            res.send(err)
         }
         else{
            res.json({
               status:true,
               message:'Employee data updated successfully'
            })
         }
      })
   }
}


exports.deleteEmployee=(req,res)=>{
   EmployeeModel.deleteEmployee(req.params.id,(err,employee)=>{
      if(err){
         res.send(err)
      }
      else{
         res.json({success:true,message:'Data deleted successfully'})
      }
   })
}