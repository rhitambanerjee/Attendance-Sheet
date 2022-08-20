const express=require('express')
const bodyParser=require('body-parser')
const app=express()

const port=process.env.PORT||5000

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

app.get('/',(req,res)=>{
   res.send('hello wrold')
})


const employeeRoutes=require('./src/routes/employee.route')


app.use('/api/v1/employee',employeeRoutes)


app.listen(port,()=>{
   console.log(`express server running on port ${port}`)
})