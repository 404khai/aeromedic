// import React from 'react';
// import './Cart.css';
// import { Link } from 'react-router-dom';

// const Cart = ({ cartItems, toggleCart, setCartItems }) => {
//   const handleQuantityChange = (id, delta) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id
//           ? { ...item, quantity: Math.max(1, item.quantity + delta) }
//           : item
//       )
//     );
//   };

//   // Calculate total price
//   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className={`cart ${cartItems.length > 0 ? 'open' : ''}`}>
//       <button onClick={toggleCart} className="close-btn">Close</button>
      
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty!</p>
//       ) : (
//         <>
//           {cartItems.map((item) => (
//             <div key={item.id} className="cartItem">
//               <h4>{item.name}</h4>
//               <p>Category: {item.category}</p>
//               <p>Price: ${item.price * item.quantity}</p>
//               <p>Weight: {item.weight}</p>
//               <div className="quantityChanger">
//                 <button className='increaseQuant' onClick={() => handleQuantityChange(item.id, -1)}>-</button>
//                 <span>{item.quantity}</span>
//                 <button className='decreaseQuant' onClick={() => handleQuantityChange(item.id, 1)}>+</button>
//               </div>
//             </div>
//           ))}

//           {/* Total price + Get an eVTOL button */}
//           <div className="cartFooter">
//             <p className="totalPrice"> <b>Total:</b> ${totalPrice.toFixed(2)}</p>
//             <Link to='/Packaging'>
//               <button className='signIn'>Get an eVTOL</button>
//             </Link>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;



import React from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, toggleCart, setCartItems }) => {
  const navigate = useNavigate();

  const handleQuantityChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleCheckout = () => {
    toggleCart(); // Close the cart
    navigate('/Packaging'); // Route to Packaging page
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className={`cart ${cartItems.length > 0 ? 'open' : ''}`}>
      <button onClick={toggleCart} className="close-btn">Close</button>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cartItem">
              <h4>{item.name}</h4>
              <p>Category: {item.category}</p>
              <p>Price: ${item.price * item.quantity}</p>
              <p>Weight: {item.weight}</p>
              <div className="quantityChanger">
                <button className='increaseQuant' onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button className='decreaseQuant' onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              </div>
            </div>
          ))}

          {/* Total price + Get an eVTOL button */}
          <div className="cartFooter">
            <p className="totalPrice"> <b>Total:</b> ${totalPrice.toFixed(2)}</p>
            <button className='signIn' onClick={handleCheckout}>Get an eVTOL</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;


