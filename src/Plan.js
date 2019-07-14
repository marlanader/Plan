import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import { textAlign } from "@material-ui/system";
import { Button, AppBar } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Details from "./Details";
import { Route ,Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
const styles = {
    cardContainer: {
        width:'80%'
    },
    AppBar:{

        background:"black"
    },
    root: {
     height:500,
    },
    container:{
        padding:50,
        textAlign:'right',
        
    },
    view:{
        background:"#27ae60",
    },
    change:{
        background:"#27ae60",
       
    },
    add_driver:{
        background:"#c0392b",
    } ,
    done:{
        background:"#c0392b",
        margin:20
    },
    table : {
        width:'80%',
        margin:50
    },
    search:{
        background:"#c0392b",
        margin:30
    },
   driver_info:{
        margin:30
    },
    back:{
        marginRight:250
    },
    
    
    
}

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

class Plan extends Component
{
   
handleClickopenedit=()=>
{
    this.setState({
        openfullscreen:true
    })
}
handleCloseedit=()=>
{
    this.setState({
        openfullscreen:false
    })
}
 handleClickopen=()=>{
    
        this.setState({
          open:true
    })
    }
 handleClose=()=>{
        
        this.setState({
          open:false,
          view:false
        })
      }
 handleSearch=()=>{
    this.setState({
        view:true,
    })
 }

  state={
      plans:[{name:'Trukto',date:'1/7/2019',drivername:'',destination:'AUC',id:1},
      {name:'GUC',date:'9/5/2019',drivername:'Aly',destination:'New Cairo',id:2}],
      drivers:[{name:'Ahmed', phone:'012244667788'}],
      open:false,
      openfullscreen:false,
      view:false
  }
    
 render()
 {
    const {classes}=this.props;
return(
    
        <div dir="rtl" className={classes.cardContainer}>
           
    <Paper className={classes.root} >
        <Grid  className={classes.container} container spacing={24}>
            <Grid item xs={12} sm={3}>
                <Typography variant="h5" gutterBottom>
                    {this.state.plans[0].name}
                </Typography>
            </Grid>
            <Grid item  xs={12} sm={3}>
                <Typography  variant="h5" gutterBottom>
                {this.state.plans[0].date}
                </Typography>
            </Grid>
            <Grid item  xs={12} sm={4} align="left" >
                <Button className={classes.view} variant="contained">إظهار الشركة</Button>
                <Button className={classes.done} variant="contained">تم التعيين</Button>

            </Grid>
            
        </Grid>
        <Divider variant="middle"/>
        <Grid container spacing={16}>
            <Grid item xs={12} sm={3}>
            <Typography align="right" variant="h4" gutterBottom> الطلبات</Typography>

            </Grid>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow >  
                        <CustomTableCell align="right">من</CustomTableCell>
                        <CustomTableCell align="right">الي</CustomTableCell>
                        <CustomTableCell align="right">إسم السائق</CustomTableCell>
                        <CustomTableCell align="right"></CustomTableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody> 
                    {this.state.plans.map((plans,i) => (
                    <TableRow className={classes.row}>
                    <CustomTableCell align="right">{this.state.plans[i].name}</CustomTableCell>
                        <CustomTableCell align="right">{this.state.plans[i].destination}</CustomTableCell>
                            {this.state.plans[i].drivername==""?
                                <CustomTableCell align="right">
                                    <Button  onClick={this.handleClickopen}className={classes.add_driver} variant="contained">
                                        عين السائق
                                    </Button>
                                </CustomTableCell>
                                    :
                                    <CustomTableCell align="right"><Typography variant="h6" gutterBottom>
                                        {this.state.plans[i].drivername}</Typography>
                                    </CustomTableCell>
                            }  
                        <CustomTableCell align="right" > 
                        
                        <Link component={RouterLink} to={"/1/1"}>
                         
                            <Button onClick={this.handleClickopenedit}className={classes.change}> تعديل التفاصيل</Button>
                        </Link>
                        </CustomTableCell>       
                   </TableRow>
                    ))
                        }
                   </TableBody>
            </Table>
        </Grid>
    </Paper>
    <Dialog className={classes.dialog}
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">تعيين السائق</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        يمكنك تعيين السائق برقم التليفون
                        </DialogContentText>
                            <Button onClick={this.handleSearch}
                            variant="contained" className={classes.search}>
                             <SearchIcon />
                            </Button>
                            <TextField
                                id="standard-search"
                                label="رقم التليفون"
                                type="search"
                                name="phonenumber"
                                className={classes.textField}
                                margin="normal"
                            />
                            {this.state.view?
                            <div dir="rtl">
                                <Grid container className={classes.driver_info} spacing={24}>
                                <Grid item xs={3}>
                                { this.state.drivers[0].name}
                                </Grid>
                                <Grid item xs={5} >
                                {this.state.drivers[0].phone}
                                </Grid>
                                <Grid item xs={3} >
                                <Button variant="contained"> تعيين</Button>
                                </Grid> 
                                </Grid>
                            </div>:null
                            }
                    </DialogContent>
                    <DialogActions  >
                    <Button className={classes.back} onClick={this.handleClose}>
                                 رجوع
                             </Button>
                    </DialogActions>
    </Dialog>
    <Route  path="/:postid/:id" component={Details}/>
</div>
     )
 }
}



export default withStyles(styles) (Plan)