import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './nav.css'
const Nav = () => {
  const navigate=useNavigate();
  const [value,setValue]=useState();
  const result=(e)=>{
e.preventDefault();
navigate(`find/${value}`)
  }
  return (
    <div className='header'>
      <h2 className='heading'>Movies4u</h2>
      <form onSubmit={result}>
        <input type='search' onChange={(p)=>setValue(p.target.value)} placeholder='Enter movie name'></input>
      </form>
    </div>
  )
}

export default Nav
