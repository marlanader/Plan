import React from 'react'

const Child=(props)=>
{
    console.log(props.color)
    return(
        
        <div className="button">
            <button style={{backgroundColor:props.color ,width:100,height:200}} onClick={props.handleSubmit}>SUBMIT</button>
           
        </div>
        
       
    )
    
}

export default Child
 /* <form onSubmit={this.handleSubmit}>
               <div className="form1">
                   <label>Name:</label>
               <input type="text" name="name" onChange={this.handleChange} value ={this.state.name}/>
               
               
               <label >ID:</label>
               <input type="text" name="id" onChange={this.handleChange} value ={this.state.id}/>
               
               <label>Age:</label>
               <input type="text" name="age" onChange={this.handleChange} value ={this.state.age}/>
               
               <label>phonenumber:</label>
               <input type="text" name="phonenumber" onChange={this.handleChange} value ={this.state.phonenumber}/>
               
               <Child handleSubmit={this.handleSubmit} />
               
               {this.state.valid?<p>Valid</p>:<p>Invalid</p>}
               

               { this.state.show?<img src={Pokeball} alt="A"/>: null}
               </div>
               </form>
               
                <div>
                    {postsList}
                </div>
                <BrowserRouter>
                
                 <Route path="/:id" Component={Post}/>
                </BrowserRouter> */