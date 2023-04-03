import React, {useState} from 'react'
import './Review.css'

import { BsArrowLeftShort } from "react-icons/bs"
import { BsArrowRightShort } from "react-icons/bs"
import { AiFillStar } from "react-icons/ai"

import car001 from "../../Access/car001.jpg"
import user1 from "../../Access/user1.jpg"
import mec from "../../Access/mec.jpg"
import mase from "../../Access/mase.jpg"

const Review = () => {
 
  const [currentReview, setCurrentReview] = useState(0);

  const handlePrevReview = () => {
    setCurrentReview(currentReview === 0 ? reviews.length - 1 : currentReview - 1);
  };

  const handleNextReview = () => {
    setCurrentReview(currentReview === reviews.length - 1 ? 0 : currentReview + 1);
  };
 
  const reviews = [
    {
      carImg: car001,
      carName: '2023 Cadiallac',
      description: 'chiec xe nay tot, chay dc xa, hoan hao moi dia hinh, phu hop cho gia dinh cu the la gia dinh dai gia',
      reviewerImg: user1,
      reviewerName: 'Jacki chan',
      reviewerTitle: 'Chief Editor',
      rating: 4.84,
    },
    // Add more reviews here
    {
      carImg: mec,
      carName: '2023 Mec',
      description: 'xe nhu l',
      reviewerImg: user1,
      reviewerName: 'hong su phu',
      reviewerTitle: 'soware engineer',
      rating: 4.74,
    },
    {
      carImg: mase,
      carName: 'Super Maserati',
      description: 'good car, make me like a CEO',
      reviewerImg: user1,
      reviewerName: 'BingChilling',
      reviewerTitle: 'cheff',
      rating: 5,
    },
  ];
 
  return (
    <div className='review section' >
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">
            Recent Review
          </h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon"  onClick={handlePrevReview}/>
            <BsArrowRightShort className="icon rightIcon"  onClick={handleNextReview} />
          </div>
        </div>

        <div className="reviewContainer grid">
          <div className="singleReview grid">
            <div className="imgDiv">
            <img src={reviews[currentReview].carImg} alt="car image" />
            </div>
            <h5 className="reviewTitle">
           { reviews[currentReview].carName}
            </h5>
            <span className="desc">
            {reviews[currentReview].description}
            </span>

            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={user1} alt="" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                  {reviews[currentReview].reviewerName}
                  </span>
                  <p>{reviews[currentReview].reviewerTitle}</p>
                </div>
              </div>
              <div className="rightDiv flex">
                <AiFillStar className="icon"/>
                <blockquote>{reviews[currentReview].rating}</blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review