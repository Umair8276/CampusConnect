import {
  Typography,
  Paper,
  Stack,
  Button,
  LinearProgress,
  Drawer,
  IconButton,
  Box,
  TextField,
  TextareaAutosize,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import React, { useContext ,useEffect,useState} from "react";
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import VerifiedIcon from '@mui/icons-material/Verified';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { AppContext } from "../../Context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios"
import DoneIcon from '@mui/icons-material/Done';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner'


function createData(rollNumber, name) {
  return { rollNumber, name };
}

const student = [
  createData("20CO01", "Test"),
  createData("20CO02", "Test"),
  createData("20CO03", "Test"),
  createData("20CO04", "Test"),
  createData("20CO05", "Test"),
  createData("20CO06", "Test"),
  createData("20CO07", "Test"),
  createData("20CO08", "Test"),
  createData("20CO09", "Test"),
  createData("20CO15", "Test"),
  createData("20CO16", "Test"),
];

const AssignmentCard = ({
  title,
  branch,
  subject,
  batch,
  date,
  time,
  percentage,
  type,
  files,
  sem,
  id,
  response,
  lastDate,
  scheduleDate
}) => {
  const [openOngoing, setOpenOngoing] = React.useState(false);
  const [openResult, setOpenResult] = React.useState(false);
  const [openHistory, setOpenHistory] = React.useState(false);
  const [isActive, setIsActive] = React.useState(true);
  const [publish, setPublish] = React.useState(false);
  const [isLoading,setIsLoading] = useState();
  const [student,setStudent] = useState([])
  const [success,setSuccess] = useState(false)
  const [file,setFile] = useState("");
  const [updatedFile,setUpdatedFile] = useState("")
  const [count,setCount] = useState("")
  const [comment,setComment] = useState("")
  const [userFile,setUserFile] = useState("");
  const [reUpload,setReUpload] = useState(true)
  const [userAssignment,setUserAssignment] = useState("")
  const [commentData,setCommentData] = useState([])
  const { user } = useContext(AppContext )

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  

  const handlePublishOpen = () => {
    setPublish(true);
  }
  const handlePublishClose = () => {
    setPublish(false);

  }
  const OnPublish = () => {
    setPublish(false);
    setOpenResult(false);

  }

  // Upload Assignment From Student Side
  const handleUpload = async (url) => {
    // console.log("User Id",id)
      setIsLoading(true)
      const data = new FormData();
      data.append("file", url);
      data.append("upload_preset", "pehzflst");
      data.append("cloud_name", "zaidsiddiqui");
      fetch("https://api.cloudinary.com/v1_1/zaidsiddiqui/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.url);
            setFile(data.url)
            setIsLoading(false)
        });
      
  };
  const handleReUpload = async (url) => {
      setReUpload(true)
      setIsLoading(true)
      const data = new FormData();
      data.append("file", url);
      data.append("upload_preset", "pehzflst");
      data.append("cloud_name", "zaidsiddiqui");
      fetch("https://api.cloudinary.com/v1_1/zaidsiddiqui/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.url);
          setUpdatedFile(data.url)
            setIsLoading(false)
        });
      
  };

  

   // Upload Assignment From Student Side
  const uploadAssigment = () => {
    axios.post("http://localhost:5000/api/ass/checkass",{
      studentId:user._id,
      assignmentId:id,
      file
    }).then(res => {
      console.log(res.data)
      // setUserAssignment(res.data.newUpload.file)
        toast.success("Assignment Uploaded Successfully", {
          autoClose: 2500, 
        })
        setTimeout( () => {
          setOpenOngoing(false)
        },2500)
        setFile("")
        
    }).catch(err => {
      console.log(err)
    })
  }

  const reUploadAssigment = () => {
    console.log("reUploadAssigment triggered")
    axios.put(`http://localhost:5000/api/ass/updatefile/${userAssignment._id}`,{
     file: updatedFile
    }).then(res => {
      console.log(res.data)
      // setUserAssignment(res.data.UpdateFile.file)
      toast.success("Assignment Updated Successfully", {
        autoClose: 2000, 
      })
      setTimeout( () => {
        setOpenOngoing(false)
      },2500)
      setReUpload(false)
    }).catch(err => {
      console.log(err)
    })
  }


  useEffect( () => {
    if(file!="")
      uploadAssigment()
    
  },[file])
  
  useEffect( () => {
    if(updatedFile && reUpload )
    reUploadAssigment()
  },[updatedFile])
  



  const getUploadedAss = () => {
    axios.get(`http://localhost:5000/api/ass/completedass/${id}/${user._id}`).then(res => {
      setUserFile(res.data.ass[0].file)
    }).catch(err => {
      console.log(err)
    })
  }

  // Find student Assignment Upload Count and student data
  const getCount = () => {
    axios.get(`http://localhost:5000/api/ass/findresponse/${id}`)
    .then(res => {
      console.log("Assignment Count : " , res.data)
       setCount(res.data.count)
       setStudent(res.data.resp)
    }).catch(err => {
      console.log(err)
    })
  }

  // Send Comment to the Student By Faculty
  const SendComment = (id) => {
     axios.put("http://localhost:5000/api/ass/updatecomment",{
      id,
      comment
     }).then(res => {
      console.log(res.data)
      setCommentData(res.data.comments)
      toast.success("Comment Added Successfully",{
        autoClose: 2500,
      })
     }).catch(err => {
      console.log(err)
     })
  }

// Get Assignment based on assignmentId and StudentId
  const getUserAssignment = (id) => {
    console.log("AssignmentId",id)
    axios.get(`http://localhost:5000/api/ass/getuserass/${user._id}/${id}`,{
      studentId:user._id,
      assignmentId:id
    })
    .then(res => {
      console.log('User Assignment for Student' , res.data)
      setUserAssignment(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }


  useEffect( () => {
    getCount()
    getUploadedAss()
    getUserAssignment()
  },[]);


  return (
    <>
    
      <Paper
        elevation={0.5}
        sx={{
          width: "340px",
          padding: "15px",
          borderRadius: "12px",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          border: "1px solid #E6E6E6",
          gap: "2px",
        }}
      >
        <Stack sx={{ display: "flex",
                    flexDirection: "row",gap:"15px"}}>
          <Typography fontWeight={550} fontSize={20} marginBottom={4}>
         {
           response.includes(user._id)
           ?
           <VerifiedIcon style={{color:"blue",fontSize:"2rem"}}/>
           :
           ""
         }
        </Typography>
        <Typography fontWeight={550} fontSize={20} marginBottom={4}>
          {title}
        </Typography>
      
        </Stack>
        <Typography
          sx={{
            color: "#9A9A9A",
          }}
        >
          Title : {title}
        </Typography>
        <Typography
          sx={{
            color: "#9A9A9A",
          }}Fre
        >
          Subject : {subject}
        </Typography>
        <Typography
          sx={{
            color: "#9A9A9A",
          }}
        >
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Stack
            sx={{
              color: "#D3D3D3",
              flexDirection: "row",
              alignItems: "center",
              gap: "5px",
              margin: "15px 0px",
            }}
          >
            <CalendarMonthIcon />
            {date}
          </Stack>
          {/* <Stack
            sx={{
              color: "#D3D3D3",
              flexDirection: "row",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <AccessTimeFilledIcon />
            {time}
          </Stack> */}
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >

        </Stack>

        {type == "ongoing" ? (
          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "#3D70F5",
              padding: "10px",
              fontWeight: "light",
            }}
            onClick={() =>{ getUserAssignment(id),setOpenOngoing(true)}}
          >
            View Details
          </Button>
        ) : type == "result" ? (
          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "#3D70F5",
              padding: "10px",
              fontWeight: "light",
            }}
            onClick={() => setOpenResult(true)}
          >
            Declare Result
          </Button>
        ) : (
          <Button
            fullWidth
            variant="outlined"
            sx={{
              padding: "10px",
            }}
            onClick={() => setOpenHistory(true)}
          >
            View Result
          </Button>
        )}

        {/* Drawer for Onging Tab */}
        <Drawer
          anchor="right"
          open={openOngoing}
          onClose={() => setOpenOngoing(false)}
          PaperProps={{
            sx: { width: 700, borderRadius: "15px 0px 0px 15px" },
          }}
        >
          <IconButton
            onClick={() => setOpenOngoing(!openOngoing)}
            sx={{
              marginRight: "auto",
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              margin: "3rem 2rem 2rem 2rem",
            }}
          >
             {
             success
              &&
            <Typography fontWeight={500} fontSize={20} color="green">
                Assignment Uploaded Successfully
            </Typography>}
             <ToastContainer />
            <Typography fontWeight={500} fontSize={32}>
              {title}
            </Typography>
            <Typography fontSize={20} fontWeight={450} marginTop={5}>
              Branch: {branch}
            </Typography>
            <Typography fontSize={20} fontWeight={450}>
              Subject : {subject}
            </Typography>
            <Typography fontSize={20} fontWeight={450}>
              Semester : {sem}
            </Typography>
   
            <Typography
              marginTop={6}
              fontWeight={400}
              fontSize={18}
              marginBottom={1}
            >
              Schedule
            </Typography>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 5,
              }}
            >
              <Button
                startIcon={<CalendarMonthIcon />}
                sx={{
                  color: "black",
                  bgcolor: "#EDEDF5",
                  padding: "8px 10px",
                  borderRadius: "6px",
                }}
              >
                {scheduleDate.substring(0,10)}
              </Button>
             
            </Stack>
            <Typography
              marginTop={6}
              fontWeight={400}
              fontSize={18}
              marginBottom={1}
            >
              Due Date
            </Typography>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 5,
                marginBottom: "5px",
              }}
            >
              <Button
                startIcon={<CalendarMonthIcon />}
                sx={{
                  color: "black",
                  bgcolor: "#EDEDF5",
                  padding: "8px 10px",
                  borderRadius: "6px",
                }}
              >
                {date}
              </Button>
          
            </Stack>
           
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 8,
                marginTop: "1rem",
              }}
            >
              {
                user.role == "student"
                  ?
                  <></>
                  :
                  <>
                    <Button color="success">Completed : {count}</Button>
                    <Button color="warning">Pending : 15</Button>
                  </>

              }

            </Stack>
            <Typography marginTop={5} fontWeight={450} fontSize={20}>
              Resourses
            </Typography>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent:"flex-start",
                alignItems:"center",
                gap: 8,
                marginTop: "1rem",
              }}
            >
             
                <Button color="info" variant='outlined'  sx={{
                    // mt: "2rem",
                    width:"300px"
                  }}>
                 <a href={files} target="_blank" style={{color:"blue"}}>Assignment</a>
                 </Button>
                 
                 {
                  userAssignment?.file
                  ?
              <Button
                  component="label"
                  variant="outlined"
                  startIcon={<CloudUploadIcon />}
                  fullWidth
                  sx={{
                    // mt: "2rem",
                    width:"350px"
                  }}
                >
                Re-Upload
                
                  <VisuallyHiddenInput type="file" onChange={(e) =>{ handleReUpload(e.target.files[0])}}/>
                </Button>
                :
                <Button
                component="label"
                variant="outlined"
                startIcon={<CloudUploadIcon />}
                fullWidth
                sx={{
                  // mt: "2rem",
                  width:"350px"
                }}
              >
               {/* {response.includes(user._id) ? "Re-Upload file" : "Upload file"} */}
               Upload file
              
                <VisuallyHiddenInput type="file" onChange={(e) =>{ handleUpload(e.target.files[0])}}/>
              </Button>


                 }
                {
                  userAssignment?.file
                  ?
                <Button
                   component="label"
                   variant="outlined"
                  //  startIcon={<CloudUploadIcon />}
                   fullWidth
                   sx={{
                     // mt: "2rem",
                     width:"350px"
                   }}
                >
                  <a href={userAssignment.file} target="_blank" style={{color:"blue",textAlign:"center"}}> Your Response</a>
                </Button>
                :
                <></>
                
                }
                {
                  userAssignment?.comment
                  ?
                  <p style={{color:"red"}}>***{userAssignment.comment}</p>
                  :
                  <></>
                }
                {
                  isLoading
                  ?
                  <Oval
                    visible={true}
                    height="40"
                    width="40"
                    color="#4fa94d"
                   ariaLabel="oval-loading"
                   wrapperStyle={{}}
                   wrapperClass=""
                   />
                   :
                   <></>
                }
                {/* {
                  isLoading 
                  &&
                  <CircularProgress color="secondary" size={25}/>
                } */}

                {/* {response.includes(user._id)
                ?
                  <Button color="info" variant='outlined' sx={{width:"200px"}}>
                 <a href={userFile} target="_blank" style={{color:"blue",textAlign:"center"}}> Your Response</a>
                 </Button>
                 :
                 <></>} */}
            </Stack>
          </Box>
        </Drawer>

        {/* Drawer for Result Tab */}
        <Drawer
          anchor="right"
          open={openResult}
          onClose={() => setOpenResult(false)}
          PaperProps={{
            sx: { width: 1000, borderRadius: "15px 0px 0px 15px" },
          }}
        >
          <IconButton
            onClick={() => setOpenResult(!openResult)}
            sx={{
              marginRight: "auto",
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              margin: "3rem 2rem 2rem 2rem",
            }}
          >
            <Typography fontWeight={500} fontSize={32}>
              Declare Result
            </Typography>
            <Typography fontWeight={500} marginTop={2} fontSize={24}>
              {title}
            </Typography>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                margin: "2rem 0rem",
              }}
            >
              <Button
                variant={isActive ? "contained" : "outlined"}
                sx={{
                  fontWeight: "light",
                  padding: "10px 4rem",
                }}
                onClick={() => {
                  setIsActive(!isActive);
                }}
              >
                Details
              </Button>
              <Button
                variant={!isActive ? "contained" : "outlined"}
                sx={{
                  fontWeight: "light",
                  padding: "10px 4rem",
                }}
                onClick={() => {
                  setIsActive(!isActive);
                }}
              >
                Result
              </Button>
            </Stack>
            {isActive ? (
              <>
                <Typography fontSize={20} fontWeight={450} marginTop={5}>
                  {/* Course: {course} */}
                </Typography>
                <Typography fontSize={20} fontWeight={450}>
                  Subject : {subject}
                </Typography>
                <Typography fontSize={20} fontWeight={450}>
                  Batch : {batch}
                </Typography>
                <Stack
                  marginTop={8}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  {/* <Typography fontSize={24} fontWeight={500}>
                    Total Marks : 50
                  </Typography> */}

                  {/* <Button
                    sx={{
                      marginLeft: "auto",
                    }}
                  >
                    Passing Percentage : {percentage}%
                  </Button> */}
                </Stack>
                <Typography
                  marginTop={6}
                  fontWeight={400}
                  fontSize={18}
                  marginBottom={1}
                >
                  Schedule
                </Typography>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                  }}
                >
                  <Button
                    startIcon={<CalendarMonthIcon />}
                    sx={{
                      color: "black",
                      bgcolor: "#EDEDF5",
                      padding: "8px 10px",
                      borderRadius: "6px",
                    }}
                  >
                    {date}
                  </Button>
                  <Button
                    sx={{
                      color: "black",
                      bgcolor: "#EDEDF5",
                      padding: "8px 10px",
                      borderRadius: "6px",
                    }}
                    startIcon={<AccessTimeFilledIcon />}
                  >
                    {time}
                  </Button>
                </Stack>
                <Typography
                  marginTop={6}
                  fontWeight={400}
                  fontSize={18}
                  marginBottom={1}
                >
                  Due Date
                </Typography>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                    marginBottom: "5px",
                  }}
                >
                  <Button
                    startIcon={<CalendarMonthIcon />}
                    sx={{
                      color: "black",
                      bgcolor: "#EDEDF5",
                      padding: "8px 10px",
                      borderRadius: "6px",
                    }}
                  >
                    {lastDate}
                  </Button>
                  <Button
                    sx={{
                      color: "black",
                      bgcolor: "#EDEDF5",
                      padding: "8px 10px",
                      borderRadius: "6px",
                    }}
                    startIcon={<AccessTimeFilledIcon />}
                  >
                    {time}
                  </Button>
                </Stack>
                <Typography marginTop={10} fontWeight={450} fontSize={20}>
                  Student Status
                </Typography>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                    marginTop: "1rem",
                  }}
                >
                  <Button color="success">Completed : {count}</Button>
                  <Button color="warning">Pending : 14</Button>
                </Stack>
                <Typography marginTop={5} fontWeight={450} fontSize={20}>
                  Resourses
                </Typography>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                    marginTop: "1rem",
                  }}
                >
                     {/* <Button color="info" variant='outlined'>
                 <a href={files} target="_blank" style={{color:"blue"}}>Assignment..file</a>
                 </Button> */}
                  {/* <Button color="info" variant='outlined'>
                     <a href={files} target="_blank" style={{color:"blue"}}>Assignment...PDF</a>
                  </Button> */}
                </Stack>
              </>
            ) : (
              <>
               
              </>
            )}
          </Box>
        </Drawer>

        {/* Drawer for History Tab */}
        <ToastContainer/>
        <Drawer
          anchor="right"
          open={openHistory}
          onClose={() => setOpenHistory(false)}
          PaperProps={{
            sx: { width: 1000, borderRadius: "15px 0px 0px 15px" },
          }}
        >
          <IconButton
            onClick={() => setOpenHistory(!openHistory)}
            sx={{
              marginRight: "auto",
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              margin: "3rem 2rem 2rem 2rem",
            }}
          >
            <Typography fontWeight={500} fontSize={32}>
              History
            </Typography>
            <Typography fontWeight={500} marginTop={2} fontSize={24}>
              {title}
            </Typography>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                margin: "2rem 0rem",
              }}
            >
              <Button
                variant={isActive ? "contained" : "outlined"}
                sx={{
                  fontWeight: "light",
                  padding: "10px 4rem",
                }}
                onClick={() => {
                  setIsActive(!isActive);
                }}
              >
                Details
              </Button>
              <Button
                variant={!isActive ? "contained" : "outlined"}
                sx={{
                  fontWeight: "light",
                  padding: "10px 4rem",
                }}
                onClick={() => {
                  setIsActive(!isActive);
                }}
              >
                Result
              </Button>
            </Stack>
            {isActive ? (
              <>
                <Typography fontSize={20} fontWeight={450} marginTop={5}>
                  {/* Course: {course} */}
                </Typography>
                <Typography fontSize={20} fontWeight={450}>
                  Subject : {subject}
                </Typography>
                <Typography fontSize={20} fontWeight={450}>
                  Semester : {sem}
                </Typography>
                <Typography
                  marginTop={6}
                  fontWeight={400}
                  fontSize={18}
                  marginBottom={1}
                >
                  Schedule
                </Typography>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                  }}
                >
                  <Button
                    startIcon={<CalendarMonthIcon />}
                    sx={{
                      color: "black",
                      bgcolor: "#EDEDF5",
                      padding: "8px 10px",
                      borderRadius: "6px",
                    }}
                  >
                    {scheduleDate}
                  </Button>
                  <Button
                    sx={{
                      color: "black",
                      bgcolor: "#EDEDF5",
                      padding: "8px 10px",
                      borderRadius: "6px",
                    }}
                    startIcon={<AccessTimeFilledIcon />}
                  >
                    {time}
                  </Button>
                </Stack>
                <Typography
                  marginTop={6}
                  fontWeight={400}
                  fontSize={18}
                  marginBottom={1}
                >
                  Due Date
                </Typography>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                    marginBottom: "5px",
                  }}
                >
                  <Button
                    startIcon={<CalendarMonthIcon />}
                    sx={{
                      color: "black",
                      bgcolor: "#EDEDF5",
                      padding: "8px 10px",
                      borderRadius: "6px",
                    }}
                  >
                    {lastDate}
                  </Button>
                  <Button
                    sx={{
                      color: "black",
                      bgcolor: "#EDEDF5",
                      padding: "8px 10px",
                      borderRadius: "6px",
                    }}
                    startIcon={<AccessTimeFilledIcon />}
                  >
                    {time}
                  </Button>
                </Stack>
                <Typography marginTop={10} fontWeight={450} fontSize={20}>
                  Student Status
                </Typography>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                    marginTop: "1rem",
                  }}
                >
                  <Button color="success">Completed : {count}</Button>
                  {/* <Button color="warning">Pending : 15</Button> */}
                </Stack>
                <Typography marginTop={5} fontWeight={450} fontSize={20}>
                  Resourses
                </Typography>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                    marginTop: "1rem",
                  }}
                >
                  <Button color="info" variant='outlined'>
                  <a href={files} target="_blank" style={{color:"blue"}}>Assignment..file</a>
                  </Button>
                </Stack>
              </>
            ) : (
              <>
                <TableContainer
                  component={Paper}
                  sx={{
                    overflowY: "scroll",
                    height: 700,
                  }}
                >
                  <Table stickyHeader>
                    <TableHead>
                      <TableRow>
                        <TableCell>Roll Number</TableCell>
                        <TableCell>Student Name</TableCell>
                        <TableCell>Attachements</TableCell>
                        <TableCell>Comment</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {student.map((stu) => (
                        <TableRow >
                          <TableCell component="th" scope="row">
                            {stu.studentId.rollNo}
                          </TableCell>

                          <TableCell component="th" scope="row">
                            {stu.studentId.firstName} {stu.studentId.lastName}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            <Button
                              variant="outlined"
                              sx={{
                                borderColor: "#EDEDF5",
                                "&hover": {
                                  borderColor: "#EDEDF5",
                                },
                              }}
                              endIcon={<FileDownloadOutlinedIcon />}
                            >
                              <a href={stu.file} target="_blank" style={{color:"green"}}>View Assignment</a>
                            </Button>
                          </TableCell>
                          <TableCell component="th" scope="row">
                          <TextField id="outlined-basic" onChange={(e) => setComment(e.target.value)} label="Comment..." variant="outlined" />
                          </TableCell>
                          <TableCell component="th" scope="row">
                             <Button disabled = {commentData?.comment ? true : false} onClick={() => SendComment(stu._id)}>Send</Button>
                          </TableCell>
          
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

              </>
            )}
          </Box>
        </Drawer>
      </Paper>
    </>
  );
};

export default AssignmentCard;
