import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' >
      <div className="footerContainer container">
        <div className="footerMenuDiv grid">

          {/*1*/}
          <div className="singleGrid">
            <span className="footerTitle">
              About
            </span>
            <ul className="footerUl grid">
              <li className="footerLi">
                How it works
              </li>
              <li className="footerLi">
                Careers
              </li>
              <li className="footerLi">
                Affliates
              </li>
              <li className="footerLi">
                Media
              </li>
            </ul>
          </div>
          {/*2*/}
          <div className="singleGrid">
            <span className="footerTitle">
             Become Seller
            </span>
            <ul className="footerUl grid">
              <li className="footerLi">
               Add vehicles
              </li>
              <li className="footerLi">
              Resource center
              </li>
              <li className="footerLi">
              bonds
              </li>
              <li className="footerLi">
            Release Dates
              </li>
            </ul>
          </div>

          {/*3*/}
          <div className="singleGrid">
            <span className="footerTitle">
          Community
            </span>
            <ul className="footerUl grid">
              <li className="footerLi">
                Recommendations
              </li>
              <li className="footerLi">
              Gift card
              </li>
              <li className="footerLi">
              Top Ups
              </li>
              <li className="footerLi">
              Selling
              </li>
            </ul>
          </div>

          {/*4*/}
          <div className="singleGrid">
            <span className="footerTitle">
              Booking Suport
            </span>
            <ul className="footerUl grid">
              <li className="footerLi">
                Update
              </li>
              <li className="footerLi">
              Help center
              </li>
              <li className="footerLi">
                garages
              </li>
              <li className="footerLi">
                Trust & safety
              </li>
            </ul>
          </div>
        </div>
        <div className="lowerSection grid">
          <p>2023 All right reserved</p>
          <blockquote>Team 3 Projectjs</blockquote>
        </div>
      </div>
    </div>
  )
}

export default Footer