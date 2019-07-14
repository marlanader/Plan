/*import React from 'react'

const Todos=({todos,deletetodo})=>
{
    const todolist= todos.length ?  (todos.map(todo => {
        return(
          <div className="collection-item" key={todo.id}>
              <div className="Parent">
                <span className="t" >{todo.title}</span>
                <button className="b" onClick={() => {deletetodo(todo.id)}}>Delete</button>
              </div>
             
          </div>
        )
    })) : (<p>you have no todos</p>)
    return(
        <div className="todos collection">
        {todolist}
        </div>
    )
}
export default Todos*/