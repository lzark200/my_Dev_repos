import { useState } from 'react'




function App() 
{
  const [addCnt , setAddCnt] = useState(1) ; 

  const [todos, setTodos] = useState([{
    title : "go to gym" , 
    description : "go to gym from 7-9" , 
    completed : false
  } , 
  {
    title : "study DSA" , 
    description : "study dsa from 9-100" , 
    completed : true
  } , 
  {
    title : "Running" , 
    description : "Running from 4-5" , 
    completed : false
  } , 
  {
    title : "guitar practice" , 
    description : "practice guitar from 9-10" , 
    completed : false
  } , 
 
])

function addTodo(){
  setTodos([...todos , {
    title : `new todo no : ${addCnt} added`, 
    description : "new Todo added" , 
    completed : false
  }])
  setAddCnt(addCnt+1) ; 
}


  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {/* <Todo title={todos[0].title} description={todos[0].description} completed = {todos[0].completed}></Todo> */}
      {todos.map((todo)=>{
        return <Todo title = {todo.title} description = {String(todo.description)} completed = {todo.completed}></Todo>
      })}
    </div>
  )
}

// child component
function Todo(props){
  console.log(props) ; 
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h2>{props.completed}</h2>
    </div>
  )
}

export default App
