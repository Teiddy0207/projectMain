import React from 'react'
import './Sellers.css'
import seller01 from "../../Access/seller01.png"
import seller2 from "../../Access/seller2.png"
import seller3 from "../../Access/seller3.png"
import seller4 from "../../Access/seller4.png"


const Sellers = () => {
  return (
    <div className='sellers section' >
      <div className="secContainer container">
        <div className="secHeading gird">
          <h3 className="sectitle">
            Explore top sellers in town
          </h3>

          <p>Joseph Samuel Girard Holds the Guinness World Record for being the
            greatest salesman in the world.
          </p>


        </div>
        <div className="sellersContainer">
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={seller01} alt="" className='img'></img>
            </div>
            <span className="info">
              <h4 className='name'>
                Toyota
              </h4>
              <p>from $40k</p>
            </span>
          </div>
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={seller2} alt="" className='img'></img>
            </div>
            <span className="info">
              <h4 className='name'>
                Mercedes
              </h4>
              <p>from $40k</p>
            </span>
          </div>
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={seller3} alt="" className='img'></img>
            </div>
            <span className="info">
              <h4 className='name'>
              volkswagen
              </h4>
              <p>from $40k</p>
            </span>
          </div>
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={seller4} alt="" className='img'></img>
            </div>
            <span className="info">
              <h4 className='name'>
                Huyndai
              </h4>
              <p>from $40k</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sellers