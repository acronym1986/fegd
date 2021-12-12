import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Box } from '@material-ui/core';
import myPic from '../img/myPic.jpg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import { Link } from '@material-ui/icons';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    backgroundColor: red[500],
  },
  logo: {
    maxWidth: 115,
  },
  
});

export default function About() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
    <Card className={classes.root} style={{borderBottom:'0.1px solid black'}} elevation={0} square>
         
         <Box display="flex" flexDirection="row" p={1} m={1}>
            <Box p={1} >
              <Typography variant="h5" component="h2" >
              ABOUT MYSELF (Phillip)
              </Typography>
                 
              <Typography variant="body2" component="p">
              Motivated and hardworking Graduate from Information Technology area.<br/> 
                Enthusiastic about web design, application development, graphic desige and video editing. 
                Seeking an junior position of developer/designer to utilize my IT skills and knowledge.<br/>   
                Combining my previous experience with my skills to develop effective user friendly applications.  
                putting tasks in priority, solving problems and a loyal team player,  
                looking forward to imporve more from an organisation that provides the opportunity to expand my knowledge and skills.
                
                </Typography>
            </Box>    

            <Box display="flex" flexDirection="row-end">
                <Box 
                component="img" 
                border={1}
                src={myPic}
                width={80} 
                height={120}
                />
             </Box>
        </Box> 
    </Card>
           

    <Card  className={classes.root} style={{borderBottom:'0.1px solid black'}}  elevation={0} square>
      <CardContent>       
        <Typography variant="h5" component="h2">
          HARD SKILL
        </Typography>
          
        <Typography variant="body2" component="p">
           {bull}Programming:HTML, CSS, JavaScript, React, Material UI, Ruby on Rails, SQLite<br/>
           {bull}Graphic and Video design: Adobe Premiere, CorelDraw, Photoshop<br/>
           {bull}Office software: Microsoft Word, PowerPoint(animation), Slack, Microsoft Teams
          <br />
        </Typography>
      </CardContent>
    </Card>

       
    <Card className={classes.root} style={{borderBottom:'0.1px solid black'}} elevation={0} square>
      <CardContent>       
        <Typography variant="h5" component="h2">
          SOFT SKILL
        </Typography>
          
        <Typography variant="body2" component="p">
           {bull}Teamwork<br />
           {bull}Communication<br/>
           {bull}prioritize work before deadline<br />
           {bull}Documentation<br />
        </Typography>
      </CardContent>
    </Card>

    <Card className={classes.root} elevation={0} square>
      <CardContent>
        <Typography variant="h5" component="h2">
        CONTACT:
        </Typography>
        <List >
        <ListItem dense >
            <LinkedInIcon />
            <a href="http://linkedin.com/in/pei-qian-he-1b195021b" target="_blank" rel="noreferrer">
              <Link  className={classes.link} target="_blank" >
              <LinkedInIcon/>
              </Link>
              </a>
          <ListItemText primary="LinkedIn" />
        </ListItem>

        <ListItem dense >
            <EmailIcon/>
          <ListItemText primary="Email: acronym1986@gmail.com" />
        </ListItem>

        <ListItem dense >
            <PhoneIphoneIcon/>
          <ListItemText primary="Mobile: 0435224612" />
        </ListItem>
      </List>
       
      </CardContent>
    </Card>
    
    </div>
  );
}
