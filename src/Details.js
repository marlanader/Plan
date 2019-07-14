import Grid from '@material-ui/core/Grid';
import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';

const styles = {

    details:{
        color:"black",
        align:"right",
        borderLeft: '1px solid grey'
    },
    content:{
        marginTop:50,
        color:"black",
        align:"right",
    },
    changeButton:{
        background:"#27ae60"
    },
    container:{
        marginRight:20
    }
}


class Details extends Component
{
    state={
        details:[{from:"القاهرة",to:"الجيزة",cartype:"نصف نقل ",weighttype:"اثاث",weight:"10 ",time:"10:00 ",notes:"N/A"}],
        edit:[{tonprice:"",drivercost:""}],
       change:false
    }
    
   handleChange=(e)=>
{
    const a = this.state.edit;
    a[0][e.target.name] = e.target.value;
   this.setState({
    edit: a
   })
}

 render()
 {
    const {classes}=this.props;
console.log(this.state)
   return(
        <div dir="rtl" >
 
         <Grid container  spacing={24}>
            <Grid item xs={12} sm={6} className={classes.details} > 
                <Grid  align="right" container  spacing={24} className={classes.container}>
                        <Grid item xs={12}  className={classes.content}>
                        <Typography variant="h4" >تفاصيل الرحلة</Typography>
                        </Grid>
                    
                        <Grid item xs={12}  className={classes.content}>
                        <Typography  variant="h6">   من : {this.state.details[0].from} </Typography>
                        </Grid>

                        <Grid item xs={12}  className={classes.content}>
                        <Typography  variant="h6">   الي : {this.state.details[0].to} </Typography>
                        </Grid>

                        <Grid item xs={12}  className={classes.content}>
                        <Typography  variant="h6"> نوع الشاحنة : {this.state.details[0].cartype} </Typography>
                        </Grid>

                        <Grid item xs={12}  className={classes.content}>
                        <Typography  variant="h6">  نوع الحمولة : {this.state.details[0].weighttype} </Typography>
                        </Grid>
                        
                        <Grid item xs={12}  className={classes.content}>
                        <Typography  variant="h6">  وزن الحمولة : {this.state.details[0].weight} </Typography>
                        </Grid>

                        <Grid item xs={12}  className={classes.content}>
                        <Typography  variant="h6">  الوقت : {this.state.details[0].time} </Typography>
                        </Grid>

                        <Grid item xs={12}  className={classes.content}>
                        <Typography  variant="h6">  ملاحظات : {this.state.details[0].notes} </Typography>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.header} > 
                <Grid container align="right" spacing={24} className={classes.container}>
                        <Grid item xs={12}  className={classes.content}>
                        <Typography variant="h4">تعديل البيانات</Typography>
                        </Grid>
                    
                        <Grid item xs={12}  className={classes.content}>
                            <Typography  variant="subtitle1">   الكارتة  
                            </Typography>
                            <TextField
                                id="filled-number"
                                type="number"
                                margin="normal"
                                />
                        </Grid>

                        <Grid item xs={12}  className={classes.content}>
                        <Typography  variant="subtitle1">بيات
                                </Typography>
                                <TextField
                                id="filled-number"
                                type="number"
                                margin="normal"  
                                />
                        </Grid>

                        <Grid item xs={12}  className={classes.content}>
                        <Typography  variant="subtitle1">تحويله
                                </Typography>
                                <TextField
                                id="filled-number"
                                type="number"
                                margin="normal"  
                                />
                        </Grid>

                        <Grid item xs={12}  className={classes.content}>
                        <Typography  variant="subtitle1"> المخالفات
                                </Typography>
                                <TextField
                                id="filled-number"
                                type="number"
                                margin="normal"  
                                />
                        </Grid>

                        <Grid item xs={12}  className={classes.content}>
                        <Typography  variant="subtitle1"> المعدية
                                </Typography>
                                <TextField
                                id="filled-number"
                                type="number"
                                margin="normal"  
                                />
                        </Grid>
                        
                        <Grid item xs={12}  className={classes.content}>
                        <Typography  variant="subtitle1"> سعر الطن
                                </Typography>
                                <TextField
                                id="filled-number"
                                type="number"
                                name="tonprice"
                                onChange={this.handleChange}
                                margin="normal"  
                                />
                        </Grid>

                        <Grid item xs={12}  className={classes.content}>
                        <Typography  variant="subtitle1"> العهدة
                                </Typography>
                                <TextField
                                id="filled-number"
                                type="number"
                                margin="normal"  
                                />
                        </Grid>

                        <Grid item xs={12}  className={classes.content}>
                        <Typography  variant="subtitle1"> قيمة اشتراك البرنامج
                                </Typography>
                                <TextField
                                id="filled-number"
                                type="number"
                                margin="normal"  
                                />
                        </Grid>

                        <Grid item xs={12}  className={classes.content}>
                        <Typography  variant="subtitle1"> حساب السائق
                                </Typography>
                                <TextField
                                id="filled-number"
                                type="number"
                                name="drivercost"  
                                margin="normal"
                                onChange={this.handleChange}
                                />
                        </Grid>

                        <Grid item xs={12}  className={classes.content}>
                        <Typography  variant="subtitle1">  مصاريف تسويق
                                </Typography>
                                <TextField
                                id="filled-number"
                                type="number"
                                margin="normal"  
                                />
                        </Grid>

                        <Grid item xs={12}  className={classes.content}>
                        <Typography  variant="subtitle1">  السعر الكلي 
                                </Typography>
                                <TextField
                                id="filled-number"
                                type="number"
                                margin="normal"  
                                />
                        </Grid>

                        <Grid item xs={12}  className={classes.content}>
                        <Typography  variant="subtitle1">  ملاحظات  
                                </Typography>
                             <TextField
                                id="filled-multiline-flexible"
                                multiline
                                rowsMax="4"
                                margin="normal"
                                />
                        </Grid>
                        <Grid item xs={12}  className={classes.content}>
                        <Button onClick={this.handleChange}variant="contained" className={classes.changeButton}> تعديل</Button>
                        </Grid>
                        
                    </Grid>
                </Grid>
            
           
        </Grid>
       
    </div>
                )
            }
 }

 export default withStyles(styles) (Details)