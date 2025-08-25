import { useCallback } from 'react'
import { useState , memo} from 'react'


function App() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(()=>{
    console.log("child rendered")
  } , [count])

  return (
    <div>
        <Child InputFunction = {handleClick}/>
        <button onClick={()=>{
          setCount(count+1) ;
        }}>Click Me {count}</button>

    </div>
  )
}

const Child = memo(({InputFunction})=>{
  console.log("child render")
  return <div>
    <button onClick={InputFunction}>Button Clicked</button>
  </div>
})

export default App
