import React, { useState } from 'react'
import './Navbar.css'
import avatar from '../../images/avatar.png'
import { IoMdNotifications } from "react-icons/io";

const Navbar = () => {
    const[listNavLinks] = useState(['Home', 'About', 'Meds', 'Book an eVTOL']);
  return (
    <div className='navBar'>
        <div className="logo">
            <h1>eVTOL</h1>
        </div>

        <div className="navLinks">
            {
                listNavLinks.map((value, key) => (
                    <p key={key}>{value}</p>
                ))
            }
        </div>

        <div className="user">
            <i><IoMdNotifications /></i>
            <img src={avatar} alt="" />
        </div>
    </div>
  )
}

export default Navbar