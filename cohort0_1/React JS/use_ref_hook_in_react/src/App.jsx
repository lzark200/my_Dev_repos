import { useEffect } from 'react'
import { useState } from 'react'
import {useRef} from 'react'


function App() {
  const [IncomeTax, setIncomeTax] = useState(20000)
  const divRef = useRef() ; 
  useEffect(()=>{
    setTimeout(()=>{
       divRef.current.innerHTML = 10 ; 
    } , 5000)
  } , [])

  return (
    <>
        hi there, your income tax returns are <div ref={divRef}>{IncomeTax}</div>
    </>
  )
}

export default App



/*This could be a possible technique of doing the DOM manipulation but it's not the right way*/

// import { useEffect } from 'react'
// import { useState } from 'react'


// function App() {
//   const [IncomeTax, setIncomeTax] = useState(20000)
//   useEffect(()=>{
//     setTimeout(()=>{
//       document.getElementById("IncomeTaxCollection").innerHTML = 10 ; 
//     } , 5000)
//   } , [])

//   return (
//     <>
//       <div>
//         hi there, your income tax returns are <div id='IncomeTaxCollection'>{IncomeTax}</div>
//       </div>
//     </>
//   )
// }

// export default App
