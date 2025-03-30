
import React from 'react';
import ReactDOM from 'react-dom';
import './DroneModal.css';
import { FaBatteryThreeQuarters } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const DroneModal = ({ drone, onClose, cartItems }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'LOADING': return 'orange';
      case 'LOADED': return 'red';
      case 'DELIVERING': return 'purple';
      case 'DELIVERED': return 'blue';
      case 'RETURNING': return 'purple';
      case 'IDLE': return 'green';
      default: return 'black';
    }
  };
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const serviceFee = parseFloat(drone.specs.price) || 0;
  const grandTotal = totalPrice + serviceFee;



  if (!drone) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        <div className="droneInfo">
          <button className="close-btn" onClick={onClose}>&times;</button>
          <img src={drone.mainImage} alt={drone.name} className="modal-img" />
          <div className="modal-content">
            <h2>{drone.name}</h2>
            <p><b>Model:</b> {drone.specs.model}</p>
            <p><b>Status:</b> <span style={{ color: getStatusColor(drone.specs.status) }}>{drone.specs.status}</span></p>
            <p><b>Battery:</b> <FaBatteryThreeQuarters /> {drone.specs.battery}</p>
            <p><b>Max-weight:</b> 500g</p>
            {/* <p><b>Service Fee:</b> {drone.specs.price}</p> */}
          </div>
        </div>
        
        <div className="modalBottom">

          <div className="loadedMeds">
            <h3>Loaded Medications:</h3>
            {cartItems.length > 0 ? (
              <div className="medications-list">
                {cartItems.map((item) => (
                  <div key={item.id} className="med-item">
                    <img src={item.image} alt={item.name} className="med-img" />
                    <div className="med-info">
                      <p><b>{item.name}</b></p>
                      <p>{item.quantity} x ${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No medications loaded yet.</p>
            )}
          </div>

          <div className="checkoutBox">
            <div className="totalBox">
              <p><b>Cart Total:</b> ${totalPrice.toFixed(2)}</p>
              <p><b>Service Fee:</b> ${serviceFee.toFixed(2)}</p>
              <hr />
              <p className='grandTotal'><b>Grand Total:</b> ${grandTotal.toFixed(2)}</p>
            </div>
            <Link to='/UserLogin'>
              <button className='checkoutButton'>Proceed to Checkout</button>
            </Link>
          </div>

        </div>

      </div>
    </div>,
    document.body // Render outside the component tree
  );
};

export default DroneModal;
