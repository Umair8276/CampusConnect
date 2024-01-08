import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Toolbar,
  Button,
  AppBar,
  Tabs,
  Tab,
  Divider,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import AssignmentCard from "../Components/common/AssignmentCard";
import { AppContext } from "../Context/AuthContext";
import axios from "axios"

const onGoingAssignments = [
  {
    title: "Engg Drawing",
    course: "B.Tech Specialization in Health Informatics",
    subject: "Network Engineering",
    batch: "BECO-20",
    date: "25 july 2023",
    time: "12:30 AM - 01:40 PM",
    percentage: 70,
  },
  {
    title: "Articulate structure of C++ and Java in Semester 1",
    course: "B.Tech Specialization in Health Informatics",
    subject: "Network Engineering",
    batch: "BECO-20",
    date: "25 july 2023",
    time: "12:30 AM - 01:40 PM",
    percentage: 75,
  },
  {
    title: "Articulate structure of C++ and Java in Semester 1",
    course: "B.Tech Specialization in Health Informatics",
    subject: "Network Engineering",
    batch: "BECO-20",
    date: "25 july 2023",
    time: "12:30 AM - 01:40 PM",
    percentage: 60,
  },
  {
    title: "Articulate structure of C++ and Java in Semester 1",
    course: "B.Tech Specialization in Health Informatics",
    subject: "Network Engineering",
    batch: "BECO-20",
    date: "25 july 2023",
    time: "12:30 AM - 01:40 PM",
    percentage: 60,
  },
  {
    title: "Articulate structure of C++ and Java in Semester 1",
    course: "B.Tech Specialization in Health Informatics",
    subject: "Network Engineering",
    batch: "BECO-20",
    date: "25 july 2023",
    time: "12:30 AM - 01:40 PM",
    percentage: 35,
  },
  {
    title: "Articulate structure of C++ and Java in Semester 1",
    course: "B.Tech Specialization in Health Informatics",
    subject: "Network Engineering",
    batch: "BECO-20",
    date: "25 july 2023",
    time: "12:30 AM - 01:40 PM",
    percentage: 70,
  },
  {
    title: "Articulate structure of C++ and Java in Semester 1",
    course: "B.Tech Specialization in Health Informatics",
    subject: "Network Engineering",
    batch: "BECO-20",
    date: "25 july 2023",
    time: "12:30 AM - 01:40 PM",
    percentage: 75,
  },
  {
    title: "Articulate structure of C++ and Java in Semester 1",
    course: "B.Tech Specialization in Health Informatics",
    subject: "Network Engineering",
    batch: "BECO-20",
    date: "25 july 2023",
    time: "12:30 AM - 01:40 PM",
    percentage: 70,
  },
  {
    title: "Articulate structure of C++ and Java in Semester 1",
    course: "B.Tech Specialization in Health Informatics",
    subject: "Network Engineering",
    batch: "BECO-20",
    date: "25 july 2023",
    time: "12:30 AM - 01:40 PM",
    percentage: 70,
  },
];
const declareResultsAssignments = [
  {
    title: "Articulate structure of C++ and Java in Semester 1",
    course: "B.Tech Specialization in Health Informatics",
    subject: "Network Engineering",
    batch: "BECO-20",
    date: "25 july 2023",
    time: "12:30 AM - 01:40 PM",
    percentage: 70,
  },
  {
    title: "Articulate structure of C++ and Java in Semester 1",
    course: "B.Tech Specialization in Health Informatics",
    subject: "Network Engineering",
    batch: "BECO-20",
    date: "25 july 2023",
    time: "12:30 AM - 01:40 PM",
    percentage: 75,
  },
  {
    title: "Articulate structure of C++ and Java in Semester 1",
    course: "B.Tech Specialization in Health Informatics",
    subject: "Network Engineering",
    batch: "BECO-20",
    date: "25 july 2023",
    time: "12:30 AM - 01:40 PM",
    percentage: 60,
  },
  {
    title: "Articulate structure of C++ and Java in Semester 1",
    course: "B.Tech Specialization in Health Informatics",
    subject: "Network Engineering",
    batch: "BECO-20",
    date: "25 july 2023",
    time: "12:30 AM - 01:40 PM",
    percentage: 60,
  },
  {
    title: "Articulate structure of C++ and Java in Semester 1",
    course: "B.Tech Specialization in Health Informatics",
    subject: "Network Engineering",
    batch: "BECO-20",
    date: "25 july 2023",
    time: "12:30 AM - 01:40 PM",
    percentage: 35,
  },
  {
    title: "Articulate structure of C++ and Java in Semester 1",
    course: "B.Tech Specialization in Health Informatics",
    subject: "Network Engineering",
    batch: "BECO-20",
    date: "25 july 2023",
    time: "12:30 AM - 01:40 PM",
    percentage: 70,
  },
  {
    title: "Articulate structure of C++ and Java in Semester 1",
    course: "B.Tech Specialization in Health Informatics",
    subject: "Network Engineering",
    batch: "BECO-20",
    date: "25 july 2023",
    time: "12:30 AM - 01:40 PM",
    percentage: 75,
  },
  {
    title: "Articulate structure of C++ and Java in Semester 1",
    course: "B.Tech Specialization in Health Informatics",
    subject: "Network Engineering",
    batch: "BECO-20",
    date: "25 july 2023",
    time: "12:30 AM - 01:40 PM",
    percentage: 70,
  },
  {
    title: "Articulate structure of C++ and Java in Semester 1",
    course: "B.Tech Specialization in Health Informatics",
    subject: "Network Engineering",
    batch: "BECO-20",
    date: "25 july 2023",
    time: "12:30 AM - 01:40 PM",
    percentage: 70,
  },
];

const Assigments = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const { user } = useContext(AppContext)
  const [data,setData] = useState([])
  const [facData,setFacData] = useState([])

  function TabPanel(props) {
    const { children, value, page } = props;
    return <div>{page === value && children}</div>;
  }
  const getAssignments = () => {
    axios.get(`http://localhost:5000/api/ass/getass/${user.branch}/${user.stu_class}`).then(res => {
      // console.log(res.data)
      setData(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }

  const getFacultyAss = () => {
    axios.get(`http://localhost:5000/api/ass/getassbybranch/${user?.dept}`).then(res => {
      console.log("getFacultyAss :",res.data)
      setFacData(res.data.ass)
    }).catch(err => {
      console.log(err)
    })
  }


 

  useEffect(() => {
    console.log("Data :",data)
    getFacultyAss()
    getAssignments()
  }, [])

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Toolbar>
          <Typography fontWeight={450} fontSize={35}>
            Assignment
          </Typography>
          {
            user.role == "student"
              ?
              <></>
              :
              <Button
                sx={{
                  marginLeft: "auto",
                }}
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() =>
                  navigate("/faculty/create-assignment", { replace: true })
                }
              >

                Create Assignment
              </Button>
          }

        </Toolbar>
        <Box
          sx={{
            bgcolor: "#fff",
            flexWrap: "wrap",
            borderRadius: "15px",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <Box
            sx={{
              padding: "1rem",
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Tabs onChange={(e, value) => setValue(value)} value={value}>
              <Tab label="On-Going" />
              {/* <Tab label="Completed" /> */}
              {/* <Tab label="History" /> */}
            </Tabs>

            <Divider />
          </Box>
          <Box padding={2}>
            <TabPanel value={value} page={0}>
              <Box
                sx={{
                  height: "50rem",
                  overflowY: "scroll",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "5rem",
                }}
              >
                {
                  data.length > 0
                  ?

                data.map((assignment, index) => (
                  <AssignmentCard
                    key={index}
                    title={assignment.content}
                    branch={assignment.branch}
                    subject={assignment.subject}
                    batch={assignment.classes}
                    date={assignment.lastDate}
                    files={assignment.file}
                    id={assignment._id}
                    response = {assignment.response}
                    lastDate = {assignment.lastDate}
                    scheduleDate = {assignment.createdAt}
                    // time={assignment.time}
                    // percentage={assignment.percentage}
                    type={"ongoing"}
                  />
                ))
              :
              facData.map( (assignment,index) => {
                return <AssignmentCard
                key={index}
                title={assignment.content}
                branch={assignment.branch}
                subject={assignment.subject}
                batch={assignment.classes}
                date={assignment.lastDate}
                files={assignment.file}
                id={assignment._id}
                response = {assignment.response}
                lastDate = {assignment.lastDate}
                scheduleDate = {assignment.createdAt}
                />
              })
              }
              </Box>
            </TabPanel>
            <TabPanel value={value} page={1}>
              <Box
                sx={{
                  height: "50rem",
                  overflowY: "scroll",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "5rem",
                }}
              >
                {declareResultsAssignments.map((assignment, index) => (
                  <AssignmentCard
                    key={index}
                    title={assignment.title}
                    course={assignment.course}
                    subject={assignment.subject}
                    batch={assignment.batch}
                    date={assignment.date}
                    time={assignment.time}
                    percentage={assignment.percentage}
                    type={"result"}
                  />
                ))}
              </Box>
            </TabPanel>
            <TabPanel value={value} page={2}>
              <Box
                sx={{
                  height: "50rem",
                  overflowY: "scroll",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "5rem",
                }}
              >
                {declareResultsAssignments.map((assignment, index) => (
                  <AssignmentCard
                    key={index}
                    title={assignment.title}
                    course={assignment.course}
                    subject={assignment.subject}
                    batch={assignment.batch}
                    date={assignment.date}
                    time={assignment.time}
                    percentage={assignment.percentage}
                    type={"history"}
                  />
                ))}
              </Box>{" "}
            </TabPanel>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Assigments;
