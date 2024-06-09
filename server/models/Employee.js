const mongoose=require('mongoose')

const EmployeeSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const Employeemodel=mongoose.model("employee",EmployeeSchema)

module.exports=Employeemodel