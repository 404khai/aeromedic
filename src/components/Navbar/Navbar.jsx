import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'
import drone from '../../images/trolley-cart.png'
import { IoMdNotifications } from "react-icons/io";
import { GiDeliveryDrone } from "react-icons/gi";
// import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <div className='navBar'>
            <div className="logo">
                <img src={logo} alt="" className='logoIcon'/>
                <h1>SwiftDrones</h1>
            </div>

            <div className="navLinks">
                <Link to='/Home' className='navLink'>Home</Link>
                <Link to='/Deliveries' className='navLink'>Meds</Link>
                <Link to='/Booking' className='navLink'>Booking</Link>
            </div>

            <div className="user">
                <img src={drone} alt="" className='cart'/>
                {/* <i><IoMdNotifications /></i> */}
                <Link to='/UserLogin'>
                    <button className='signIn'>Sign In</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar