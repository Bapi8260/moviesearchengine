import React from 'react'
import './Home.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
   return(
    <div className='con1'>
    <div className='con'>
     <Carousel responsive={responsive}  draggable={true} showDots={true} swipable={true}>
  <div className='image'><img src='https://i.pinimg.com/originals/75/9a/da/759ada441e2ff50297dfa8ccb35744b8.jpg'></img>
  </div>
  <div className='image'><img src='https://picfiles.alphacoders.com/214/thumb-1920-214533.jpg'></img></div>
  <div className='image'><img src='https://www.themoviedb.org/t/p/original/ngUaHgSZGkKy1Izwjk7qwZLOC5A.jpg'></img></div>
  <div className='image'><img src='	https://i.pinimg.com/originals/8b/90/a0/8b90a0fa27306cbb9f9ce63d8e53dbc0.jpg'></img></div>
  <div className='image'><img src='	https://i.etsystatic.com/22575919/r/il/dc33c7/3338645757/il_1588xN.3338645757_mykw.jpg'></img></div>
  <div className='image'><img src='https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2023/07/Salaar-Poster.jpg'></img></div>
  <div className='image'><img src='https://stat1.bollywoodhungama.in/wp-content/uploads/2021/07/Pushpa-4.jpg'></img></div>
  <div className='image'><img src='	https://myimg.click/images/2022/05/16/KGF-CHAPTER-2-2022-Hindi-ORG-WEBRip-Full-Movie.jpg '></img></div>
  <div className='image'><img src=' 	https://assets-prd.ignimgs.com/2022/07/11/rrr-button-ver-1657577923010.jpg'></img></div>
  <div className='image'><img src='https://wallpapercave.com/wp/wp5784421.jpg '></img></div>
  <div className='image'><img src='https://media.senscritique.com/media/000018645309/source_big/Fast_Furious_Hobbs_Shaw.jpg'></img></div>
  <div className='image'><img src='https://picfiles.alphacoders.com/253/253877.jpg '></img></div>
  <div className='image'><img src=' https://www.themoviedb.org/t/p/original/c0VpT2UiEEwd5vODup31WfXenzb.jpg'></img></div>
  
</Carousel>

    </div>
    <div className='plansection'>
      <div className='text'>
        <span style={{color:"white"}}>Hdhub4u</span><span style={{color:"red"}}> Membership Plan</span>
      </div>
      <div className='mainpart'>
        <div className='planbox'>
         <div className='title'>
          FREE
         </div>
         <div className='price'>
          <span style={{fontSize:"2.2rem"}}>$0</span><span style={{fontSize:"0.8rem"}}>/Month</span>
         </div>
         <div className='start'>
          GET STARTED
         </div>
        </div>
        <div className='planbox'>
         <div className='title'>
          ELITE
         </div>
         <div className='price'>
          <span style={{fontSize:"2.2rem"}}>$7</span><span style={{fontSize:"0.8rem"}}>/Month</span>
         </div>
         <div className='start'>
          GET STARTED
         </div>
        </div>
        <div className='planbox'>
         <div className='title'>
          PRO
         </div>
         <div className='price'>
          <span style={{fontSize:"2.2rem"}}>$12</span><span style={{fontSize:"0.8rem"}}>/Month</span>
         </div>
         <div className='start'>
          GET STARTED
         </div>
        </div>
      
      </div>
    </div>
  
    </div>
   )
  
}

export default Home
