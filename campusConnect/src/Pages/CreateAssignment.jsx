import React from "react";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Tooltip,
  Stepper,
  Step,
  StepLabel,
  Button,
  Paper,
  InputBase,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Slider,
  Divider,
} from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
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
const steps = [
  "Select Course",
  "Select Subject and batch",
  "Specifications",
  "Preview",
];

const Course = [
  {
    id: 1,
    label: "B.Tech Specialization in Health Informatics",
    value: 1,
  },
  {
    id: 2,
    label: "B.Tech Specialization in Health Informatics",
    value: 2,
  },
  {
    id: 3,
    label: "B.Tech Specialization in Health Informatics",
    value: 3,
  },
  {
    id: 4,
    label: "B.Tech Specialization in Health Informatics",
    value: 4,
  },
  {
    id: 5,
    label: "B.Tech Specialization in Health Informatics",
    value: 5,
  },
  {
    id: 6,
    label: "B.Tech Specialization in Health Informatics",
    value: 6,
  },
  {
    id: 7,
    label: "B.Tech Specialization in Health Informatics",
    value: 7,
  },
  {
    id: 8,
    label: "B.Tech Specialization in Health Informatics",
    value: 8,
  },
  {
    id: 9,
    label: "B.Tech Specialization in Health Informatics",
    value: 9,
  },
  {
    id: 10,
    label: "B.Tech Specialization in Health Informatics",
    value: 10,
  },
  {
    id: 11,
    label: "B.Tech Specialization in Health Informatics",
    value: 11,
  },
  {
    id: 12,
    label: "B.Tech Specialization in Health Informatics",
    value: 12,
  },
];

const CreateAssignment = () => {
  const navigate = useNavigate();
  const [percentage, setPercentage] = React.useState("70");

  const handleMarks = (event, newValue) => {
    setPercentage(newValue);
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [batch, setBatch] = React.useState("");

  const ChangeBatch = (event) => {
    setBatch(event.target.value);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
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
          <Tooltip title="back">
            <IconButton
              onClick={() =>
                navigate("/instructor/assignments", { replace: true })
              }
              sx={{
                marginLeft: "-2rem",
                marginRight: "1rem",
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
          <Typography fontWeight={450} fontSize={35}>
            Create New Assignment
          </Typography>
        </Toolbar>
        <Box
          sx={{
            minHeight: "45rem",
            bgcolor: "#fff",
            borderRadius: "15px",
            padding: "20px",
            position: "relative",
          }}
        >
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length && (
            <React.Fragment>
              <Box
                sx={{
                  width: "40rem",
                  display: "flex",
                  flexDirection: "column",
                  margin: "auto",
                  gap: 5,
                  marginTop: "5rem",
                }}
              >
                <Typography
                  fontWeight={700}
                  fontSize={36}
                  sx={{ mt: 2, mb: 1 }}
                >
                  Assignment Created Successfully
                </Typography>
                <Typography>
                  New Assignment within B.Tech spcl. in Health Informatics with
                  subject Network Engineering Added Succesfully with the
                  following Name : BHI Health Informatics mid semester
                  Assignment.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    padding: "12px",
                    width: "fit-content",
                    bgcolor: "#2C62EE",
                    margin: "auto",
                  }}
                  fontWeight="light"
                  onClick={() =>
                    navigate("/instructor/assignments", { replace: true })
                  }
                >
                  Back to Dashboard
                </Button>
              </Box>
            </React.Fragment>
          )}
          {activeStep === 0 && (
            <>
              <Box
                sx={{
                  width: "28rem",
                  height: "fit-content",
                  margin: "5rem auto",
                  border: "1px solid #E1E1E1",
                  borderRadius: "8px",
                  padding: "2rem 2rem 1rem 2rem",
                }}
              >
                <Typography fontWeight={500} fontSize={26}>
                  Select Course
                </Typography>
                <Paper
                  component="form"
                  elevation={0}
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "auto",
                    bgcolor: "#F1F1F1",
                    borderRadius: "8px",
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Course"
                    inputProps={{ "aria-label": "search course" }}
                  />
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </Paper>
                <FormControl
                  sx={{
                    height: "20rem",
                    overflowY: "scroll",
                    marginTop: "1rem",
                  }}
                >
                  <RadioGroup>
                    {Course.map((course) => (
                      <FormControlLabel
                        color="#6A6A6A"
                        key={course.id}
                        value={course.value}
                        control={<Radio color="info" />}
                        label={course.label}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Box>
            </>
          )}
          {activeStep === 1 && (
            <>
              <Box
                sx={{
                  width: "28rem",
                  height: "fit-content",
                  margin: "5rem auto",
                  border: "1px solid #E1E1E1",
                  borderRadius: "8px",
                  padding: "2rem 2rem 1rem 2rem",
                }}
              >
                <Typography fontWeight={500} fontSize={26}>
                  Select Batch & Subject
                </Typography>
                <FormControl
                  fullWidth
                  sx={{
                    margin: "1rem 0rem",
                  }}
                >
                  <InputLabel id="batch">Batch</InputLabel>
                  <Select
                    labelId="batch"
                    value={batch}
                    label="Batch"
                    onChange={ChangeBatch}
                  >
                    <MenuItem value={10}>FECO-20</MenuItem>
                    <MenuItem value={20}>SECO-20</MenuItem>
                    <MenuItem value={30}>TECO-20</MenuItem>
                    <MenuItem value={40}>BECO-20</MenuItem>
                  </Select>
                </FormControl>
                <Paper
                  component="form"
                  elevation={0}
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "auto",
                    bgcolor: "#F1F1F1",
                    borderRadius: "8px",
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Subjects"
                    inputProps={{ "aria-label": "search subjects" }}
                  />
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </Paper>
                <FormControl
                  sx={{
                    height: "20rem",
                    overflowY: "scroll",
                    marginTop: "1rem",
                  }}
                >
                  <RadioGroup>
                    {Course.map((course) => (
                      <FormControlLabel
                        color="#6A6A6A"
                        key={course.id}
                        value={course.value}
                        control={<Radio color="info" />}
                        label={course.label}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Box>
            </>
          )}
          {activeStep === 2 && (
            <>
              <Box
                sx={{
                  width: "28rem",
                  height: "fit-content",
                  margin: "5rem auto",
                  border: "1px solid #E1E1E1",
                  borderRadius: "8px",
                  padding: "2rem 2rem 1rem 2rem",
                  flexDirection: "column",
                }}
              >
                <Typography fontWeight={500} fontSize={26}>
                  Assignment Specifications
                </Typography>
                <Paper
                  component="form"
                  elevation={0}
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "auto",
                    bgcolor: "#F1F1F1",
                    borderRadius: "8px",
                    margin: "2rem 0rem",
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Title"
                    inputProps={{ "aria-label": "title" }}
                    type="text"
                  />
                </Paper>
                <Paper
                  component="form"
                  elevation={0}
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "auto",
                    bgcolor: "#F1F1F1",
                    borderRadius: "8px",
                    margin: "2rem 0rem",
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Total Marks"
                    inputProps={{ "aria-label": "total marks" }}
                    type="number"
                  />
                </Paper>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography fontSize={15.5}>Passing Percentage</Typography>
                  <Typography color="#3D70F5">{percentage}%</Typography>
                </Stack>
                <Slider value={percentage} onChange={handleMarks} />
                <Typography
                  marginTop={2}
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
                    justifyContent: "space-between",
                  }}
                >
                  <Paper
                    component="form"
                    elevation={0}
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: "fit-content",
                      bgcolor: "#F1F1F1",
                      borderRadius: "8px",
                    }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Total Marks"
                      inputProps={{ "aria-label": "search course" }}
                      type="date"
                    />
                  </Paper>
                  <Paper
                    component="form"
                    elevation={0}
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: "fit-content",
                      bgcolor: "#F1F1F1",
                      borderRadius: "8px",
                    }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Total Marks"
                      inputProps={{ "aria-label": "search course" }}
                      type="time"
                    />
                  </Paper>
                </Stack>
                <Typography
                  marginTop={2}
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
                    justifyContent: "space-between",
                  }}
                >
                  <Paper
                    component="form"
                    elevation={0}
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: "fit-content",
                      bgcolor: "#F1F1F1",
                      borderRadius: "8px",
                    }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Total Marks"
                      inputProps={{ "aria-label": "search course" }}
                      type="date"
                    />
                  </Paper>
                  <Paper
                    component="form"
                    elevation={0}
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: "fit-content",
                      bgcolor: "#F1F1F1",
                      borderRadius: "8px",
                    }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Total Marks"
                      inputProps={{ "aria-label": "search course" }}
                      type="time"
                    />
                  </Paper>
                </Stack>
                <Button
                  component="label"
                  variant="outlined"
                  startIcon={<CloudUploadIcon />}
                  fullWidth
                  sx={{
                    mt: "2rem",
                  }}
                >
                  Upload file
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Box>
            </>
          )}
          {activeStep === 3 && (
            <>
              <Box
                sx={{
                  width: "28rem",
                  height: "fit-content",
                  margin: "5rem auto",
                  border: "1px solid #E1E1E1",
                  borderRadius: "8px",
                  padding: "2rem 2rem 1rem 2rem",
                  flexDirection: "column",
                }}
              >
                <Typography fontWeight={500} fontSize={26}>
                  Preview
                </Typography>
                <Divider />
                <Typography
                  fontWeight={550}
                  mt={2}
                  fontSize={20}
                  marginBottom={4}
                >
                  BHI Health Informatics mid semester
                </Typography>
                <Typography
                  sx={{
                    color: "#9A9A9A",
                  }}
                >
                  Course : B.Tech Spcl. in Health Informatics
                </Typography>
                <Typography
                  sx={{
                    color: "#9A9A9A",
                  }}
                >
                  Subject : Networking
                </Typography>
                <Typography
                  sx={{
                    color: "#9A9A9A",
                  }}
                >
                  Batch : BECO-20
                </Typography>
                <Typography fontSize={18} m='1rem 0rem' fontWeight={450}>Total Marks : 50</Typography>
                <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap:(5)
          }}
        >
          <Typography fontSize={16}>Passing Percentage</Typography>
          <Typography color="#3D70F5">70%</Typography>
        </Stack>
        <Typography
                  marginTop={2}
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
                    justifyContent: "space-between",
                  }}
                >
                  <Paper
                    component="form"
                    elevation={0}
                    sx={{
                      p: "8px 10px",
                      display: "flex",
                      alignItems: "center",
                      width: "fit-content",
                      bgcolor: "#F1F1F1",
                      borderRadius: "8px",
                      gap:'1rem',
                      alignItems: "center",
                    }}
                  >
                    12-01-2023<CalendarMonthIcon/>
                  </Paper>
                  <Paper
                     component="form"
                     elevation={0}
                     sx={{
                       p: "8px 10px",
                       display: "flex",
                       alignItems: "center",
                       width: "fit-content",
                       bgcolor: "#F1F1F1",
                       borderRadius: "8px",
                       gap:'1rem',
                       alignItems: "center",
                      }}
                  >
                   12:00 PM<AccessTimeFilledIcon/>
                  </Paper>
                </Stack>
                <Typography
                  marginTop={2}
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
                    justifyContent: "space-between",
                  }}
                >
                 <Paper
                    component="form"
                    elevation={0}
                    sx={{
                      p: "8px 10px",
                      display: "flex",
                      alignItems: "center",
                      width: "fit-content",
                      bgcolor: "#F1F1F1",
                      borderRadius: "8px",
                      gap:'1rem',
                      alignItems: "center",
                    }}
                  >
                    15-01-2023<CalendarMonthIcon/>
                  </Paper>
                  <Paper
                     component="form"
                     elevation={0}
                     sx={{
                       p: "8px 10px",
                       display: "flex",
                       alignItems: "center",
                       width: "fit-content",
                       bgcolor: "#F1F1F1",
                       borderRadius: "8px",
                       gap:'1rem',
                       alignItems: "center",
                      }}
                  >
                   12:00 PM<AccessTimeFilledIcon/>
                  </Paper>
                </Stack>
              </Box>
            </>
          )}
          {activeStep !== steps.length && (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  pt: 2,
                  position: "absolute",
                  bottom: 0,
                }}
              >
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default CreateAssignment;
