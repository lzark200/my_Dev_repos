import { useState , memo  , useEffect} from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log("counter is incremented.")
  } , [count])

  return (
    <>
      <Button cnt = {count} scnt = {setCount}></Button>
    </>
  )
}

const Button = memo(({cnt , scnt})=>{
  return (
    <div>
      <button onClick={()=>{scnt(cnt+1)}}>Counter {cnt}</button>
    </div>
  )
})

export default App
