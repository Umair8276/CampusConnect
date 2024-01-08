const express = require("express")
const router = express.Router();
const {createAssignment,AssignmentUpload,getAssignmentById,checkAssignment,findResponse,getAssignment,completedAss,getAssByBranch} = require("../Controllers/AssignmentController")

router.post("/assignment",createAssignment)
// router.post("/assupload",AssignmentUpload)
router.post("/checkass",checkAssignment)
router.get("/findresponse/:assId",findResponse)
router.get("/getassbyid/:id",getAssignmentById)
router.get("/getass/:branch/:classes",getAssignment)
router.get("/completedass/:assignmentId/:studentId",completedAss)
router.get("/getassbybranch/:branch",getAssByBranch)

module.exports = router; 