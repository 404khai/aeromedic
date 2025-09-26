
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../images/aeroMedic.png';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';


const Navbar = ({ cartItems, setCartItems, cartImage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <>
            <div className="navBar">

                <div className="menu-toggle">
                    <input type="checkbox" id="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
                    <label htmlFor="checkbox" className="toggle">
                        <div className="bars" id="bar1"></div>
                        <div className="bars" id="bar2"></div>
                        <div className="bars" id="bar3"></div>
                    </label>
                </div>

                <div className="logo">
                    <img src={logo} alt="" />
                    {/* <img src={logo} alt="" className='logoIcon'/>
                    <h1>AEROMEDIC</h1> */}
                </div>

                <div className="user">
                    <div className="cartWrapper">
                        <img 
                            src={cartImage} 
                            alt="Cart" 
                            className='cartIcon' 
                            onClick={toggleCart}
                        />
                        {cartItems.length > 0 && (
                            <span className="cartBadge">{cartItems.length}</span>
                        )}
                    </div>
                    <Link to='/UserLogin'>
                        <button className='signIn'>Log In</button>
                    </Link>
                </div>
            </div>

            <div className={`navLinks ${isMenuOpen ? 'open' : ''}`}>
                <Link to='/Home' className='navLink'>Home</Link>
                <Link to='' className='navLink'>About</Link>
                <Link to='/Deliveries' className='navLink'>Deliveries</Link>
                <Link to='/Booking' className='navLink'>Booking</Link>
                <Link to='' className='navLink'>Gallery</Link>
            </div>

            {isCartOpen && (
                <Cart cartItems={cartItems} toggleCart={toggleCart} setCartItems={setCartItems} />
            )}
        </>
    );
};


export default Navbar;
