const express=require('express')
const { MongoServerSelectionError } = require('mongodb')
const studentRouter=require('./routes/student')
const indexRouter=require('./routes/index')
const methodOverride = require('method-override')
const mongoose=require('mongoose')
require('dotenv').config()
const app=express()

//views
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

const connectFunc = async()=>{
    try{
        //await mongoose.connect("mongodb://localhost/bai3")
        await mongoose.connect(process.env.STR_CONNECT)
        console.log("thành công")
    }catch(e){
        console.log("thất bại")
    }
}
connectFunc()
app.use('/student/',studentRouter)
app.use('/',indexRouter)
app.listen(process.env.PORT||4000)