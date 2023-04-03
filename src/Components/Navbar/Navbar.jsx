import React, {useState} from 'react'
import './Navbar.css'
import { AiFillCar } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import logo from '../../Access/car1.png'








const Navbar = () => {

const [navbar, setNavbar] = useState('navbar')

const showNavbar = () => {
    setNavbar('navbar showNavbar')
}

const removeNavbar = () => {
setNavbar('navbar')
}

const [header,setHeader] = useState('header')
const addBg = () => {
    if(window.scrollY >= 20){
        setHeader('header addBg')
    }
}

window.addEventListener('scroll', addBg)



    return (
        <div className={header} >
            <div className="logoDiv">
                <img src={logo} alt="Logo Image" className='logo'/>
            </div>

            <div className={navbar}>
                <ul className='menu'>
                    <li onClick={removeNavbar} className='listItem'>
                        <a href='/' className='link'>User Cars</a>
                    </li>
                    <li onClick={removeNavbar} className='listItem'>
                        <a href='/' className='link'>New Cars</a>
                    </li>
                    <li onClick={removeNavbar} className='listItem'>
                        <a href='/' className='link'>Auctions</a>
                    </li>
                    <li onClick={removeNavbar} className='listItem'>
                        <a href='/' className='link'>User Cars</a>
                    </li>
                    <li onClick={removeNavbar} className='listItem'>
                        <a href='/' className='link'>Sellers</a>
                    </li>
                </ul>
                <IoIosCloseCircleOutline className ="icon-closeIcon" onClick={removeNavbar} />
            </div>
            <div className="signUp flex">
                <div className='text'>Sign up</div>
                 
                <TbGridDots className = "icon-toggleNavbarIcon" onClick={showNavbar}/>
            </div>
        </div>
    )
}

export default Navbar;
