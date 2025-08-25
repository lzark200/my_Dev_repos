import { useState , memo, useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)

  let x = 5 ; // In the each render the reference of the variable like string , int , boolean etc does not change so even it will not render again props are the same.

  let a  = useCallback(()=>{ // function reference also changes after the each render
    return a ; 
  } , [])

  let b = {   // objects reference  also changes after the each render so we can wrap it inside the useCallBack
    x : "sam", 
    y : "tis"
  }

  // wrapped in the useCallBack
  let c = useCallback(()=>{
    return {x : "sam" , y:"tis"}
  } , [count])

  return (
    <>
      <Button count = {count} setCount={setCount}></Button>
      <Render a = {a}></Render>
      <Render2 b = {b}></Render2>
      <Render3 c = {c}></Render3>
      <Render4 x = {x}></Render4>
    </>
  )
}

function Button({count , setCount}){
  return (
    <button onClick={()=>{setCount(count+1)}}>
      Counter {count} 
    </button>
  )
}
const Render = memo(function Render({a}){
  console.log('Inner Content is rendered again in the part render 1')
  return (<div style={{
    border: "2px solid red",
    background:"yellow" , 
    color : "black" , 
    height : "50" , 
    width : "120px",
    marginTop : "5px" , 
  }}>
    Inside Content {a()}
  </div>)
}) ; 

const Render2 = memo(function Render({b}){
  console.log('Inner Content is rendered again in part render2')
  return (<div style={{
    border: "2px solid red",
    background:"yellow" , 
    color : "black" , 
    height : "50" , 
    width : "140px",
    marginTop : "5px" , 
  }}>
    Inside Content {b['x']}
  </div>)
}) ; 

const Render3 = memo(function Render({c}){
  console.log('Inner Content is rendered again in part render 3')
  return (<div style={{
    border: "2px solid red",
    background:"yellow" , 
    color : "black" , 
    height : "50" , 
    width : "140px",
    marginTop : "5px" , 
  }}>
    Inside Content {c()['y']}
  </div>)
}) ; 

const Render4 = memo(function Render({x}){
  console.log('Inner Content is rendered again in part render 4')
  return (<div style={{
    border: "2px solid red",
    background:"yellow" , 
    color : "black" , 
    height : "50" , 
    width : "140px",
    marginTop : "5px" , 
  }}>
    Inside Content {x}
  </div>)
}) ; 

export default App
