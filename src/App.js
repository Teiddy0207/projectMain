import React from 'react'
import "./App.css"
import Aution from "./Components/Aution/Aution"
import Navbar from './Components/Navbar/Navbar'
import Trending from './Components/Trending/Trending'
import Search from './Components/Search/Search'
import Home from './Components/Home/Home'
import Sellers from './Components/Sellers/Sellers'
import Review from './Components/Review/Review'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div className='title'>
 <Navbar/>
 <Home/>
 <Search/>
 <Trending/>
 <Sellers/>
 <Aution/>
 <Review/>
 <Footer/>
 
    </div>
  )
}

export default App;
