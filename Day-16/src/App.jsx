import React, { useState } from 'react'

function App() {
  const [count , setCount ] = useState(0)
  const Increment = () => setCount(count+ 1)
  const Decrement = () => {
    if(count>1){
      setCount - 1
    }
  }
  const Reset = () => setCount(0)
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={Increment}> + </button>
      <button onClick={Decrement}> - </button>
      <button onClick={Reset}>Reset</button>      
    </div>
  )
}

export default App
