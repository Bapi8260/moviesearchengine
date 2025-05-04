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
      <h2 className='heading'>Vegamovies</h2>
      <form onSubmit={result}>
        <input type='search' onChange={(p)=>setValue(p.target.value)} placeholder='Movie name'></input>
      </form>
    </div>
  )
}

export default Nav
