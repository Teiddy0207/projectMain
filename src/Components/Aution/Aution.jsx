import React, { useState } from 'react'
import "./Aution.css"

import {BsArrowLeftShort} from "react-icons/bs"
import {BsArrowRightShort} from "react-icons/bs"

import car01 from "../../Access/car01.jpg"


const Aution = () => {
  
  const [cars, setCars] = useState([
    {
      image: car01,
      title: "Used 2019 Audi S4 premium Plus",
      miles: "11475 Miles",
      engine: "AWD 4-Cylinder Turbo",
      price: "$41,200"
    },
    {
      image: car01,
      title: "Used 2019 Audi S4 premium Plus",
      miles: "11475 Miles",
      engine: "AWD 4-Cylinder Turbo",
      price: "$41,200"
    },
    {
      image: car01,
      title: "Used 2019 Audi S4 premium Plus",
      miles: "11475 Miles",
      engine: "AWD 4-Cylinder Turbo",
      price: "$41,200"
    },
    {
      image: car01,
      title: "Used 2019 Audi S4 premium Plus",
      miles: "11475 Miles",
      engine: "AWD 4-Cylinder Turbo",
      price: "$41,200"
    }
  ]);
  
  const handleCarsChange = (direction) => {
    if (direction === "left") {
      // Lấy ra 3 ô tô cuối cùng của mảng
      const lastThreeCars = cars.slice(-3);
      // Lấy ra các ô tô còn lại
      const remainingCars = cars.slice(0, -3);
      // Đưa 3 ô tô cuối vào đầu mảng
      const newCars = [...lastThreeCars, ...remainingCars];
      // Cập nhật state
      setCars(newCars);
    } else if (direction === "right") {
      // Lấy ra 3 ô tô đầu tiên của mảng
      const firstThreeCars = cars.slice(0, 3);
      // Lấy ra các ô tô còn lại
      const remainingCars = cars.slice(3);
      // Đưa 3 ô tô đầu tiên vào cuối mảng
      const newCars = [...remainingCars, ...firstThreeCars];
      // Cập nhật state
      setCars(newCars);
    }
  }

  return (
<div className='aution section' >
<div className="secContainer container">
  <div className="secHeading flex">
    <h3 className="secTitle">
     Active Autions 
    </h3>

    <div className="navBtns flex">
      <BsArrowLeftShort className="icon leftIcon" onClick={() => handleCarsChange("left")}/>
      <BsArrowRightShort className="icon rightIcon" onClick={() => handleCarsChange("right")}/>
    </div>
  </div>

<div className="carContainer grid">
  
<div className="singleCar grid singleCarAvtive">
    <div className='imgDiv'>
      <img src ={car01} alt ="Car image"></img>
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

    <div className="price_buyBtn flex">
      <span className="price">
        $41,200
      </span>
      <span className="buyBtn">
       Buy Now
      </span>
    </div>
  </div>


  <div className="singleCar grid singleCarAvtive">
    <div className='imgDiv'>
      <img src ={car01} alt ="Car image"></img>
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

    <div className="price_buyBtn flex">
      <span className="price">
        $41,200
      </span>
      <span className="buyBtn">
       Buy Now
      </span>
    </div>
  </div>

  <div className="singleCar grid singleCarAvtive">
    <div className='imgDiv'>
      <img src ={car01} alt ="Car image"></img>
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

    <div className="price_buyBtn flex">
      <span className="price">
        $41,200
      </span>
      <span className="buyBtn">
       Buy Now
      </span>
    </div>
  </div>

  <div className="singleCar grid singleCarAvtive">
    <div className='imgDiv'>
      <img src ={car01} alt ="Car image"></img>
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

    <div className="price_buyBtn flex">
      <span className="price">
        $41,200
      </span>
      <span className="buyBtn">
       Buy Now
      </span>
    </div>
  </div>
</div>
</div>
    </div>

    )
}

export default Aution