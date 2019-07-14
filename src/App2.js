
/*import React,{Component} from 'react'
import Todos from './Todos'
import Add from './Add'
import Axios from 'axios';
import Pokeball from './download.jpg'
class App extends Component{
  
  state = {
    todos:[]
  }
  componentDidMount() {
    console.log("componenDidMount")

    Axios.get("https://jsonplaceholder.typicode.com/todos").then(res=>{
      this.setState({
        todos: res.data.slice(0,20)
      })
    })
}
componentWillMount() {
  console.log("componentWillMount")
}
  deletetodo= (id) => {
  const todos= this.state.todos.filter(todo=>
    {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }
  add =(todo)=>
   {
     todo.id = Math.random();
     let todos=[...this.state.todos, todo];
     this.setState({
       todos:todos
     })
   }
  render()
  {
    console.log("render")

    return(
      <div className="App">
       
       <h1>Todo's List</h1>
       <img src={Pokeball} alt="A"/>
       <Todos todos={this.state.todos} deletetodo={this.deletetodo}/>
      
       <Add add={this.add}/>
      
      </div>
    )
  }
}


export default App;
*/