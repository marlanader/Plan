import React,{Component} from 'react'
//import Button from './Child'
import Pokeball from './download.jpg'
import Axios from 'axios';
import Post from './Post'
import { Link } from 'react-router-dom'
import { Route, BrowserRouter } from 'react-router-dom'
import {Button,TextField} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const styles=theme=>({
  
progress:{
    backgroundColor:"red" 
},
});
    
 
class Parent extends Component
{

   /* state={
        name:'',
        email:'',
        password:'',
        read:'',
        valid:false,
       
    }*/
    
 /*   componentDidMount() {
     
        Axios.get('https://jsonplaceholder.typicode.com/posts/').then(res=>{
         
          
          this.setState({
              posts:res.data.slice(0,10)
          })
        })
    }*/

    /*handleChange=(e)=>{
        console.log(e.target)
        this.setState({
            [e.target.name]: e.target.value,
            
        })
    }

    handleSubmit=(e)=>{
       e.preventDefault();
       this.setState({
          valid: true
       })
        setTimeout(()=>this.setState({
            show:!this.state.show,
           
        }),3000)

        
               this.validate();
       console.log(this.state)*/
       
    

  /*  validate=()=>{
        if(this.state.name==""||
         this.state.age=="" ||
        this.state.phonenumber=="" || 
        this.state.id==""){this.setState({
            valid:false
        })
    } else {
        this.setState({
            valid:true
        })

    }
        }*/

    
  /*  delete=()=>{
        this.setState({
           posts:[]
        })
    }*/
    
   
      
     /*  console.log(this.state)
        const {posts}=this.state
        const postsList=posts.length?(posts.map(post=>{
            return(
                <div className="post card" key={post.id}>
                  <div className="card-content">
                    <Link to={`/${post.id}`}>
                      <span className="card-title red-text">{post.title}</span>
                    </Link>
                    <p>{post.body}</p>
                  </div>
                </div>
              )
            })
          ) 
                : (
            <div className="center">No posts to show</div>
          );*/
         
          state={
            email:'',
            password:'',
            valid:'',
            show:false,
            posts:[] ,
            arr:[" "]
          }
          
          componentDidMount() {
     
            Axios.get('https://jsonplaceholder.typicode.com/posts/').then(res=>{
              this.setState({
                  posts:res.data.slice(0,10)
              })
            })
        }
         
        add=()=>
        {
          this.setState({
            arr:[...this.state.arr," "]
          })
          
        }
          handleChange=(e)=>
          {
            this.setState({
              [e.target.name]: e.target.value,
            })
          }

          handleSubmit=(e)=>{
            e.preventDefault();
            if (this.state.password=="marla")
            {
            this.setState({
               valid: true
            })
          }
          else{
            this.setState({
              valid: false
           })
          }
          setTimeout(()=>this.setState({
            show:!this.state.show,
           
        }),2000)
 
            }
          render()
          {
            const { classes } = this.props;
            console.log(this.props)
            const postsList=this.state.posts.length?(this.state.posts.map(post=>{
              return(
                        <span>{post.title}</span>
                )
              })):null
  
        return(    
            <div>
             
                <AppBar position="static">
                  <Toolbar>
                  <Typography  variant="h6" color="inherit" noWrap>
                  Material-UI
                  </Typography>
                  </Toolbar>
                </AppBar>
                <Grid container className="Container" spacing={16}>
                  <Grid item sm={6} >
                    <Paper className="paper1">
                      <img className="img" src={Pokeball}></img>
                      </Paper>
                  </Grid>
                  
                  <Grid item sm={6}>
                    <Paper className="paper">
                  
                    {this.state.arr.map((a)=>{
                  return(
                    <Grid container spacing={16} justify="center">
                    <TextField
                      id="outlined-email-input"
                      label="Email"
                      onChange={this.handleChange}
                      type="email"
                      name="email"
                      autoComplete="email"
                      margin="normal"
                      variant="outlined"
                    />
                   </Grid>
                  );
                  
                })}
                   {this.state.arr.map((a)=>{
                     return(
                    <Grid container spacing={16} justify="center">
                      <TextField
                      className="pass"
                      onChange={this.handleChange}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                      /> 
                    </Grid>
                     );
                   })}
                    
                   <Grid container spacing={16} justify="center">
                    <Button className={classes.progress} onClick={this.handleSubmit} variant="contained" >
                    Login
                    </Button>
                    </Grid>
                    <Button className={classes.progress} onClick={this.add} variant="cointained"> Add</Button>
                    
                {this.state.valid && this.state.show && <CircularProgress color="secondary" />}
                {!this.state.valid && this.state.show && <p>Invalid</p>}
                </Paper>
                </Grid>
                  </Grid>
                
                {this.state.valid &&<div> {postsList}</div>}
                
                
          </div>
        
        )
          }
          }

export default withStyles(styles)(Parent)
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

let id = 0;
function createData(name, ID, email) {
  id += 1;
  return { id, name, ID,email};
}

class newApp extends Component{
  

  state={
    open:false,
    name:'',
    ID:'',
    email:'',
    rows:[createData('Marla','90055','internfrontend@trukto.com')]
  };
  handleChange=(e)=>
  { 
    e.preventDefault();
    this.setState({
      
    [e.target.name]: e.target.value,
  })
  }
  handleClickopen=()=>{
    
   this.setState({
     open:true
   })

  }
  handleAdd=(e)=>{

    e.preventDefault();
    if (this.state.name!=="" && this.state.ID!=="" && this.state.email!=="")
  {   
    this.setState({
      rows:[...this.state.rows,createData(this.state.name,this.state.ID,this.state.email)],
    })
    this.state.name=""
    this.state.ID=""
    this.state.email=""
  }
 
  this.handleClose()
  }

  handleClose=()=>{
    
  this.setState({
    open:false,
  })
}
  

  handleDelete=(idx)=>
  {
    let newArray=this.state.rows.filter((r,i)=> i != idx)
    console.log(newArray);
    this.setState({
      rows:newArray,
    })
  }
    render(){
return (
  <div>
  <Paper >
    <Table >
      <TableHead className="Header">      
        <TableRow>
          <TableCell><em><strong>Name</strong> </em></TableCell>
          <TableCell><em><strong>ID</strong> </em></TableCell>
          <TableCell><em><strong>Email</strong></em></TableCell>
        </TableRow>
      </TableHead>
         
        <TableBody>
        {this.state.rows.map((row,i) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">{row.name} </TableCell>
            <TableCell align="left">{row.ID}</TableCell>
            <TableCell align="left">{row.email} </TableCell>
            <TableCell>
              <Button onClick={()=>this.handleDelete(i)} color="primary" variant="contained">Delete
              </Button>
            </TableCell>  
           </TableRow>
           ))
        }
        </TableBody> 
    </Table>
  </Paper>
       <Button onClick={this.handleClickopen}variant="contained"> Add </Button>
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title">

            <DialogTitle id="alert-dialog-title">More Details</DialogTitle>
            <DialogContent>
              
                
                <TextField
                onChange={this.handleChange}
                id="name"
                label="Name"
                type="name"
                name="name"
                margin="normal"
                 /><br/>

               <TextField
                onChange={this.handleChange}
                margin="normal"
                id="ID"
                name="ID"
                label="ID"
                type="ID"
              /><br/>

               <TextField
                  onChange={this.handleChange}
                  id="outlined-email-input"
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                />
             
            </DialogContent>
          <DialogActions>
            <Button onClick={this.handleAdd} color="primary">
            Done
            </Button>
          </DialogActions>
      </Dialog>
</div> 
);

} 
}
export default newApp