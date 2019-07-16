import Grid from '@material-ui/core/Grid';
import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import BackIcon from '@material-ui/icons/KeyboardBackspace';


const styles = {

    details:{
        color:"black",
        align:"right",
        borderLeft: '1px solid grey'
    },
    content:{
        padding:20,
        color:"black"
    },
    changeButton:{
        background:"#27ae60",
        width:"40%",
    },
    container:{
        marginRight:25
    },
    backicon:{
        padding:10
    },
    header:{
            color:"black",
            marginBottom:10
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
 
         <Grid item className={classes.backicon}   align="left" xs={12} sm={12} >
             <Button  variant="contained">
             <BackIcon/>
             </Button>
        </Grid>

         <Grid container  spacing={24}>
            <Grid item xs={12} sm={6} className={classes.details} > 
            
                <Grid  align="right" container  spacing={24} className={classes.container}>
               
                        <Grid item xs={12}  className={classes.header}>
                        <Typography variant="h4" >تفاصيل الرحلة</Typography>
                        </Grid>
                    
                        <Grid item xs={12}  className={classes.content}>
                        <Typography variant="h6" > <strong>   من : {this.state.details[0].from} </strong> </Typography>
                        </Grid>

                        <Grid item xs={12}  className={classes.content}>
                        <Typography  variant="h6">  <strong> الي : {this.state.details[0].to} </strong></Typography>
                        </Grid>

                        <Grid item xs={12}  className={classes.content}>
                        <Typography  variant="h6"><strong> نوع الشاحنة : {this.state.details[0].cartype} </strong> </Typography>
                        </Grid>

                        <Grid item xs={12}  className={classes.content}>
                        <Typography  variant="h6"> <strong> نوع الحمولة : {this.state.details[0].weighttype} </strong> </Typography>
                        </Grid>
                        
                        <Grid item xs={12} className={classes.content}>
                       <Typography  variant="h6"> <strong> وزن الحمولة : {` ${this.state.details[0].weight}  `}  </strong> </Typography>
                        </Grid>
                        
                        <Grid item xs={12} className={classes.content}>
                        <Typography  variant="h6"> <strong> الوقت : {this.state.details[0].time} </strong> </Typography>
                        </Grid>

                        <Grid item xs={12}  className={classes.content}>
                        <Typography  variant="h6"><strong>  ملاحظات : {this.state.details[0].notes}</strong> </Typography>
                        
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4} className={classes.header} > 
               
           
                <Grid container align="right" spacing={24} className={classes.container}>
                        <Grid item xs={12} sm={6} className={classes.header}>
                        <Typography variant="h4">تعديل البيانات</Typography>
                        </Grid>
                        
                        <Grid item xs={12}  className={classes.textfields}>
                            <TextField
                           
                                id="filled-number"
                                type="number"
                                label="الكارتة"
                                margin="normal"
                                
                                />
                        </Grid>

                        <Grid item xs={12}  className={classes.textfields}>
                                <TextField
                                id="filled-number"
                                type="number"
                                label="بيات"
                                margin="normal"  
                                />
                        </Grid>

                        <Grid item xs={12}  className={classes.textfields}>
                                <TextField
                                id="filled-number"
                                type="number"
                                label="تحويله"
                                margin="normal"  
                                />
                        </Grid>

                        <Grid item xs={12}  className={classes.textfields}>
                                <TextField
                                id="filled-number"
                                type="number"
                                label="المخالفات"
                                margin="normal"  
                                />
                        </Grid>

                        <Grid item xs={12}  className={classes.textfields}>
                                <TextField
                                id="filled-number"
                                type="number"
                                label="المعدية"
                                margin="normal"  
                                
                                />
                        </Grid>
                        
                        <Grid item xs={12}  className={classes.textfields}>
                                <TextField
                                id="filled-number"
                                type="number"
                                name="tonprice"
                                label="سعر الطن"
                                onChange={this.handleChange}
                                margin="normal"  
                                />
                        </Grid>

                        <Grid item xs={12}  className={classes.textfields}>
                                <TextField
                                id="filled-number"
                                type="number"
                                label="العهدة"
                                margin="normal"  
                                />
                        </Grid>

                        <Grid item xs={12}  className={classes.textfields}>
                                <TextField
                                id="filled-number"
                                type="number"
                                label="قيمة اشتراك البرنامج"
                                margin="normal"  
                                />
                        </Grid>

                        <Grid item xs={12}  className={classes.textfields}>
                                <TextField
                                id="filled-number"
                                type="number"
                                name="drivercost"  
                                label=" حساب السائق"
                                margin="normal"
                                onChange={this.handleChange}
                                />
                        </Grid>

                        <Grid item xs={12}  className={classes.textfields}>
                                <TextField
                                id="filled-number"
                                type="number"
                                label=" مصاريف تسويق"
                                margin="normal"  
                                />
                        </Grid>

                        <Grid item xs={12}  className={classes.textfields}>
                                <TextField
                                id="filled-number"
                                type="number"
                                label=" السعر الكلي"
                                margin="normal"  
                                />
                        </Grid>

                        <Grid item xs={12} className={classes.textfields}>
                             <TextField
                                id="filled-multiline-flexible"
                                multiline
                                rowsMax="4"
                                label="ملاحظات"
                                margin="normal"
                                />
                        </Grid>
                        <Grid item xs={12}  className={classes.content}>
                        <Button onClick={this.handleChange}variant="contained" className={classes.changeButton}>تعديل</Button>
                        </Grid>
                        
                    </Grid>
                    
                </Grid>
               
        </Grid>
        
    </div>
                )
            }
 }

 export default withStyles(styles) (Details)