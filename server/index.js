const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Employeemodel=require('./models/Employee')

const PORT=3000

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Nitishbabu:nitish9966@cluster0.tsuqmmv.mongodb.net/React")

app.post('/register',(req,res)=>{
    Employeemodel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>res.json(err))
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
