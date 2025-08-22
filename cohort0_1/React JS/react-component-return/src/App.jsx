import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <Header title = "title1" desc = "description1"></Header>
        <Header title = {"This is title2"} desc={"description2"}></Header>
      </div>
      
  )
}
function Header({title , desc}){
  return (
  <header>
    <p>{title}</p>
    <p>{desc}</p>
  </header>

 )
  
}

//or 

// function Header(props){
//   return (
//   <header>
//     <p>{props.title}</p>
//     <p>{props.desc}</p>
//   </header>

//  )
  
// }

export default App
