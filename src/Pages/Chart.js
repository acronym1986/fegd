import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    //padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    //width:'100%',
  },
}));

export default function Chart() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={4} sm={3} style={{border:'0.1px solid gray'}}>
          <img 
           src="https://i.ibb.co/0QVj8wj/allshowwork30.png" 
           alt="allshowwork30" 
           style={{width:'100%'}}
          />   
        </Grid>
        <Grid item xs={4} sm={3} style={{border:'0.1px solid gray'}}>
          <img 
           src="https://i.ibb.co/WtwhPnW/allshowwork31.png" 
           alt="allshowwork31" 
           style={{width:'100%'}}
          />   
        </Grid>
        <Grid item xs={4} sm={3} style={{border:'0.1px solid gray'}}>
          <img 
           src="https://i.ibb.co/pz9140Y/allshowwork32.png" 
           alt="allshowwork32" 
           style={{width:'100%'}}
          />   
        </Grid>
        <Grid item xs={4} sm={3} style={{border:'0.1px solid gray'}}>
          <img 
           src="https://i.ibb.co/jfqmTPW/allshowwork33.png" 
           alt="allshowwork33" 
           style={{width:'100%'}}
          />   
        </Grid>
        <Grid item xs={4} sm={3} style={{border:'0.1px solid gray'}}>
          <img 
           src="https://i.ibb.co/98yVqbm/allshowwork34.png" 
           alt="allshowwork34" 
           style={{width:'100%'}}
          />   
        </Grid>
        <Grid item xs={4} sm={3} style={{border:'0.1px solid gray'}}>
          <img 
           src="https://i.ibb.co/ZctLc3B/allshowwork35.png" 
           alt="allshowwork35" 
           style={{width:'100%'}}
          />   
        </Grid>
        <Grid item xs={4} sm={3} style={{border:'0.1px solid gray'}}>
          <img 
           src="https://i.ibb.co/WVtrtrS/allshowwork36.png" 
           alt="allshowwork36" 
           style={{width:'100%'}}
          />   
        </Grid>
        <Grid item xs={4} sm={3} style={{border:'0.1px solid gray'}}>
          <img 
           src="https://i.ibb.co/CzbrP6x/allshowwork37.png" 
           alt="allshowwork37" 
           style={{width:'100%'}}
          />   
        </Grid>
        <Grid item xs={4} sm={3} style={{border:'0.1px solid gray'}}>
          <img  
           src="https://i.ibb.co/HYxz9gK/allshowwork38.png" 
           alt="allshowwork38" 
           style={{width:'100%'}}
          />   
        </Grid>
        <Grid item xs={4} sm={3} style={{border:'0.1px solid gray'}}>
          <img   
           src="https://i.ibb.co/MZN1qMK/allshowwork39.png" 
           alt="allshowwork39" 
           style={{width:'100%'}}
          />   
        </Grid>
        <Grid item xs={4} sm={3} style={{border:'0.1px solid gray'}}>
          <img  
           src="https://i.ibb.co/C5bGtx2/allshowwork40.png" 
           alt="allshowwork40" 
           style={{width:'100%'}}
          />   
        </Grid>
        <Grid item xs={4} sm={3} style={{border:'0.1px solid gray'}}>
          <img  
           src="https://i.ibb.co/nQ8RzXN/allshowwork41.png" 
           alt="allshowwork41" 
           style={{width:'100%'}}
          />   
        </Grid>
        <Grid item xs={4} sm={3} style={{border:'0.1px solid gray'}}>
          <img 
           src="https://i.ibb.co/ykbNLKn/allshowwork42.png" 
           alt="allshowwork42" 
           style={{width:'100%'}}
          />   
        </Grid>
        <Grid item xs={4} sm={3} style={{border:'0.1px solid gray'}}>
          <img  
           src="https://i.ibb.co/1nx67Bm/allshowwork43.png" 
           alt="allshowwork43" 
           style={{width:'100%'}}
          />   
        </Grid>
        <Grid item xs={4} sm={3} style={{border:'0.1px solid gray'}}>
          <img 
           src="https://i.ibb.co/mH0bpyT/allshowwork44.png" 
           alt="allshowwork44" 
           style={{width:'100%'}}
          />   
        </Grid>
        <Grid item xs={4} sm={3} style={{border:'0.1px solid gray'}}>
          <img   
           src="https://i.ibb.co/zSbhqHq/allshowwork45.png" 
           alt="allshowwork45" 
           style={{width:'100%'}}
          />   
        </Grid>

      </Grid>
    </div>
  );
}
