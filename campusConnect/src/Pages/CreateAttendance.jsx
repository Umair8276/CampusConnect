import {
  Box,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Stack } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MaintainAttendance from "../Components/common/MaintainAttendance";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

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

const CreateAttendance = () => {
  const [subject, setSubject] = React.useState("");

  const ChangeSubject = (event) => {
    setSubject(event.target.value);
  };
  const [batch, setBatch] = React.useState("");

  const ChangeBatch = (event) => {
    setBatch(event.target.value);
  };

  const navigate = useNavigate();
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
              onClick={() => navigate("/faculty/attendance", { replace: true })}
              sx={{
                marginLeft: "-2rem",
                marginRight: "1rem",
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
          <Typography fontWeight={450} fontSize={35}>
            Create New Attendance List
          </Typography>
        </Toolbar>
        <Box
          sx={{
            height: "auto",
            bgcolor: "#fff",
            borderRadius: "15px",
            padding: "20px",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "1rem",
            }}
          >
            <FormControl
              sx={{
                width: "40%",
              }}
            >
              <InputLabel id="subject">Subject</InputLabel>
              <Select
                labelId="subject"
                value={subject}
                label="Subject"
                onChange={ChangeSubject}
              >
                <MenuItem value={10}>Data Structure & Alogorithm</MenuItem>
                <MenuItem value={20}>Software Engineering</MenuItem>
                <MenuItem value={30}>Natural Language Processing</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              onClick={() => navigate("/instructor/attendance", { replace: true })}
              sx={{
                marginLeft: "auto",
              }}
            >
              Confirm
            </Button>
          </Stack>

          <Stack
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              gap: 4,
              marginLeft: "auto",
            }}
          >
            <FormControl
              sx={{
                width: "8rem",
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

            <input
              type="date"
              name=""
              id=""
              style={{
                padding: "8px",
              }}
            />
            <input
              type="time"
              name=""
              id=""
              style={{
                padding: "8px",
              }}
            />
          </Stack>
          <Typography
            fontSize={22}
            fontWeight={450}
            margin="3rem 0rem 1rem 0rem"
          >
            Total Student: 75
          </Typography>
          <Stack display="felx" flexWrap="wrap" flexDirection="row" gap={5}>
            <Typography
              sx={{
                fontWeight: 450,
                fontSize: 22,
                color: "#11A529",
              }}
            >
              Present: 00
            </Typography>
            <Typography
              sx={{
                fontWeight: 450,
                fontSize: 22,
                color: "#F93333",
              }}
            >
              Absent: 00
            </Typography>
          </Stack>
          <Typography fontSize={22} fontWeight={450} margin="1rem 0rem">
            List of Students
          </Typography>

          <TableContainer
            component={Paper}
            sx={{
              overflowY: "scroll",
              height: 400,
            }}
          >
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Roll Number</TableCell>
                  <TableCell>Student Name</TableCell>
                  <TableCell>Attendance</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.rollNumber}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.rollNumber}
                    </TableCell>

                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>
                      <MaintainAttendance />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default CreateAttendance;
