import { useState } from 'react'
import React from 'react'


let id_val = 1  

function App() {
  
  const [todos, setTodos] = useState([
    {
      id : 1 , 
      title : "Drink water" , 
      description : "Drinking water is good for health"
    } , 
  ])

  const onAddTodo = ()=>{
    const titleValue = document.getElementById('title').value ; 
    const descriptionValue = document.getElementById('description').value ; 

    id_val++ ; 
    setTodos([...todos , {
      id : id_val , 
      title : titleValue , 
      description : descriptionValue
    }])
  }

  return (
               
      <div>
        <Header></Header>
        <InputDesc></InputDesc>
        <AddTodo onClick={onAddTodo}></AddTodo>
        <ShowTodo todos = {todos}></ShowTodo>
      </div>
      
  )
}

const Header = React.memo(function Header(){
  return (
    <header>
      <h1>TODO LIST</h1>
    </header>
  )
})

const InputDesc = React.memo(function InputDesc(){
  return (
    <div>
     Title:<input id='title' type="text"  placeholder='Enter Title' style={{
      margin:10 , 
      padding : 5 
     }} />
     <br />
     Description:<input id='description' type="text" placeholder='enter description' style={{
      margin:10 , 
      padding : 5 
     }}/>
    </div>
  )
})


const AddTodo = React.memo(function AddTodo({onClick}){
  return (
    <button style={{
      margin:0 , 
      padding:5
    }} onClick={onClick}>Add Todo</button>
  )
})

const ShowTodo = React.memo(function ShowTodo({todos}){
  return (
   todos.map((todo)=>{
     return (
      <Todo key = {todo.id}  id = {todo.id} title = {todo.title} desc = {todo.description}></Todo>
     )
   })
  )

})

const Todo = React.memo(function Todo({id , title , desc}){
  return  (
    <div>
      <h3>id : {id}</h3>
      <h3>title : {title}</h3>
      <h3>description : {desc}</h3>
    </div>
  )
})

export default App
