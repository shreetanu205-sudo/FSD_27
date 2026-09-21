import React from 'react'

const Header = () => {
  return (
    <div>
      <div style={{backgroundColor:'blueviolet',width:'100%',height:'100px', display:'flex',justifyContent:'space-around',marginTop:'0px'}}>
        <img src="https://static.vecteezy.com/system/resources/previews/038/108/223/non_2x/hotel-icon-logo-design-template-vector.jpg" height="80px" width="80px" style={{borderRadius:'50%'}}></img>
        <h1 style={{color:'beige'}}>Home</h1>
        <h1 style={{color:'beige'}}>About us</h1>
      </div>
    </div>
  )
}

export default Header
