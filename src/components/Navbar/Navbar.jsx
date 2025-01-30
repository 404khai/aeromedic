import React, { useState } from 'react'
import './Navbar.css'
import avatar from '../../images/avatar.png'
import { IoMdNotifications } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <div className='navBar'>
            <div className="logo">
                <h1>eVTOL</h1>
            </div>

            <div className="navLinks">
                <Link to='/Home' className='navLink'>Home</Link>
                <Link to='/Deliveries' className='navLink'>Deliveries</Link>
                <Link to='/Book' className='navLink'>Book an eVTOL</Link>
            </div>

            <div className="user">
                <i><IoMdNotifications /></i>
                <i><FaShoppingCart /></i>
                <img src={avatar} alt="" />
            </div>
        </div>
    )
}

export default Navbar