import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import searchWordJs from '../img/searchWordJs.png';
import covidTrackerReact from '../img/covidTrackerReact.png';
import rubyCLI from '../img/rubyCLI.png';
import farmTaskRails from '../img/farmTaskRails.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
    border: '0.1px solid #C8C8C8'
  },

   
}));

export default function Website() {
  const classes = useStyles();
  

  return (
    <div>
    <Card className={classes.root} style={{borderBottom:'0.1px solid black'}} elevation={0} square>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
           Covid Case Tracker
          </Typography>
          <Typography variant="body2" component="p">
              Built by JavaScript/JSON/DOM/CSS, API was provided
              by Merriam-Webster, users are able to enter word and receive word's 
              definition and pronunciation
            <br/> 
            <a href="https://acronym1986.github.io/js-project-mode/" target="_blank" rel="noreferrer">
            GitHub Link
            </a>
          </Typography>
        </CardContent>  
      </div>
      <CardMedia style={{padding:'15px 10px 0 0'}}>
        <img src={searchWordJs} className={classes.cover} alt=''/>
        </CardMedia>
    </Card>

    <Card className={classes.root} style={{borderBottom:'0.1px solid black'}} elevation={0} square>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
           Covid Case Tracker
          </Typography>
          <Typography variant="body2" component="p">
            React.js, CSS, JSON are used in this project, users can search 
            covid cases to get various results in different countries. Users 
            can also check the vaccination situtions in different countries
            <br/> 
            <a href="https://acronym1986.github.io/project2-react-app/" target="_blank" rel="noreferrer">
            GitHub Link
            </a>
          </Typography>
        </CardContent>  
      </div>
      <CardMedia style={{padding:'15px 10px 0 0'}}>
        <img src={covidTrackerReact} className={classes.cover} alt=''/>
        </CardMedia>
    </Card>
      
    <Card className={classes.root} style={{borderBottom:'0.1px solid black'}} elevation={0} square>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
           Covid Test Center CLI
          </Typography>
          <Typography variant="body2" component="p">
           A Ruby Gem package by using Scraping and Nokogiri, users 
            are able to see prompt message and follow the guidelines in order 
            to see the covid test centers in Adelaide, SA
            <br/>
          </Typography>
        </CardContent>  
      </div>
      <CardMedia style={{padding:'10px 10px 0 0'}}>
        <img src={rubyCLI} className={classes.cover} alt=''/>
        </CardMedia>
    </Card>

    <Card className={classes.root} elevation={0} square>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
           Farm Task Assignment
          </Typography>
          <Typography variant="body2" component="p">
            Bulit by Ruby on Rails and SQLite. Users are able 
            to simply sign up and log in, creating mutliple accounts and creating 
            different farm tasks to manage farm
            <br/>
          </Typography>
        </CardContent>  
      </div>
      <CardMedia style={{padding:'10px 10px 0 0'}}>
        <img src={farmTaskRails} className={classes.cover} alt=''/>
        </CardMedia>
    </Card>
    </div>
  );
}
