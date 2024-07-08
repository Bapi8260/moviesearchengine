import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Find from './component/Find'
import Nav from './component/Nav'
import Movie from './component/Movie'
import Home from './component/Home'
import Footer from './component/Footer'
function App() {
  return (
   <>
   <BrowserRouter>
   <Nav/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/find/:search" element={<Find/>}/>
   <Route path="/movie/:id" element={<Movie/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  );
}

export default App;
