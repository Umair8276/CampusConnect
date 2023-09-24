import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';



export const Form2 = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];


  const handleChange = (event) => {
     setPersonName(event.target.value)
  };
  
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  return(
    <>
    <Box
    component="form"
    style={{marginTop:"50px"}}
    sx={{
      '& .MuiTextField-root': { m: 1, width: '45ch' },
    }}
    noValidate
    autoComplete="off"
  >

    <div>
  
      <TextField
          id="outlined-multiline-flexible"
          // label=////"Enrollment ID"
          multiline
          maxRows={4}
          defaultValue={43524324}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
        />
    

      <FormControl sx={{ m: 1, width: "200px"}}>
        <InputLabel id="demo-simple-select-autowidth-label">Stream</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          // value={age}
          // onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, width: "200px"}}>
        <InputLabel id="demo-simple-select-autowidth-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          // value={age}
          // onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, width: "200px"}}>
        <InputLabel id="demo-simple-select-autowidth-label">Course</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          // value={age}
          // onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>

    
     
       

    </div>

</Box>
    </>
  )

}

export const Form1 = () => {
   return(
    <>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      
      <TextField
          id="outlined-multiline-flexible"
          label="Enter FirstName"
          multiline
          maxRows={4}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Enter LastName"
          multiline
          maxRows={4}
        />
      <TextField
          id="outlined-multiline-flexible"
          label="Enter MobileNo"
          multiline
          maxRows={4}
        />
      <TextField
          id="outlined-multiline-flexible"
          label="Enter EmailId"
          multiline
          maxRows={4}
        />
     <DatePicker label="Basic date picker" />
      <TextField
          id="outlined-multiline-flexible"
          label="Enter Father Name"
          multiline
          maxRows={4}
        />
      <TextField
          id="outlined-multiline-flexible"
          label="Enter Mother Name"
          multiline
          maxRows={4}
        />
       <TextField
          id="outlined-multiline-static"
          label="Address"
          multiline
          rows={4}
          // defaultValue="Address"
        />

          <TextField
          id="outlined-multiline-flexible"
          label="Enter city"
          multiline
          maxRows={4}
        />
      <TextField
          id="outlined-multiline-flexible"
          label="Enter District"
          multiline
          maxRows={4}/>
      <TextField
          id="outlined-multiline-flexible"
          label="Enter Pincode"
          multiline
          maxRows={4}
        />
      <TextField
          id="outlined-multiline-flexible"
          label="Enter State"
          multiline
          maxRows={4}
        />
        <DatePicker label="Joining Date" />
       
      </div>
    
    </Box>
    </>
   )
}

const Admission = () => {
  const [step, setStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const steps = [
    'Admission',
    'Final Step',
  ];

 

  
const handleStep = () => {
  console.log("object")
  setStep(step + 1);

}

    return (
    <div >
      <Box sx={{ width: '100%' }}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>

    {
       step==0
       ?
       <Form1/>
       :
       <Form2/>
 
 }
       
    <div style={{marginTop:"50px",display:"flex",justifyContent:"flex-end",padding:"0 9%"}}>
    <Button variant="contained" onClick={() => handleStep()}>{step==0 ? "Next" : "submit"}</Button> 
    </div>
    </div>
  )
}
export default Admission
