const assignmentModal= require("../Modals/AssignmentModal");
const uploadModal= require("../Modals/AssignmentUpload");

const createAssignment = async(req,res) => {
    const newAssignment = new assignmentModal(req.body);   //Accept data from Backend
    try {
        await newAssignment.save();
    } catch (error) {
        console.log(error)
    }
    res.send({msg:"Assignment Created Successfully",newAssignment})
}

const getAssignmentById = async(req,res) => {
    let ass;
    const {id} = req.params;
    try {
        ass = await assignmentModal.findById(id)
    } catch (error) {
        console.log(error)
    }
    if(ass){
        return res.send({ass})
    }
    else 
      return res.send({err:"Something went wrong"})
}

//  Assignment Upload
// const AssignmentUpload = async(req,res) => {
//     const newUpload = new uploadModal(req.body);
//     try {
//         await newUpload.save();
//     } catch (error) {
//         console.log(error)
        
//     }
// }

// Check Assignment and Upload Assignment
const checkAssignment = async(req,res) => {
    const {assignmentId,studentId,file} = req.body;

    // Upload Assignment
    const newUpload = new uploadModal({
        assignmentId,
        studentId,
        file,
    });
    try {
        await newUpload.save();
    } catch (error) {
        console.log(error) 
    }

    let checkedAss;
    try {
        checkedAss = await assignmentModal.findByIdAndUpdate(assignmentId,{
            $push:{response:studentId},
        },{
            new:true
        })
        let updateState;
        updateState = await uploadModal.findByIdAndUpdate(newUpload._id,{
            isCompleted:true
        },{
            new:true
        })
    } catch (error) {
        console.log(error)
    }
    res.send({checkedAss,newUpload})
}

// Find Total Response
const findResponse = async(req,res) => {
    const {assId} = req.params;
    let resp;
    try {
        resp = await assignmentModal.findById(assId).populate("response")
    } catch (error) {
        console.log(error)
    }
    res.send({resp})
}

// Find Assignment Based on Branch and class
const getAssignment = async(req,res) => {
    const {branch,classes} = req.params;
    console.log(req.body)
    let data;
    try {
        data = await assignmentModal.find({branch,classes})
    } catch (error) {
        console.log(error)
    }
    if(data)
      return res.send({data})
    else 
      return res.send({err:"Something went wrong"})
}

// 
const completedAss = async(req,res) => {
    let ass;
    try {
        ass = await uploadModal.find({assignmentId:req.params.assignmentId,studentId:req.params.studentId})
    } catch (error) {
        console.log(error)
    }
    return res.send({ass})
}

// Get Assignment Based On branch
const getAssByBranch = async(req,res) => {
    console.log(req.params)
    const {branch} = req.params;
    let ass;
    try {
        ass = await assignmentModal.find({branch}).populate("response")
    } catch (error) {
        console.log(error)
    }
    if(ass) {
        return res.send({ass})
    }
    return res.send({err:"Something went wrong"})
}


exports.createAssignment = createAssignment
// exports.AssignmentUpload = AssignmentUpload
exports.getAssignmentById = getAssignmentById
exports.checkAssignment = checkAssignment
exports.findResponse = findResponse
exports.getAssignment = getAssignment
exports.completedAss = completedAss
exports.getAssByBranch = getAssByBranch