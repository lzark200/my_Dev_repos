import {BrowserRouter , Routes , Route , useNavigate} from 'react-router-dom'


import { Landing } from './components/Landing'
import { Dashboard } from './components/dashboard'
import { About } from './components/about'


function App() {


  return (
    <>
     <BrowserRouter>
      <Button></Button>  {/*use Navigate hook can be used inside the BrowserRouter only*/}
        <Routes>
          <Route path="/dashboard" element = {<Dashboard/>} />
          <Route path="/about" element = {<About/>}/>
          <Route path='/' element = {<Landing/>} />
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
        // window.location.href="/dashboard"  --> this does hard reload and conflicts client-side-routing
        navigate('/dashboard')

        console.log(window.location) ; 
     }}>Go to Dashboard</button>

     <button  style={{
      background:"black" , 
      color:"yellow" , 
      margin:5 , 
      padding:10
     }}  onClick={()=>{
        // window.location.href="/about"
        navigate('/about')
     }}>Go to About</button>
     
    </div>

  )
}

export default App
