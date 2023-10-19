const express = require("express")
const router = express.Router();
const {createAssignment,AssignmentUpload,getAssignmentById,checkAssignment,findResponse} = require("../Controllers/AssignmentController")

router.post("/assignment",createAssignment)
// router.post("/assupload",AssignmentUpload)
router.post("/checkass",checkAssignment)
router.get("/findresponse/:assId",findResponse)
router.get("/getassbyid/:id",getAssignmentById)

module.exports = router;