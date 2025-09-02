import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'


function App() {
  

  return (
  <div>
    <div>
      Hi this is the upper component This will not change the content below it will change using the client side routing
    </div>
    <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element = {<Dashboard/>} />
          <Route path="/" element = {<Landing/>} />
        </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
