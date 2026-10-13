import React from 'react'
import { useState } from 'react'

const Resize = () => {
    const [Row,setRow]=useState(100);
    const [Col,setCol]=useState(100);

    const Change=10

    function RowInc(){
        setRow(Row+Change)
    }
    function RowDec(){
        setRow(Row-Change)
    }
    function ColInc(){
        setCol(Col+Change)
    }
    function ColDec(){
        setCol(Col-Change)
    }
  return (
    <div style={{width:'600px',height:'600px',border:'2px solid white'}}>
        <img src="https://images.pexels.com/photos/31256342/pexels-photo-31256342.jpeg?cs=srgb&dl=pexels-optical-chemist-340351297-31256342.jpg&fm=jpg" style={{width:`${Col}px`,height:`${Row}px`}}></img>

        <button onClick={RowInc}>Row + 1</button>
        <button onClick={RowDec}>Row - 1</button>
        <button onClick={ColInc}>Column + 1</button>
        <button onClick={ColDec}>Column -1</button>

    </div>
  )
}

export default Resize;
