import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (

      <div>
       <CardWrapper>
        <TextComponent/>
       </CardWrapper>
      </div>
  )
}

function TextComponent(){
  return <div>
    <h1 style={{
    background : "blue" , 
    color : "red" , 
  }}>Hi There</h1>
  </div>
}

function CardWrapper({children}){
  return (
    <div style={{background : "yellow" , border:"2px solid black"}}>
       {children}
    </div>
  )
}

export default App








/* This syntax we never use it is just for the concepts */

// import { useState } from 'react'


// function App() {
//   const [count, setCount] = useState(0)

//   return (

//       <div>
//        <CardWrapper InnerComponent={<TextComponent/>}></CardWrapper>
//       </div>
//   )
// }

// function TextComponent(){
//   return <div>
//     <h1 style={{
//     background : "blue" , 
//     color : "red" , 
//   }}>Hi There</h1>
//   </div>
// }
// function CardWrapper({InnerComponent}){
//   return (
//     <div style={{background : "yellow" , border:"2px solid black"}}>
//        {InnerComponent}
//     </div>
//   )
// }

// export default App
