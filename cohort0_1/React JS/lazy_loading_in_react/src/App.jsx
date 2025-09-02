import {BrowserRouter , Routes , Route , useNavigate} from 'react-router-dom'
import React , {Suspense} from 'react'
const Landing  = React.lazy(()=>import('./components/Landing')) ; 

const Dashboard = React.lazy(()=>import("./components/Dashboard")) ; 
const About = React.lazy(()=>import("./components/About")) ; 



function App() {


  return (
    <>
     <BrowserRouter>
      <Button></Button> 
        <Routes>
          <Route path="/dashboard" element = {<Suspense fallback="loading..."><Dashboard/></Suspense>} />
          <Route path="/about" element = {<Suspense fallback="loading..."><About/></Suspense>}/>
          <Route path='/' element = {<Suspense fallback="loading..."><Landing/></Suspense>} />
        </Routes>
    </BrowserRouter>
    
    </>
  )
}
function Button(){
  const navigate = useNavigate() ; 

  return (
    <div style={{
      background:"yellow" , 
      border:"2px solid black",
      padding:5
    }} > 
     <button  style={{
      background:"black" , 
      color:"yellow" , 
      margin:5 , 
      padding:10
     }}  onClick={()=>{
        navigate('/dashboard')

     }}>Go to Dashboard</button>

     <button  style={{
      background:"black" , 
      color:"yellow" , 
      margin:5 , 
      padding:10
     }}  onClick={()=>{
        navigate('/about')
     }}>Go to About</button>
     
    </div>

  )
}

export default App
