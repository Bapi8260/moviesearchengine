import React, {  useState } from 'react'
import { useParams } from 'react-router-dom'
import './movie.css'
const Movie = () => {
    const {id}=useParams();
    const [result,setResult]=useState([]);
		             
           
fetch(`https://www.omdbapi.com/?&apikey=831a495e&i=${id}`).then(res=>res.json()).then(value=>{
  console.log(result);
setResult(value);

})
  return (
    <div className='con3'>
      <div className='items'>
      <img src={result.Poster} alt=''></img>
      <div className='content11' >
       <span style={{color:"white"}}>Title:</span> <span style={{color:"white",fontFamily:"italic"}}>{result.Title}</span><br></br>
       <span style={{color:"white"}}>Actors:</span> <span style={{color:"white",fontFamily:"italic"}}>{result.Actors}</span><br></br>
        <span style={{color:"white"}}>Directors:</span><span style={{color:"white",fontFamily:"italic"}}>{result.Director}</span><br></br>
       <span style={{color:"white"}}>Languages:</span> <span style={{color:"white",fontFamily:"italic"}}>{result.Language}</span><br></br>
       <span style={{color:"white"}}>Released Date:</span> <span style={{color:"white",fontFamily:"italic"}}>{result.Released}</span><br></br>
       <span style={{color:"white"}}>Box-office Collection:</span> <span style={{color:"white",fontFamily:"italic"}}>{result.BoxOffice}</span><br></br>
       <div className='content12'>
       <span><u style={{color:"red",marginLeft:"130px"}}>Download Now</u></span><br></br>
       <span style={{color:"blue",marginLeft:"100px",marginTop:"30px"}}>480p  (520mb)</span><br></br>
       <span style={{color:"blue",marginLeft:"100px",marginTop:"30px"}}>780p (800mb)</span><br></br>
       <span style={{color:"blue",marginLeft:"100px",marginTop:"30px"}}>1080p (1.5GB)</span><br></br>
       <span style={{color:"blue",marginLeft:"100px",marginTop:"30px"}}>HQ quality  (11.2GB)</span>
       </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
