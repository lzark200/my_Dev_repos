import React, { useCallback } from 'react'
import { useState } from 'react'


function App() {

  return (
    
    <>
       <Header></Header>
       <SubApp></SubApp>
       <Footer></Footer>
    </>
  )
}

function Header(){
  return (
    <header><h1>REACT NON-RENDERING COMPONENT</h1></header>
  )
}
function Footer(){
  return (
    <footer><h1>REACT NON-RENDERING COMPONENT</h1></footer>
  )
}

const Button = React.memo(function Button({onClick}){
  return (
    <button onClick={onClick}>Click me to update the value</button>
  )
})

const ValueComponent = React.memo(function ValueComponent({value}){
  return (
    <strong>{value}</strong>
  )
})


function SubApp(){

  return (
    <div>
      <ParagraphComponent></ParagraphComponent>
    </div>
  )
  

  function ParagraphComponent(){
    const [value , setValue] = useState("Harikirat") ; 
    const changevalue = useCallback(()=>{
      setValue(Math.random()) ; 
    } , [])
    
    return (
      <>
        <Button onClick = {changevalue} ></Button>
        <p>The value of the title is <ValueComponent value = {value}></ValueComponent></p>
      </>
    )
    
  }
  
}



export default App




//❌❌❌❌❌❌❌❌❌ very bad code renders each and every component ❌❌❌❌❌❌❌❌ 


// import { useState } from 'react'


// function App() {
//   const [value, setValue] = useState("harikirat")
  
  
//   return (
    
//     <div>
        
//         <ChangeButton value = {value} setValue = {setValue}></ChangeButton>
//         <RenderValue value = {value}></RenderValue>
//         <Header title = "harman"></Header>
//         <Header title = "harman"></Header>
//         <Header title = "harman"></Header>
//         <Header title = "harman"></Header>
//         <Header title = "harman"></Header>
//         <Header title = "harman"></Header>
//         <Header title = "harman"></Header>

//       </div>
//   )
// }
// function Header({title}){
//   return (
//     <header>
//     <p>This is {title}</p>
//   </header>

// )}

// function RenderValue({value}){

//   return (
//     <p>This is <strong>{value}</strong></p>
//   )
// }

// function ChangeButton(props)
// {
//   function changeValue(){
//     props.setValue(Math.random(0 , 1)) ; 
//   }
//   return (
//     <button onClick={changeValue}>Click me to change the title value</button>
//   )
// }

// export default App
