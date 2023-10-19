const assignmentModal= require("../Modals/AssignmentModal");
const uploadModal= require("../Modals/AssignmentUpload");

const createAssignment = async(req,res) => {
    const newAssignment = new assignmentModal(req.body);
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

// Check Assignment
const checkAssignment = async(req,res) => {
    const {assignmentId,studentId} = req.body;

    const newUpload = new uploadModal({
        assignmentId,
        studentId
    });
    try {
        await newUpload.save();
    } catch (error) {
        console.log(error) 
    }

    let checkedAss;
    try {
        checkedAss = await assignmentModal.findByIdAndUpdate(assignmentId,{
            $push:{response:studentId}
        },{
            new:true
        })
    } catch (error) {
        console.log(error)
    }
    res.send({checkedAss})
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




exports.createAssignment = createAssignment
// exports.AssignmentUpload = AssignmentUpload
exports.getAssignmentById = getAssignmentById
exports.checkAssignment = checkAssignment
exports.findResponse = findResponse