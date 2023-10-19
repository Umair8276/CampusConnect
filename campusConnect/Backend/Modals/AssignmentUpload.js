const mongoose = require("mongoose")

const assignmentUpload = new mongoose.Schema({
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Admission"
    },
    assignmentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Assignment"
    },

},
{timestamps:true}
);

const uploadModal = new mongoose.model("AssignmentUpload",assignmentUpload);
module.exports = uploadModal;