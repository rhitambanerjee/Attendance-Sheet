const express=require('express')
const router=express.Router()

const employeecontroller=require('../controllers/employee.controller')

router.get('/:id',employeecontroller.getEmployeeByID)

router.post('/',employeecontroller.createNewEmployee)

router.put('/:id',employeecontroller.updateEmployee)

router.delete('/:id',employeecontroller.deleteEmployee)

module.exports=router