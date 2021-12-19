import React from 'react';
import Box from '@material-ui/core/Box';
import peiqianGreen from '../img/peiqianGreen.png'
import { Typography } from '@material-ui/core';

export default function Header() {
  return (
    <div style={{ width: '100%'}}>
      <Box display="flex" p={1}  bgcolor="#F5F5F5">
        <Box p={1} flexGrow={1}>
        <img src={peiqianGreen} alt="logo" width='90%' />
        </Box>
        <Box flexGrow={1}></Box>
        <Box p={1}>
        <Typography variant="body2" component="p" style={{color:'#006400', fontSize:'x-small'}}>
          acronym1986@gmail.com
          <br/>
          0435224612
          </Typography>
          </Box>
      </Box>
    </div>
  );
}
