const mongoose=require('mongoose')
const studentSchema= new mongoose.Schema({
    ten:{ type: String, required: true, unique: true },
    email:{type:String,required:true},
    sdt:{type:Number}
})
module.exports=mongoose.model('student',studentSchema)