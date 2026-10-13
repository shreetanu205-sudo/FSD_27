import React from 'react'
import { useState,useEffect } from 'react'

const App = () => {
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:''
  })

useEffect(()=>{
  console.log("form data uodate",{formData})
},[formData])

const handleSubmit=(e)=>{
  e.preventDefault();
  alert('Registration successful')
}

const handleChange=(e)=>{
  setFormData({
    ...formData,
    [e.target.name]:e.target.value,
    
  })
}
console.log(formData)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} />
        <br />
        <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
        <br />
        <input tyoe="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default App
