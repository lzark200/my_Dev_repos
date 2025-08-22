import { useMemo, useState } from 'react'


function App() 
{
  const [count, setCount] = useState(0)
  const [num , setNum] = useState(0)

  const handleChange = (e)=>{
    setNum(parseInt(e.target.value));
  }
  const handleClick = ()=>{
    setCount(count+1)
  }

  const value = useMemo(()=>{
    let cnt = 0 ; 
    for(let i = 1 ;i <= num ; i++ ){
      cnt+=i ; 
    }
    return cnt ; 
  } , [num]) ; 

  return (
    <div>
      <div>
        <input onChange={handleChange} type="number" name="" placeholder='Enter no. of terms' />
      </div>
      <div>
        Sum is {value}
      </div>
      <div>
        <button onClick={handleClick}>Counter {count}</button>
      </div>
     
    </div>
  )
}

export default App
