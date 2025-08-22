import { useEffect, useState } from 'react'
import axios from "axios"



function App() {
  const [Id , setId] = useState(0) ; 
  function handleClick(e){
     setId(parseInt(e.target.textContent)) ; 
  }

  return (
      <div>
        <ButtonComponent onClick={handleClick}></ButtonComponent>
        <Todo id = {Id}></Todo>
      </div>      
  )
}

function Todo({id}){
       const [todos , setTodos] = useState([{}])
       
        useEffect(()=>{
          const fetchTodo = async()=>{
            const response = await axios.get(`https://dummy-json-server-a1.vercel.app/dummy-data-a101/${id}`)
            const todo_data = response.data ; 
            setTodos([todo_data]) ; 
          }
          fetchTodo() ; 
        } , [id])

    
        return (
          <>
            {
              todos.length === 1 && todos[0] == '' ? <h1>No todo Please Select ID</h1> : <div>
                <h4>Title : {todos[0].title}</h4>
                <h4>Description: {todos[0].description}</h4>
              </div>
            }
           
          </>
        )

}
function ButtonComponent({onClick}){
  return (
    <div>
      <button onClick={onClick}>1</button>
      <button onClick={onClick}>2</button>
      <button onClick={onClick}>3</button>
      <button onClick={onClick}>4</button>
      <button onClick={onClick}>5</button>
    </div>
  )
}

export default App
