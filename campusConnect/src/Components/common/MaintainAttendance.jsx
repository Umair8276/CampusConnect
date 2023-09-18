import React from 'react';
import { ToggleButton,ToggleButtonGroup } from '@mui/material';

const MaintainAttendance = () => {
    const [attendance, setAttendance] = React.useState(true);
    const handleChange = (event, newAttendace) => {
      setAttendance(newAttendace);
    };
  return (
    <><ToggleButtonGroup
    value={attendance}
    exclusive
    onChange={handleChange}
    aria-label="Platform"
  >
    <ToggleButton value={true} color="success" sx={{}}>
      Present
    </ToggleButton>
    <ToggleButton value={false} color="error" sx={{}}>
      Absent
    </ToggleButton>
  </ToggleButtonGroup></>
  )
}

export default MaintainAttendance