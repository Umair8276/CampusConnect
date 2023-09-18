import React from "react";
import { Header } from "./index.ts";
import { Slider } from "./index.ts";
import { Box,useTheme } from "@mui/material";

const Layout = ({ children }) => {
  
  return (
    <Box display='flex' bgcolor='#F4EEEE' height='100%'>
      <Slider />
      <Header />
      <Box  sx={{
        margin: '6rem 2rem',
        width: '100%',
      }}>
      {children}
      </Box>
    </Box>
  );
};

export default Layout;
