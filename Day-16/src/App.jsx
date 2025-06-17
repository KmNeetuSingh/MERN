import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const Increment = () => setCount (count + 1)
  const Decerement = () => {
    if(count>1){
      setCount (count - 1)
    }
  }
  const Reset = () =>setCount(0)
  
  return (
  <>
<h1>Counter : {count}</h1>
<button onClick={Increment}>+</button>
<button onClick={Decerement}> - </button>
<button onClick = {Reset}> Reset</button>

  </>
  )
}

export default App
