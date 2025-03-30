// import React, { useState } from 'react'
// import './Navbar.css'
// import logo from '../../images/logo.png'
// import animatedCart from '../../images/trolley-cart.png'
// import cartIcon from '../../images/grocery.png'
// import Cart from '../Cart/Cart'
// // import { FaShoppingCart } from "react-icons/fa";
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const [dropdown, setDropdown] = useState(false);
//     const [isCartOpen, setIsCartOpen] = useState(false); // Cart state

//     const toggleCart = () => {
//         setIsCartOpen(!isCartOpen);
//     };

//     return (
//         <div className='navBar'>
//             <div className="logo">
//                 <img src={logo} alt="" className='logoIcon'/>
//                 <h1>SwiftDrones</h1>
//             </div>

//             <div className="navLinks">
//                 <Link to='/Home' className='navLink'>Home</Link>
//                 <Link to='/Deliveries' className='navLink'>Deliveries</Link>
//                 <Link to='/Booking' className='navLink'>Booking</Link>
//             </div>

//             <div className="user">
//                 <img 
//                     src={cartIcon} 
//                     alt="" 
//                     className='cartIcon' 
//                     onClick={toggleCart} 
//                 />
//                 {/* <i><IoMdNotifications /></i> */}
//                 <Link to='/UserLogin'>
//                     <button className='signIn'>Sign In</button>
//                 </Link>
//             </div>

//             {isCartOpen && <Cart isCartOpen={isCartOpen} toggleCart={toggleCart} />}
//         </div>

        
//     )
// }

// export default Navbar



import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../images/logo.png';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';


const Navbar = ({ cartItems, setCartItems, cartImage }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <>
            <div className='navBar'>
                <div className="logo">
                    <img src={logo} alt="" className='logoIcon'/>
                    <h1>AEROMEDIC</h1>
                </div>

                <div className="navLinks">
                    <Link to='/Home' className='navLink'>Home</Link>
                    <Link to='/Deliveries' className='navLink'>Deliveries</Link>
                    <Link to='/Booking' className='navLink'>Booking</Link>
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

            {isCartOpen && (
                <Cart cartItems={cartItems} toggleCart={toggleCart} setCartItems={setCartItems} />
            )}
        </>
    );
};


export default Navbar;
