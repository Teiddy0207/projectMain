import React  from 'react'
import './Home.css'
import honda from '../../Access/honda.png'

const  Home = () => {
  
  
  
  
  
  
  return (
    <div className='home' >
      <div className="secContainer">
        <div className="homeText">
          <span className="homeSpan">
Meet your new car
          </span>
          <h1 className='homeTitle'>
Honda Civic
          </h1>
          <div className="btn-flex">
            <button className="btn">More Details</button>
            <button className="btn-primaryBtn">Test Drive</button>
          </div>
        </div>
        <div className="homeImage">
          <img src={honda} alt="honda"  />
        </div>
      </div>

    </div>
  )
}

export default Home