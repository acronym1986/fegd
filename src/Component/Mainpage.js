import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withRouter} from "react-router-dom";
import Maincontent from './Maincontent';
import Header from './Header'

 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottom:'0.1px solid black'
  },
  list:{
    width: '100%',
    //border:'0.1px solid black'
    //maxWidth: 360,
    //backgroundColor: 'grey',
  },
  listborder:{
    borderBottom:'0.1px solid black'
  }
}));

 

 function Mainpage(props) {
    const { history } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row" justifyContent="center" spacing={0}>
        <Grid item xs={10}>
           <Paper className={classes.paper} elevation={0} square> 
            <Header/>
            </Paper>
        </Grid>
        <Grid item xs={10} sm={3}>
            <Paper elevation={0} square>
           <div className={classes.list}>
                <List component="nav"  aria-label="main mailbox folders">
                    <ListItem className={classes.listborder} onClick={() => history.push("/")} dense button>
                    <ListItemText primary="ABOUT/CONTACT"/>
                    </ListItem>
                    <ListItem className={classes.listborder} onClick={() => history.push("/experience")} dense button>
                    <ListItemText primary="WORK EXPERIENCE"/>
                    </ListItem>
                    <ListItem className={classes.listborder} onClick={() => history.push("/website")} dense button>
                    <ListItemText primary="WEBSITES"/>
                    </ListItem>
                    <ListItem className={classes.listborder} onClick={() => history.push("/chart")} dense button>
                    <ListItemText primary="CHARTS/UI/UX"/>
                    </ListItem>
                    <ListItem className={classes.listborder} onClick={() => history.push("/graphicdesign")} dense button>
                    <ListItemText primary="GRAPHIC DESIGN"/>
                    </ListItem>
                    <ListItem className={classes.listborder} onClick={() => history.push("/education")} dense button>
                    <ListItemText primary="EDUCATION" />
                    </ListItem>
                </List>
                </div>
            </Paper>
         </Grid>
          <Grid item xs={10} sm={7}>
            <Paper  elevation={0} square>
            <Maincontent/>
            </Paper>
          </Grid>

          <Grid item xs={10}>
          <Paper   elevation={0} square>
              
          </Paper>
        </Grid>
         
      </Grid>
    </div>
  );
}
export default withRouter(Mainpage);