import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [num , setNum] = useState(0)
  const [result , setResult] = useState(0)

  return (

      <div>
        <CustomButton count = {count} setCount = {setCount}></CustomButton>
        <CustomButton count = {num*2} setCount = {setNum}></CustomButton>
        <CustomButton count = {result+num+count} setCount = {setResult}></CustomButton>
       
      </div>
    )
}

function CustomButton(props){
  console.log(props) ; 
  function onClickHandler(){
    props.setCount(props.count + 1) ; 
  }

  return (<button onClick={onClickHandler}>
    Counter {props.count}
  </button>)
}

export default App
