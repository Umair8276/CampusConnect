const AdmissionModal = require("../Modals/AdmissionModal")

const Admission = async (req, res) => {
    const { firstName,lastName, branch, startYear, endYear, totalFees, feesPaid, remainingFees, mobileNo, stu_class, currentSem, rollNo, address,state,city,district,pincode } = req.body;
    let findStudent;
    // Check If Student Already exists in Db?
    try {
        findStudent = await AdmissionModal.findOne({ mobileNo });
    } catch (error) {
        console.log(error)
    }
    if (findStudent) {
        return res.send({ err: "Student Already Exists" });
    }

    // Finding Total COunt of a Student than Allocating Roll No
    let total_count;
    try {
        total_count = await AdmissionModal.find({branch,endYear}).count()
    } catch (error) {
        console.log(error)
    }

    //New Admission
    const newAdmission = new AdmissionModal({
        firstName,
        lastName,
        branch,
        startYear,
        endYear,
        totalFees,
        feesPaid,
        address,
        state,
        city,
        district,
        pincode,
        remainingFees,
        mobileNo,
        stu_class,
        currentSem,
        rollNo: total_count == 0 ?  1 : total_count + 1
    });
    try {
        await newAdmission.save();
    }
    catch (err) {
        console.log(err)
    }
    res.send({ newAdmission })
}

const getAllStudent = async(req,res) => {
    let student;
    try {
        student = await AdmissionModal.find({})
    } catch (error) {
        console.log(error)
    }
    if(student)
      return res.send({student})
    else 
      return res.send({err:"Error Occured"})
}

const studentLogin = async(req,res) => {
    const {email,password} = req.body;
    let stLogin;
    try {
     stLogin = await AdmissionModal.findOne({email});
    } catch (error) {
      console.log(error)
    }
    if(stLogin){
      if(stLogin.password==password)
        return res.send({msg:"Login Successfully",user:stLogin});
      else 
        return res.send({err:"Password is incorrect"});
}
else{
    return res.send({err:"Please Signup first than login"});
}
// return res.send({msg:"Login Successfully",user:stLogin})
  }

//   search student by class and branch
const SearchStudent  = async(req,res) => {
    const {branch,stu_class,rollNo} = req.body;
    console.log(req.body)
    let student;
    try{
      student = await AdmissionModal.find({branch,stu_class,rollNo})
    }
    catch(err)  {
        console.log(err);
    }
    if(student){
        return  res.send({student})
    }
    else{
        return res.send({err:"Something went Wrong"})
    }
   
}

exports.Admission = Admission;
exports.getAllStudent = getAllStudent;
exports.studentLogin = studentLogin;
exports.SearchStudent = SearchStudent;
