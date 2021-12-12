import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
 


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
  
});

export default function Experience() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.root} style={{borderBottom:'0.1px solid black'}} elevation={0} square >
       <CardContent >       
        <Typography variant="h5" component="h2" >
           Internship in Xaana.ai
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          09 / 2020 – 12 / 2021
        </Typography>
        <Typography variant="body2" component="p">
           {bull}assist team member with technical documentation<br />
           {bull}design and create diagrams to explain dataflow<br />
           {bull}develop website which combines documenation with animation/charts<br />
           {bull}edit PowerPoint with animation<br />
           {bull}daily progress meeting<br />
        </Typography>
      </CardContent>
    </Card>

    <Card className={classes.root} style={{borderBottom:'0.1px solid black'}} elevation={0} square >
       <CardContent >       
        <Typography variant="h5" component="h2" >
           Bootcamps Projects (programming | video editing)
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          10 / 2020 – 07 / 2021
        </Typography>
        <Typography variant="body2" component="p">
           {bull}Develop SPA application by using JavaScript, API, HTML, CSS<br />
           {bull}Develop application by using React, API, CSS<br />
           {bull}Develop CLI application by using Ruby Scraping, Nokogiri<br />
           {bull}Develop application by using Ruby on Rails, sql<br />
           {bull}Develop application by using sql, rails, react,redux<br />
           {bull}Video editing by using Adobe Premiere<br />
           {bull}Video editing by using CorelDraw<br />
        </Typography>
      </CardContent>
    </Card>


    <Card  className={classes.root} style={{borderBottom:'0.1px solid black'}} elevation={0} square>
      <CardContent>       
        <Typography variant="h5" component="h2">
          Customer Service assistant
        </Typography>
  
        <Typography className={classes.pos} color="textSecondary">
          01 / 2017 – 05 / 2020
        </Typography>
        <Typography variant="body2" component="p">
           {bull}Managing customer enquiries and orders <br/>    
           {bull}Management and Logistics<br/>
           {bull}Produce quality and quantity control <br/>
           {bull}Improving sale strategy  <br/>
           {bull}Managing stall and team in the market<br/> 
          
        </Typography>
      </CardContent>
    </Card>


    <Card className={classes.root} style={{borderBottom:'0.1px solid black'}} elevation={0} square>
      <CardContent>       
        <Typography variant="h5" component="h2">
           Produce Pick Packer
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
         06 / 2015 – 11 / 2016
        </Typography>
        <Typography variant="body2" component="p">
           {bull}picking and packing customer’s orders <br/>    
           {bull}Stock and inventory control<br/>
           {bull}Warehouse maintenance <br/>
           {bull}Order problem solving <br/> 
          
        </Typography>
      </CardContent>
    </Card>


    <Card className={classes.root} style={{borderBottom:'0.1px solid black'}} elevation={0} square >
      <CardContent>       
        <Typography variant="h5" component="h2">
         Graphed Design volunteer (student)
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         09 / 2007 – 06 / 2010
        </Typography>
        <Typography variant="body2" component="p">
           {bull}Working on visual design for the concerts with team members <br/>    
           {bull}Working on individual graduation design<br/>
           {bull}Working on visual design (PowerPoint) for tutors<br/>
           {bull}Logo design for film association and local children’s club<br/> 
           
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
