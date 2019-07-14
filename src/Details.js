/*<Grid container spacing={16}>
            <Grid item xs={6} sm={3} className={classes.header} >
                <Typography variant="h4">تفاصيل الرحلة</Typography>
            </Grid>
           
            <Grid item xs={6} sm={3} className={classes.content}>
                <Typography  variant="h6"> {this.state.plans[0].name} : من </Typography>
                
            </Grid>
            <Grid item xs={6} sm={3} className={classes.content}>
                <Typography  variant="h6"> {this.state.plans[0].name} : الي </Typography>
                
            </Grid>
            <Grid item xs={6} sm={3} className={classes.content}>
                <Typography  variant="h6"> {this.state.plans[0].name} : نوع الشاحنة </Typography>
                
            </Grid>
            <Grid item xs={6} sm={3} className={classes.content}>
                <Typography  variant="h6"> {this.state.plans[0].name} : نوع الحمولة </Typography>
                
            </Grid>
          
        </Grid>*/
        import React, {Component} from 'react';
        import Typography from '@material-ui/core/Typography';
        import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

        class Details extends Component
        {
            render()
            {
              
                return(
                    <div dir="rtl" >
           
                    <Paper  >
                        <Button variant="contained">
                            hi
                        </Button>
                        </Paper>
                        </div>
                )
            }
        }

        export default Details