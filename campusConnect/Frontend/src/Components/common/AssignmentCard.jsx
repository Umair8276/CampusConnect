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
import React from "react";
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';


function createData(rollNumber, name) {
  return { rollNumber, name };
}

const rows = [
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
  course,
  subject,
  batch,
  date,
  time,
  percentage,
  type,
}) => {
  const [openOngoing, setOpenOngoing] = React.useState(false);
  const [openResult, setOpenResult] = React.useState(false);
  const [openHistory, setOpenHistory] = React.useState(false);
  const [isActive, setIsActive] = React.useState(true);
  const [publish, setPublish] = React.useState(false);

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

  return (
    <>
      <Paper
        elevation={0.5}
        sx={{
          width: "340px",
          padding: "15px",
          borderRadius: "12px",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          border: "1px solid #E6E6E6",
          gap: "2px",
        }}
      >
        <Typography fontWeight={550} fontSize={20} marginBottom={4}>
          {title}
        </Typography>
        <Typography
          sx={{
            color: "#9A9A9A",
          }}
        >
          Course : {course}
        </Typography>
        <Typography
          sx={{
            color: "#9A9A9A",
          }}
        >
          Subject : {subject}
        </Typography>
        <Typography
          sx={{
            color: "#9A9A9A",
          }}
        >
          Batch : {batch}
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
          <Stack
            sx={{
              color: "#D3D3D3",
              flexDirection: "row",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <AccessTimeFilledIcon />
            {time}
          </Stack>
        </Stack>
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
        <LinearProgress
          value={percentage}
          variant="determinate"
          sx={{
            height: "8px",
            borderRadius: "5px",
            margin: "10px 0px",
          }}
        />
        {type == "ongoing" ? (
          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "#3D70F5",
              padding: "10px",
              fontWeight: "light",
            }}
            onClick={() => setOpenOngoing(true)}
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
            <Typography fontWeight={500} fontSize={32}>
              {title}
            </Typography>
            <Typography fontSize={20} fontWeight={450} marginTop={5}>
              Course: {course}
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
              <Typography fontSize={24} fontWeight={500}>
                Total Marks : 50
              </Typography>

              <Button
                sx={{
                  marginLeft: "auto",
                }}
              >
                Passing Percentage : {percentage}%
              </Button>
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
              <Button color="success">Completed : 55</Button>
              <Button color="warning">Pending : 15</Button>
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
              <Button color="info" variant='outlined'>Assignment..pdf</Button>
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
                  Course: {course}
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
                  <Typography fontSize={24} fontWeight={500}>
                    Total Marks : 50
                  </Typography>

                  <Button
                    sx={{
                      marginLeft: "auto",
                    }}
                  >
                    Passing Percentage : {percentage}%
                  </Button>
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
                  <Button color="success">Completed : 55</Button>
                  <Button color="warning">Pending : 15</Button>
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
              <Button color="info" variant='outlined'>Assignment..pdf</Button>
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
                        <TableCell>Marks</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.rollNumber}>
                          <TableCell component="th" scope="row">
                            {row.rollNumber}
                          </TableCell>

                          <TableCell component="th" scope="row">
                            {row.name}
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
                            >
                              Assignment....pdf
                            </Button>
                          </TableCell>
                          <TableCell component="th" scope="row">
                            <TextField variant="outlined" type='number' helperText="Out of 50" 
                             ></TextField>
                          </TableCell>
                          <TableCell component="th" scope="row">
                            <Button>Save</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Button
                  variant="contained"
                  sx={{
                    padding: "10px",
                    marginTop: "2rem",
                  }}
                  onClick={handlePublishOpen}
                >
                  Publish Result
                </Button>
                <Dialog
                  open={publish}
                  onClose={handlePublishClose}
                >
                  <DialogTitle id="alert-dialog-title">Publish Result  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Are you sure you want to publish the Result of <Typography fontWeight={1000}>"{title}"</Typography>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions >
                    <Button variant='outlined' sx={{
                      fontWeight:'light',
                    }} onClick={handlePublishClose}>No</Button>
                    <Button variant='contained' sx={{
                      fontWeight:'light',
                    }} onClick={OnPublish} autoFocus>Publish</Button>
                  </DialogActions>

                </Dialog>
              </>
            )}
          </Box>
        </Drawer>

        {/* Drawer for History Tab */}
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
                  Course: {course}
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
                  <Typography fontSize={24} fontWeight={500}>
                    Total Marks : 50
                  </Typography>

                  <Button
                    sx={{
                      marginLeft: "auto",
                    }}
                  >
                    Passing Percentage : {percentage}%
                  </Button>
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
                  <Button color="success">Completed : 55</Button>
                  <Button color="warning">Pending : 15</Button>
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
              <Button color="info" variant='outlined'>Assignment..pdf</Button>
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
                        <TableCell>Marks</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.rollNumber}>
                          <TableCell component="th" scope="row">
                            {row.rollNumber}
                          </TableCell>

                          <TableCell component="th" scope="row">
                            {row.name}
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
                              endIcon={<FileDownloadOutlinedIcon/>}
                            >
                              Download
                            </Button>
                          </TableCell>
                          <TableCell component="th" scope="row">
                            <TextField type="number" helperText="Out of 50" value={34} />
                          </TableCell>
                          <TableCell component="th" scope="row">
                            <Button startIcon={<UpdateOutlinedIcon/>} variant='outlined'>Update</Button>
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
