import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import { styled, useColorScheme } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import axios from 'axios';
import { AppContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';


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

const CreateNotice = () => {
    const [file, setFile] = useState("");
    const [content, setContent] = useState("");
    const [branch, setBranch] = useState("");
    const [classes, setClasses] = useState("");
    const [alert, setAlert] = useState(false);
    const [success, setSuccess] = useState(false);
    const {user} = useContext(AppContext);
    const navigate = useNavigate()

    const handleUpload = async (url) => {
        const data = new FormData();
        data.append("file", url);
        data.append("upload_preset", "pehzflst");
        data.append("cloud_name", "zaidsiddiqui");
        fetch("https://api.cloudinary.com/v1_1/zaidsiddiqui/upload", {
            method: "post",
            body: data,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.url);
                setFile(data.url)
            });
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 2000)
    };

    const postData = () => {
        console.log(file, content, classes, branch)
        axios.post("http://localhost:5000/api/notice/createnotice",{
            file,
            content,
            classes,
            branch,
            faculty:user._id
        }).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
        }, 2000)
        navigate("/faculty/notice")
    }

    return (
        <>
            {
                alert &&
                <Alert severity="success">
                    <AlertTitle>File Uploaded Successfully</AlertTitle>
                </Alert>
                

            }
            {
                success &&
                <Alert severity="success">
                <AlertTitle>Notice Uploaded Successfully</AlertTitle>
            </Alert>

            }

            <h1>Create Notice</h1>
            <Divider />
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 2, width: '45ch' },
                }}
                style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}
                noValidate
                autoComplete="off"
            >

                <TextField
                    id="outlined-multiline-static"
                    label="Enter Content"
                    multiline
                    rows={5}
                    onChange={(e) => setContent(e.target.value)}
                    defaultValue=""
                />


                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Branch</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        autoWidth
                        label="Branch"
                    >
                        <MenuItem value={"Computer"}>Computer</MenuItem>
                        <MenuItem value={"Mechanical"}>Mechanical</MenuItem>
                        <MenuItem value={"Electrical"}>Electrical</MenuItem>
                        <MenuItem value={"Electronics"}>Electronics</MenuItem>
                    </Select>


                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Class</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={classes}
                        onChange={(e) => setClasses(e.target.value)}
                        autoWidth
                        label="Class"
                    >
                        <MenuItem value={"FE"}>FE</MenuItem>
                        <MenuItem value={"SE"}>SE</MenuItem>
                        <MenuItem value={"TE"}>TE</MenuItem>
                        <MenuItem value={"BE"}>BE</MenuItem>
                    </Select>


                </FormControl>

            </Box>

            <Box style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Button
                    component="label"
                    variant="outlined"
                    startIcon={<CloudUploadIcon />}
                    fullWidth
                    sx={{
                        mt: "2rem",
                    }}
                    style={{ width: "350px" }}
                >
                    Upload file
                    <VisuallyHiddenInput type="file" onChange={(e) => handleUpload(e.target.files[0])} />
                </Button>

                <Button variant="contained" sx={{ mt: "2rem", width: "20rem" }} onClick={postData}>
                    Publish
                </Button>
            </Box>

        </>
    )
}

export default CreateNotice