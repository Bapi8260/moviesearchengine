import React, {  useState } from 'react'
import"/node_modules/bootstrap/dist/css/bootstrap.min.css";
import"/node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import { useParams,Link } from 'react-router-dom';
import './find.css'
import Error from './Error'
const Find =  () => {
	
	     const [data,setData]=useState([]);
		             
			      const {search}=useParams();          
			fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=831a495e&s=${search}`).then(res=>res.json()).then(value=>{
				console.log(value);
		setData(value.Search);
		
			})
		 
        

  return (
	<>
	
	  {
		
		data!=null?(<div className='con2'>
			{
	data.map((p)=>{
		return(
		
<Link to={`/movie/${p.imdbID}`}>
			<div className="col">
			<div className="card mt-50">
	<img src={p.Poster} className="card-img-top" alt="..."/>
	<div className="card-body">
	<h5 className="card-title">{p.Title}</h5>

	
	</div>
	</div>
	</div>
	</Link>
		)
	})
			}
		</div>):(<Error/>)
	
	  }
	
</>
  )

}
export default Find
