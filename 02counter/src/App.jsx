import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(10)

  //  let counter = 12

  const addValue = () =>{
    if (counter <=20)
    setCounter(counter+1)
    console.log("value added to", counter)
  }

  const diffValue = () =>{
    if (counter>0)
    setCounter(counter-1)
    console.log("value decreased to",counter)
  }
  return (
    <>
    <h1>Sammy & React</h1>
    <h2>Counter value: {counter}</h2>
    <button
    onClick = {addValue}
    >Add Value</button>
    
    <br/>
    <button
    onClick = {diffValue}
    >Remove Value</button>
    </>

  )
}

export default App
