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
import NoticeCard from "../Components/common/NoticeCard";
const Notice = () => {
  const [value, setValue] = React.useState(0);

  function TabPanel(props) {
    const { children, value, page } = props;
    return <div>{page === value && children}</div>;
  }
  return (
    <>
      <Toolbar>
        <Typography fontWeight={450} fontSize={35}>
          Notice
        </Typography>
      </Toolbar>
      <Box
        sx={{
          bgcolor: "#fff",
          display: "flex",
          flexWrap: "wrap",
          borderRadius: "15px",
          flexDirection: "column",
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
            <Tab label="For Student" />
            <Tab label="For Instructor" />
          </Tabs>
        </Box>
        <Box p={2} >
            <TabPanel value={value} page={0}>
              <NoticeCard/>
            </TabPanel>
            <TabPanel value={value} page={1}>
            <NoticeCard/>            </TabPanel>
          </Box>
      </Box>
    </>
  );
};

export default Notice;
