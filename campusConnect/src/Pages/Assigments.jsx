import React from "react";
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

const onGoingAssignments = [
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

  function TabPanel(props) {
    const { children, value, page } = props;
    return <div>{page === value && children}</div>;
  }

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
              <Tab label="Declare-Result" />
              <Tab label="History" />
            </Tabs>
            <TextField
              label="Search"
              size="small"
              sx={{
                marginLeft: "auto",
                width: "25rem",
              }}
            />
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
                {onGoingAssignments.map((assignment, index) => (
                  <AssignmentCard
                    key={index}
                    title={assignment.title}
                    course={assignment.course}
                    subject={assignment.subject}
                    batch={assignment.batch}
                    date={assignment.date}
                    time={assignment.time}
                    percentage={assignment.percentage}
                    type={"ongoing"}
                  />
                ))}
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
