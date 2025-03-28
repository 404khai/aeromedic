// import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
// import Home from "./pages/Home/Home";
// import Booking from "./pages/Booking/Booking";
// import Navbar from "./components/Navbar/Navbar"
// import UserLogin from './pages/UserLogin/UserLogin'
// import UserSignUp from './pages/UserSignUp/UserSignUp'
// import Deliveries from "./pages/Deliveries/Deliveries";
// import EvtolBooking from "./pages/EvtolBooking/EvtolBooking";
// import Medications from "./pages/Medications/Medications";

// const AppRouter = () => {
  
//   return (
//     <Router>
//       <Navbar  />
//       <Routes>
//         <Route path="/" element={<Navigate to="/Home" />} />
//         <Route path="/Home" index element={<Home/>} />
//         <Route path="/Deliveries" element={<Deliveries />} />
//         <Route path="/Booking" element={<Booking />} />
//         <Route path="/Medications" element={<Medications />} />
//         <Route path="/EvtolBooking" element={<EvtolBooking />} />
//         <Route path="/UserLogin" element={<UserLogin />} />
//         <Route path="/UserSignUp" element={<UserSignUp />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRouter;


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Deliveries from './pages/Deliveries/Deliveries';
import Booking from './pages/Booking/Booking';
import UserLogin from './pages/UserLogin/UserLogin';
import UserSignUp from './pages/UserSignUp/UserSignUp'
import Medications from './pages/Medications/Medications';
import Packaging from './pages/Packaging/Packaging';
import EvtolBooking from "./pages/EvtolBooking/EvtolBooking";
import animatedCart from './images/grocery.gif';
import cartIcon from './images/grocery.png';

const AppRouter = () => {
    const [cartItems, setCartItems] = useState([]);
    const [cartImage, setCartImage] = useState(cartIcon);

    const addToCart = (drug) => {
        setCartItems((prev) => {
            const existingItem = prev.find((item) => item.id === drug.id);
            if (existingItem) {
                return prev.map((item) =>
                    item.id === drug.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, { ...drug, quantity: 1 }];
            }
        });

        setCartImage(animatedCart);
        setTimeout(() => setCartImage(cartIcon), 2800);
    };

    return (
        <Router>
            <Navbar cartItems={cartItems} setCartItems={setCartItems}  cartImage={cartImage}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Deliveries" element={<Deliveries />} />
                <Route path="/Booking" element={<Booking />} />
                <Route path="/UserLogin" element={<UserLogin />} />
                <Route path="/UserSignUp" element={<UserSignUp />} />
                <Route path="/Packaging" element={<Packaging />} />
                <Route path="/EvtolBooking" element={<EvtolBooking />} />
                <Route path="/Medications" element={<Medications addToCart={addToCart} />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
