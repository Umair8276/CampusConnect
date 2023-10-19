import React from "react";
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
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const NoticeCard = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Paper
        elevation={0.5}
        sx={{
          width: "340px",
          padding: "15px",
          borderRadius: "12px",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          border: "1px solid #E6E6E6",
          flexWrap: "wrap",
          gap: "2px",
        }}
      >
        <Typography fontWeight={550} fontSize={20} marginBottom={4}>
          Notice for Students on X Topic
        </Typography>
        <Typography
          sx={{
            color: "#9A9A9A",
          }}
        >
          Course : B.Tech Specialization in Health Informatics
        </Typography>
        <Typography
          sx={{
            color: "#9A9A9A",
          }}
        >
          Batch : BECO-20
        </Typography>

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
          25 july 2023
        </Stack>
        <Button
          fullWidth
          variant="contained"
          onClick={() => setOpen(true)}
          sx={{
            bgcolor: "#3D70F5",
            padding: "10px",
            fontWeight: "light",
            margin: "15px 0px",
          }}
        >
          View Details
        </Button>
        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: { width: 700, borderRadius: "15px 0px 0px 15px" },
          }}
        >
          <IconButton
            onClick={() => setOpen(!open)}
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
              Notice for Students on X Topic
            </Typography>
            <Typography
              fontSize={20}
              color="#D3D3D3"
              fontWeight={450}
              marginTop={5}
            >
              Course: B.Tech Specialization in Health Informatics
            </Typography>
            <Typography color="#D3D3D3" fontSize={20} fontWeight={450}>
              Batch : BECO-20
            </Typography>
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
              25 july 2023
            </Stack>
            <Typography
              fontSize={24}
              fontWeight={450}
              marginTop={5}
            >
              Description:
            </Typography>
            <Box fullWidth sx={{
                height:'20rem',
                overflowY:'scroll',
            }}>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam maiores culpa vitae nobis ducimus, nihil, odio, dolorem praesentium vel illo ratione recusandae a. Quae sequi voluptatum illo deleniti! Nemo pariatur fuga quo culpa consequuntur eveniet illum eum magnam cumque quia, id blanditiis iusto praesentium error accusamus temporibus reprehenderit, dolorem vel aspernatur quos quisquam dolor enim animi! Beatae illum obcaecati nihil accusantium natus autem voluptatibus, illo, omnis hic provident nemo possimus ad accusamus eius reiciendis saepe ab, doloremque ratione debitis quibusdam cumque dolore magni sed eligendi. Illum eaque maxime inventore? Aperiam omnis debitis nam, saepe labore sapiente repellat ratione facilis voluptas.
                </Typography>
            </Box>
            <Typography marginTop={5} fontWeight={450} fontSize={20}>
              Attachment
            </Typography>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 8,
                marginTop: "1rem",
              }}
            >
              <Button color="info" variant='outlined'>Notice..pdf</Button>
            </Stack>
          </Box>
        </Drawer>
      </Paper>
    </>
  );
};

export default NoticeCard;
