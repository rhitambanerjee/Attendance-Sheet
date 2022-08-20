var dbConn=require('../../config/db.config')

var Employee=function(employee){
   this.first_name=employee.first_name
   this.last_name=employee.last_name
   this.present_days=employee.present_days
   this.absent_days=employee.absent_days
}

Employee.getEmployeeByID=(id,result)=>{
   dbConn.query('SELECT * FROM students WHERE id=?',id,(err,res)=>{
      if(err){
         console.log('Error while fetching data by id',err)
         result(null,err)
      }
      else{
         result(null,res)
      }
   })
}

Employee.createEmployee=(EmployeeReqData,result)=>{
   dbConn.query('INSERT INTO students SET?',EmployeeReqData,(err,res)=>{
      if(err){
         console.log('Error while inserting data')
         result(null,err)
      }
      else{
         console.log('employee data created successfully')
         result(null,res)
      }
   })
}

Employee.updateEmployee=(id,EmployeeReqData,result)=>{
   dbConn.query("UPDATE students SET first_name=?,last_name=?,present_days=?,absent_days=? WHERE id=?",[EmployeeReqData.first_name,EmployeeReqData.last_name,EmployeeReqData.present_days,EmployeeReqData.absent_days,id],(err,res)=>{
      if(err){
         console.log('Error while updating the record')
         result(null,err)
      }
      else{
         console.log("Employee Data Updated successfully")
         result(null,res)
      }
   })
}

Employee.deleteEmployee=(id,result)=>{
   dbConn.query("DELETE FROM students WHERE id=?",id,(err,res)=>{
      if(err){
         console.log('Error while deleting',err)
         result(null,err)
      }
      else{
         console.log('data deleted successfully')
         result(null,res)
      }
   })
}
module.exports=Employee