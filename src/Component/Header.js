import React from 'react';
import Box from '@material-ui/core/Box';
import peiqian from '../img/peiqian.png'

export default function Header() {
  return (
    <div style={{ width: '100%'}}>
      <Box display="flex" p={1} bgcolor="background.paper">
        <Box p={1} flexGrow={1}>
        <img src={peiqian} alt="logo" width='100%' />
        </Box>
        
      </Box>
    </div>
  );
}
