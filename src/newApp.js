import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

import {BrowserRouter, Route} from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
const styles = {
  card: {
    width:"90%",
    marginTop:30,
    minWidth: 270,
    height:50,
    padding:10,
   marginLeft:100
  },
  companyname:{
    marginright:20
  },
  chip_done:{
    background:'red',
    width:100
  },
  chip_running:
  {
    background:'green',
    width:100
  }
  
}



class NewApp extends Component
{
  state={
    plan:[{id:1,name:'Trukto',date:'1/7/2019',planstate:'انتهت',numberoftrips:'1'},
    {id:2,name:'AUC',date:'7/7/2019',planstate:'لم تنتهي',numberoftrips:'5'}]
  }
  render()
  {
    const {classes } = this.props;
  return(
    
    <div>
     
      {this.state.plan.map((plan,i) => (
        <div className="card" key={this.state.plan[i].id}>
        <Card className={classes.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
                <Grid container spacing={24}>
                  <Grid item xs={12} sm= {2}>
                    <Link component={RouterLink} to={"/"+this.state.plan[i].id}>
                     تفاصيل 
                    </Link>
                  </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography variant="h5" gutterBottom>
                    {this.state.plan[i].numberoftrips}  :عدد الرحلات
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2} >
                    {this.state.plan[i].planstate=="انتهت"?
                    <Chip label={this.state.plan[i].planstate} className={classes.chip_done} /> :
                    <Chip label={this.state.plan[i].planstate} className={classes.chip_running} />}
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Typography variant="h5" gutterBottom>
                        {this.state.plan[i].date}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography className={classes.companyname} variant="h5" gutterBottom>
                      {this.state.plan[i].name}
                    </Typography>
                    
                  </Grid>
                </Grid>
              </Typography>
          </CardContent>
          </Card>
          </div>
          
          
      ))}
       
      </div>
      
   )
 }




}
export default withStyles(styles)(NewApp);