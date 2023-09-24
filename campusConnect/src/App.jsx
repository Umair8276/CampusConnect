import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import {
  Login,
  Signup,
  InstructorDashboard,
  Result,
  InstructorProfile,
  Notice,
  Attendance,
  Batches,
  Assignments,
  Home,
  CreateAttendance,
  CreateAssignment,
  Admission
} from "./Pages/index.ts";
import { Layout } from "./Components/Layout/index.ts";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/faculty/*"
            element={
              <Layout>
                <Routes>
                  <Route path="/result" element={<Result />} />
                  <Route path="/notice" element={<Notice />} />
                  <Route path="/attendance" element={<Attendance />} />
                  <Route path="/profile" element={<InstructorProfile />} />
                  <Route path="/batches" element={<Batches />} />
                  <Route path="/assignments" element={<Assignments />} />
                  <Route path="/create-attendance" element={<CreateAttendance />} />
                  <Route path="/create-assignment" element={<CreateAssignment />} />
                </Routes>
              </Layout>
            }
          />
       
          <Route 
          path="/clerk/*"
          element={
            <Layout>
            <Routes>
              <Route path="/admission" element={<Admission/>}/>
            </Routes>
            </Layout>
          }

          />

          <Route 
          path="/admin/*"
          element={
            <Layout>
            <Routes>
              <Route path="/admission" element={Admission}/>
            </Routes>
            </Layout>
          }

          />
          <Route 
          path="/student/*"
          element={
            <Layout>
            <Routes>
              <Route path="/admission" element={Admission}/>
            </Routes>
            </Layout>
          }

          />
        
        </Routes>
      </BrowserRouter>
      </LocalizationProvider>
    </>
  );
}

export default App;
