import React, { useState } from 'react';
import './Card.css';
import { FaBatteryFull, FaBatteryHalf,FaBatteryThreeQuarters, FaBatteryQuarter } from "react-icons/fa6";
import DroneModal from '../DroneModal/DroneModal';

const Card = ({ drone, cartItems, addToCart }) => {
  const [showModal, setShowModal] = useState(false);

  const batteryIcons = {
    full: <FaBatteryFull />,
    half: <FaBatteryHalf />,
    threeQuarters: <FaBatteryThreeQuarters />,
    quarter: <FaBatteryQuarter />,
  };

  const batteryColors = {
    full: 'green',
    threeQuarters: 'olive',
    half: 'darkorange',
    quarter: 'red'
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'IDLE': return 'green';
      case 'LOADING': return 'orange';
      case 'LOADED': return 'red';
      case 'DELIVERING': return 'purple';
      case 'DELIVERED': return 'blue';
      default: return 'black';
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
    document.body.classList.add('modal-open');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <div className='card'>
      <div className="imgBox">
        <h2 className='evtolName'>{drone.name}</h2>
        <img src={drone.mainImage} alt={drone.name} />
        <div className='specs'>
          <div className="leftSpecs">
            <p id='status' style={{ color: getStatusColor(drone.specs.status) }}>
              <b>{drone.specs.status}</b>
            </p>
            <div className="model">{drone.specs.model}</div>
            <div className="battery">
              <i style={{ color: batteryColors[drone.specs.batteryIcon] }}>
                {batteryIcons[drone.specs.batteryIcon]}
              </i> 
              <p style={{ color: batteryColors[drone.specs.batteryIcon] }}>
                {drone.specs.battery}
              </p>
            </div>
          </div>
          <p id='price'>${drone.specs.price}</p>
        </div>
        
        {/* Open Modal */}
        <button onClick={handleOpenModal} className='btn'>
          Book Now
        </button>
      </div>

      {/* Display Modal */}
      {showModal && (
        <DroneModal 
          drone={drone} 
          onClose={handleCloseModal}
          cartItems={cartItems} 
        />
      )}
    </div>
  );
};

export default Card;
