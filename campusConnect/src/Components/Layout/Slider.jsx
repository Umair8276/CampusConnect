import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  ListItemIcon,
  Box
} from "@mui/material";
import  TipsLogo  from "../../assets/tips.svg";
// icons
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import MenuIcon from "@mui/icons-material/Menu";
import GridViewIcon from "@mui/icons-material/GridView";
import SchoolIcon from "@mui/icons-material/School";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import LayersIcon from "@mui/icons-material/Layers";
import { useLocation, useNavigate } from "react-router-dom";
import { Rotate90DegreesCcw } from "@mui/icons-material";
const Slider = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openHomeDrawer, setHomeOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const lists = ["Home", "About", "Contact", "Sign Up", "Login"];
  const menu = [
    
    {
      title: "Attendance",
      icon: <BackHandOutlinedIcon />,
      path: "/instructor/attendance",
    },
    {
      title: "Assignments",
      icon: <NoteAltOutlinedIcon />,
      path: "/instructor/assignments",
    },
    {
      title: "Batches",
      icon: <LayersIcon />,
      path: "/instructor/batches",
    },
    // {
    //   title: "Result",
    //   icon: <SchoolIcon />,
    //   path: "/instructor/result",
    // },
    {
      title: "Notice",
      icon: <NoteAddOutlinedIcon />,
      path: "/instructor/notice",
    },
  ];
  
  const [selectedIndex, setSelectedIndex] = React.useState();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return  (
    <>
      <Drawer
        anchor="left"
        open={openHomeDrawer}
        onClose={() => setHomeOpenDrawer(false)}
        sx={{
          width: 240,
        }}
        variant="permanent"
        PaperProps={{
          sx: { width: 240 },
        }}
      >
        <IconButton
          onClick={() => setHomeOpenDrawer(!openHomeDrawer)}
          sx={{
            height: "4rem",
          }}
        >
          {/* <TipsLogo /> */}
          <img src={TipsLogo}/>
        </IconButton>

        <List>
          {menu.map((menu, index) => (
            <ListItem
              sx={{
                alignItems: "center",
              }}
              key={index}
            >
              <ListItemButton
                selected={selectedIndex === index}
                sx={{
                  borderRadius: "12px",
                  padding: "1rem",
                  color: selectedIndex === index ? "#2C62EE" : null,
                  bgcolor: selectedIndex === index ? "#ECF1FF" : null,
                  width: "10rem",
                }}
                key={index}
                onClick={(event) => {
                  handleListItemClick(event, index);
                  navigate(menu.path, { replace: true });
                }}
              >
                <ListItemIcon
                  sx={{
                    color: selectedIndex === index ? "#2C62EE" : null,
                  }}
                >
                  {menu.icon}
                </ListItemIcon>
                <ListItemText
                  sx={{
                    fontWeight: selectedIndex === index ? 800 : "normal",
                  }}
                >
                  {menu.title}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
          
          <ListItem >
            <ListItemButton sx={{
              borderRadius:'12px',
              padding:'1rem',
              bgcolor:"#FFEFEF",
              color:"#F93333",
            }}>
              <ListItemIcon >
                <PowerSettingsNewOutlinedIcon sx={{
                  transform:"rotate(270deg)",
                  color:"#F93333"
                }}/>
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>

      </Drawer>
    </>
  );
};

export default Slider;
