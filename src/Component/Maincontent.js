import React from 'react'
//import { Typography } from '@material-ui/core'
import { Route, Switch} from 'react-router';
import About from '../Pages/About';
import Experience from '../Pages/Experience';
import Website from '../Pages/Website';
import Chart from '../Pages/Chart';
import Graphicdesign from '../Pages/Graphicdesign';
import Education from '../Pages/Education';

function Maincontent() {
    return (
      <Switch>
         <Route exact path="/" render={props => <About {...props} />} />
         <Route exact path="/experience" render={props => <Experience {...props} />} />
         <Route exact path="/website" render={props => <Website {...props} />} />
         <Route  path="/chart" render={props => <Chart {...props} />} />  
         <Route exact path="/graphicdesign" render={props => <Graphicdesign {...props} />} />
         <Route exact path="/education" render={props => <Education {...props} />} />
      </Switch>
        
    )
}

export default Maincontent