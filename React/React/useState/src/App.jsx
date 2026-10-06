import React from 'react'
import Counter from './components/counter'
import { useState } from 'react';

const App = () => {
  const[count,setCount]=useState(0);
  function inc(){
    setCount(count+1)
  }

  function dec(){
    setCount(count-1)
  }
  return (
      <div style={{border:'2px solid white',height:'400px',width:'400px',margin:'auto'}}>
        <Counter />
        <center>
          <button onClick={inc}>ADD +</button>
          <br />
          <span>{count}</span>
          <br/>
          <button onClick={dec}>Subtract -</button>
        </center>
    </div>
  )
}

export default App
