const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    stu_class:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    endYear:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"student"
    },
    totalFees:{
        type:Number,
        required:true
    },
    feesPaid:{
        type:Number,
        required:true
    },
    remainingFees:{ 
        type:Number, 
    },
    mobileNo:{
        type:Number,
        required:true
    },
    rollNo:{
        type:String,
    },
    currentSem:{
        type:String,
        required:true
    },
    attendence:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },

    
},
{timestamps:true}
);

const admissionModal = new mongoose.model("Admission",admissionSchema);
module.exports = admissionModal;