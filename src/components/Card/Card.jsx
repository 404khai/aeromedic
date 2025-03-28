import React, {useState} from 'react'
import './Card.css'
// import { FaStar, FaRegStar } from 'react-icons/fa';
import { FaBatteryThreeQuarters } from "react-icons/fa6";

const Card = ({drone}) => {
  // const renderStars = (rating) => {
  //   const stars = [];
  //   for (let i = 1; i <= 5; i++) {
  //     stars.push(i <= rating ? <FaStar key={i} color="gold" /> : <FaRegStar key={i} color="gray" />);
  //   }
  //   return stars;
  // };

  const getStatusColor = (status) => {
    switch (status) {
      case 'LOADING': return 'orange';
      case 'LOADED': return 'red';
      case 'DELIVERING': return 'red';
      case 'DELIVERED': return 'blue';
      case 'RETURNING': return 'purple';
      case 'IDLE': return 'green';
      default: return 'black';
    }
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
              <FaBatteryThreeQuarters/>{drone.specs.battery}
            </div>
          </div>
          <p id='price'>{drone.specs.price}</p>
        </div>
        
        <a href="#" className='btn'>Book Now</a>
      </div>
    </div>
  )
}

export default Card