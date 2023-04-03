import React from 'react'
import './Trending.css'
import { BsArrowLeftShort } from "react-icons/bs"
import { BsArrowRightShort } from "react-icons/bs"

import car01 from "../../Access/car01.jpg"
import car02 from "../../Access/car02.jpg"
import car3 from "../../Access/car3.jpg"
const Trending = () => {
  return (
    <div className='trending section' >
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">
            trending Near you
          </h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>

        <div className="carContainer grid">
          <div className="singleCar grid">
            <div className='imgDiv'>
              <img src={car01} alt="Car image"></img>
            </div>
            <h5 className="carTitle">
              Used 2019 Audi S4 premium Plus
            </h5>
            <span className="miles">
              11475 Miles
            </span>
            <span className="AWD">
              AWD 4-Cylinder Turbo
            </span>

            <div className="price_seller flex">
              <span className="price">
                $41,200
              </span>
              <span className="seller">
                Best seller
              </span>
            </div>
          </div>
          <div className="singleCar grid">
            <div className='imgDiv'>
              <img src={car02} alt="Car image"></img>
            </div>
            <h5 className="carTitle">
              Mecdes Benz GLC 300
            </h5>
            <span className="miles">
              11475 Miles
            </span>
            <span className="AWD">
              AWD 4-Cylinder Turbo
            </span>
            <div className="price_seller flex">
              <span className="price">
                $41,200
              </span>
              <span className="buyBtn">
               Best Seller
              </span>
            </div>
          </div>
          <div className="singleCar grid">
            <div className='imgDiv'>
              <img src={car3} alt="Car image"></img>
            </div>
            <h5 className="carTitle">
              Maserati Supper Power
            </h5>
            <span className="miles">
              11475 Miles
            </span>
            <span className="AWD">
              AWD 4-Cylinder Turbo
            </span>

            <div className="price_seller flex">
              <span className="price">
                $41,200
              </span>
              <span className="seller">
                Best seller
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending