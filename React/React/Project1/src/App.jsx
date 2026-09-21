import React from 'react'
import Student1 from './components/Student1'

const App = () => {
  return (
    <div style={{margin:'auto'}}>
      <center>
        <h1>
          My Student Records
        </h1>
      </center>
      <div style={{display:'flex'}}>
        <Student1 />
        <br />
        <Student1 />
        <br />
        <Student1 />
        <br />
      </div>
    </div>
  )
}

export default App