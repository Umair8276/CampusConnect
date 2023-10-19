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
import { useState } from 'react';
import  axios  from 'axios';



// export const Form2 = () => {
//   const theme = useTheme();
//   const [personName, setPersonName] = React.useState([]);

//   const ITEM_HEIGHT = 48;
//   const ITEM_PADDING_TOP = 8;
//   const MenuProps = {
//     PaperProps: {
//       style: {
//         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//         width: 250,
//       },
//     },
//   };
  

//   const handleChange = (event) => {
//      setPersonName(event.target.value)
//   };
  
//   function getStyles(name, personName, theme) {
//     return {
//       fontWeight:
//         personName.indexOf(name) === -1
//           ? theme.typography.fontWeightRegular
//           : theme.typography.fontWeightMedium,
//     };
//   }
//   return(
//     <>
//     <Box
//     component="form"
//     style={{marginTop:"50px"}}
//     sx={{
//       '& .MuiTextField-root': { m: 1, width: '45ch' },
//     }}
//     noValidate
//     autoComplete="off"
//   >

//     <div>
  
//       <TextField
//           id="outlined-multiline-flexible"
//           // label=////"Enrollment ID"
//           multiline
//           maxRows={4}
//           defaultValue={43524324}
//           inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
//         />
    

//       <FormControl sx={{ m: 1, width: "200px"}}>
//         <InputLabel id="demo-simple-select-autowidth-label">Stream</InputLabel>
//         <Select
//           labelId="demo-simple-select-autowidth-label"
//           id="demo-simple-select-autowidth"
//           // value={age}
//           // onChange={handleChange}
//           autoWidth
//           label="Age"
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={10}>Twenty</MenuItem>
//           <MenuItem value={21}>Twenty one</MenuItem>
//           <MenuItem value={22}>Twenty one and a half</MenuItem>
//         </Select>
//       </FormControl>

//       <FormControl sx={{ m: 1, width: "200px"}}>
//         <InputLabel id="demo-simple-select-autowidth-label">Year</InputLabel>
//         <Select
//           labelId="demo-simple-select-autowidth-label"
//           id="demo-simple-select-autowidth"
//           // value={age}
//           // onChange={handleChange}
//           autoWidth
//           label="Age"
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={10}>Twenty</MenuItem>
//           <MenuItem value={21}>Twenty one</MenuItem>
//           <MenuItem value={22}>Twenty one and a half</MenuItem>
//         </Select>
//       </FormControl>

//       <FormControl sx={{ m: 1, width: "200px"}}>
//         <InputLabel id="demo-simple-select-autowidth-label">Course</InputLabel>
//         <Select
//           labelId="demo-simple-select-autowidth-label"
//           id="demo-simple-select-autowidth"
//           // value={age}
//           // onChange={handleChange}
//           autoWidth
//           label="Age"
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={10}>Twenty</MenuItem>
//           <MenuItem value={21}>Twenty one</MenuItem>
//           <MenuItem value={22}>Twenty one and a half</MenuItem>
//         </Select>
//       </FormControl>

    
     
       

//     </div>

// </Box>
//     </>
//   )

// }

export const Form1 = () => { 
  const [adYear,setAdYear] = useState("")
  const [gradYear,setgradYear] = useState("")
  const [input,setInput] = useState({
    firstName:"",
    lastName:"",
    department:"",
    adYear:"",
    gradYear:"",
    mobileNo:"",
    address:"",
    state:"",
    district:"",
    city:"",
    pincode:"",
    ttFees:"",
    feesPaid:"",
    crntYear:"",
    crntSem:""
  })

  // const data = {
  //   input.firstName,
  //   input.lastName,
  //   input.department,
  //   startYear:input.adYear,
  //   endYear:input.gradYear,
  //   input.mobileNo,
  //   input.address,
  //   input.state,
  //   input.city,
  //   input.district,
  //   input.pincode,
  //   totalFees:input.ttFees,
  //   input.feesPaid,
  //   currentYear:input.crntYear,
  //   currentSem:input.crntSem,

  // }

  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setInput(prev => {
      return { ...prev, [name]: value};
    });
    console.log(name , ":" , value)
  }
  const handleSubmit = () => {
    axios.post("http://localhost:5000/api/stu/admission",{
      firstName:input.firstName,
      lastName:input.lastName,
      department:input.department,
      startYear:input.adYear,
      endYear:input.gradYear,
      mobileNo:input.mobileNo,
      address:input.address,
      state:input.state,
      city:input.city,
      district:input.district,
      pincode:input.pincode,
      totalFees:input.ttFees,
      feesPaid:input.feesPaid,
      currentYear:input.crntYear,
      currentSem:input.crntSem,
     
    }).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
  }
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
          name='firstName'
          value={input.firstName}
          onChange={handleChange}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Enter LastName"
          multiline
          name='lastName'
          value={input.lastName}
          onChange={handleChange}
          maxRows={4}
        />
      <TextField
          id="outlined-multiline-flexible"
          label="Enter MobileNo"
          name='mobileNo'
          multiline
          value={input.mobileNo}
          onChange={handleChange}
          maxRows={4}
        />
      <TextField
          id="outlined-multiline-flexible"
          label="Enter Department"
          name='department'
          value={input.department}
          onChange={handleChange}
          multiline
          maxRows={4}
        />
      <TextField
          id="outlined-multiline-flexible"
          label="Enter Admission Year"
          name='adYear'
          value={input.adYear}
          onChange={handleChange}
          multiline
          maxRows={4}
        />
      <TextField
          id="outlined-multiline-flexible"
          label="Enter Graduation Year"
          name='gradYear'
          value={input.gradYear}
          onChange={handleChange}
          multiline
          maxRows={4}
        />
     {/* <DatePicker label="Admission Year" value={adYear}  onChange={(e) => setAdYear(e.target.value)}  />
     <DatePicker label="Graduation Year" value={gradYear}   onChange={(e) => setgradYear(e.target.value)} /> */}
       <TextField
          id="outlined-multiline-static"
          label="Address"
          multiline
          name='address'
          value={input.address}
          onChange={handleChange}
          rows={4}
          // defaultValue="Address"
        />

          <TextField
          id="outlined-multiline-flexible"
          label="Enter city"
          multiline
          name='city'
          value={input.city}
          onChange={handleChange}
          maxRows={4}
        />
      <TextField
          id="outlined-multiline-flexible"
          label="Enter District"
          multiline
          name='district'
          value={input.district}
          onChange={handleChange}
          maxRows={4}/>
      <TextField
          id="outlined-multiline-flexible"
          label="Enter Pincode"
          multiline
          name='pincode'
          value={input.pincode}
          onChange={handleChange}
          maxRows={4}
        />
      <TextField
          id="outlined-multiline-flexible"
          label="Enter State"
          multiline
          name='state'
          value={input.state}
          onChange={handleChange}
          maxRows={4}
        />
      <TextField
          id="outlined-multiline-flexible"
          label="Enter Total Fees"
          multiline
          name='ttFees'
          value={input.ttFees}
          onChange={handleChange}
          maxRows={4}
        />
      <TextField
          id="outlined-multiline-flexible"
          label="Enter Fees Paid Amt"
          multiline
          name='feesPaid'
          value={input.feesPaid}
          onChange={handleChange}
          maxRows={4}
        />
      <TextField
          id="outlined-multiline-flexible"
          label="Enter Current Year"
          multiline
          name='crntYear'
          value={input.crntYear}
          onChange={handleChange}
          maxRows={4}
        />
      <TextField
          id="outlined-multiline-flexible"
          label="Enter Current Sem"
          multiline
          name='crntSem'
          value={input.crntSem}
          onChange={handleChange}
          maxRows={4}
        />
      </div>
      <div style={{display:"flex" ,justifyContent:"center",marginTop:"1rem"}}>
      <Button variant="contained"onClick={() =>handleSubmit()}>Submit</Button>

      </div>
    </Box>
    </>
   )
}

const Admission = () => {
//   const [step, setStep] = React.useState(0);
//   const [completed, setCompleted] = React.useState({});

//   const steps = [
//     'Admission',
//     'Final Step',
//   ];

 

  
// const handleStep = () => {
//   console.log("object")
//   setStep(step + 1);

// }

const handleSubmit = () => {

}

    return (
      <>
      <Form1/>
    
      </>
//     <div >
//       <Box sx={{ width: '100%' }}>
//       <Stepper activeStep={step} alternativeLabel>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//     </Box>

//     {
//        step==0
//        ?
//        <Form1/>
//        :
//        <Form2/>
 
//  }
       
//     <div style={{marginTop:"50px",display:"flex",justifyContent:"flex-end",padding:"0 9%"}}>
//     <Button variant="contained" onClick={() => handleStep()}>{step==0 ? "Next" : "submit"}</Button> 
//     </div>
//     </div>
  )
}
export default Admission
