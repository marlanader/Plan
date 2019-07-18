import React,{Component} from "react"
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { Button, Typography } from "@material-ui/core";
import { isNumber } from "util";
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
 
    formControl:{
        width:"15%",
        padding:20
    }
})



class FormValidation extends Component{
 
    
    state={
        name:"",
        phone:"",
        email:"",
        companyprice:"",
        driverprice:"",
        city:"",
        validate:true,
        errors:{nameErr:'',phoneErr:'',emailErr:'',companyErr:'',driverErr:'',cityErr:''},
        show:false,
        showtext:false,
        checkvalidate:false

    }
    handleChange=(e)=>{

       
        this.setState({
            [e.target.name]: e.target.value,
        })
    
    }
   
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({
            show:true, 
        })

         let err = this.state.errors;
           
      
         (/^[a-z]*$/gi).test(this.state.name)? err.nameErr="" : err.nameErr="Name should be letters only";
         (/^\+2\d{11}/g).test(this.state.phone)?err.phoneErr="":err.phoneErr="Incorrect Phone Number" ;
         (/.+@{1}[a-z]+\.+[a-z]+/g).test(this.state.email)?err.emailErr="":err.emailErr="Incorrect Email";
         this.state.companyprice<0 ||this.state.companyprice==="" ?err.companyErr="Company Price should be a number greater than zero":err.companyErr="";
         this.state.driverprice<0 ||this.state.companyprice==="" ? err.driverErr="Driver Price should be a number greater than zero": err.driverErr="";
         this.state.city===""? err.cityErr="Please choose a city": err.cityErr="";
         
       this.setState({errors:err})
       setTimeout(()=>this.setState({
        show:false,
    }),2000)
     if (err.cityErr==="" && err.companyErr==="" && err.emailErr==="" && err.phoneErr===""&& err.driverErr==="" && err.nameErr==="")
     {
         this.setState({
             checkvalidate:true
         })
     }
     setTimeout(()=>this.setState({
        showtext:!this.state.showtext,
       
    }),2000)
    }
    
    render()
    {
        const {classes}=this.props;
        console.log(this.state);
        return(
        <div>
          
                    <TextField
                    
                    id="outlined-name"
                    label="Name"
                    className={classes.textField}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    name="name"
                    />
                    <h6>{this.state.errors.nameErr}</h6>
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        className={classes.textField}
                        onChange={this.handleChange}
                      
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                    /><h6>{this.state.errors.emailErr}</h6>
                    
                    <TextField
                        id="outlined-phone-number"
                        label="Phonenumber"
                        className={classes.textField}
                        onChange={this.handleChange}
                        name="phone"
                        margin="normal"
                        variant="outlined"
                    />
                    <h6>{this.state.errors.phoneErr}</h6>
                     <TextField
                        id="outlined-number"
                        label="سعر السائق"
                        className={classes.textField}
                        onChange={this.handleChange}
                        name="driverprice"
                        margin="normal"
                        variant="outlined"
                        type="number"
                    /><h6>{this.state.errors.driverErr}</h6>
                    <TextField
                        id="outlined-number"
                        label="سعر الشركة"
                        className={classes.textField}
                        onChange={this.handleChange}  
                        name="companyprice"
                        margin="normal"
                        variant="outlined"
                        type="number"
                    /> <h6>{this.state.errors.companyErr}</h6>
                   
                    <FormControl className={classes.formControl}>
                    <InputLabel >المدينة</InputLabel>
                    <Select
                        value={this.state.city}
                        onChange={this.handleChange}
                        inputProps={{
                        name: 'city',
                        id: 'city'
                        }}
                    >
                        <MenuItem value="القاهرة">القاهرة</MenuItem>
                        <MenuItem value="الجيزة">الجيزة</MenuItem>
                        <MenuItem value="الاسكندرية">الاسكندرية</MenuItem>
                    </Select>
                    </FormControl><br/><h6>{this.state.errors.cityErr}</h6>
                    <br/>

                    <Button variant="contained" onClick={(e)=>this.handleSubmit(e)} >SUBMIT</Button><br/>
                  {  this.state.show?<CircularProgress color="secondary" />:null}
                   {this.state.checkvalidate && this.state.showtext&&<h6>Valid</h6>}         
                   {!this.state.checkvalidate  && this.state.showtext &&<h6>Invalid</h6>}
        </div>
        )
    }
}

export default withStyles(styles)(FormValidation)