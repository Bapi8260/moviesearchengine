import React from 'react'
import { useState } from 'react';
const Random = () => {
    const [data,setData]=useState({});       
fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=831a495e&page=1`).then(res=>res.json()).then(value1=>{
setData(value1);
console.log();

})
  return (
 
    <div>
        
      {
        data.map((s)=>{
            return(
            <div className='boxes'>
                <img src={s.Poster} alt=''></img>
                <div className='boxcon'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, alias?
                    </div>
                </div>
            )
        })
      }
      </div>
    
  )
}

export default Random
