import { useState , useContext } from 'react'
import { CountContext } from './Context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountContext.Provider value={{count , setCount}}>
        <Count/>  
      </CountContext.Provider>
    </>
  )
}

function Count(){
  return (
    <div>
      <RenderCount></RenderCount>
      <Buttons/>
    </div>
  )
}
function RenderCount(){
  const {count} = useContext(CountContext)
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}
function Buttons(){
  const {count , setCount}= useContext(CountContext)
  return (
    <div>

      <button onClick={()=>{
        setCount(count+1); 
      }} style={{
          padding:15 , 
          background:"black" ,
          color : "yellow"
      }}><strong>+</strong></button>

      <button onClick={()=>{
        setCount(count-1)
      }} style={{
        padding : 15,
        background:"#fa46af" , 
        color:"blue"
      }}><strong>-</strong></button>

    </div>
  )
}

export default App


// This code is the example of the prop-drilling which makes the code non-manageable , 
// Ths is code is without the use of the contextApi 

// import { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Count count={count} setCount={setCount}/>
//     </>
//   )
// }

// function Count({count , setCount}){
//   return (
//     <div>
//       <h1>{count}</h1>
//       <Buttons count={count} setCount={setCount}/>
//       <RenderCount count={count}></RenderCount>
//     </div>
//   )
// }
// function RenderCount({count}){
//   return (
//     <div>
//       {count}
//     </div>
//   )
// }
// function Buttons({count , setCount}){
//   return (
//     <div>

//       <button onClick={()=>{
//         setCount(count+1); 
//       }} style={{
//           padding:15 , 
//           background:"black" ,
//           color : "yellow"
//       }}><strong>+</strong></button>

//       <button onClick={()=>{
//         setCount(count-1)
//       }} style={{
//         padding : 15,
//         background:"#fa46af" , 
//         color:"blue"
//       }}><strong>-</strong></button>

//     </div>
//   )
// }

// export default App
