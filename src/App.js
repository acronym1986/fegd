 import Mainpage from './Component/Mainpage'
 import { makeStyles } from '@material-ui/core/styles';
 import React from 'react';
 import { ThemeProvider, createTheme } from '@material-ui/core/styles';

 
 const theme = createTheme({
  typography: {
   // fontFamily: [
      //'barlow'
   // ].join(','),
   allVariants: {
    color: '#006400'
  }
  },});
  

  const useStyles = makeStyles(() => ({
    root: {
      minHeight:'100vh',
      width:'100%',
      backgroundColor: "#F5F5F5"
    }
  }));
  
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Mainpage/> 
        </ThemeProvider>
  </div>  
  );
}

export default App;
