import React, {useState} from 'react'
import './Card.css'
// import { FaStar, FaRegStar } from 'react-icons/fa';
import { FaBatteryThreeQuarters } from "react-icons/fa6";

const Card = ({product}) => {
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
        <h2>{product.name}</h2>
        <img src={product.mainImage} alt={product.name} />
        <div className='specs'>
          <div className="leftSpecs">
            <p id='status' style={{ color: getStatusColor(product.specs.status) }}>
              <b>{product.specs.status}</b>
            </p>
            <div className="model">{product.specs.model}</div>
            <div className="battery">
              <FaBatteryThreeQuarters/>{product.specs.battery}
            </div>
          </div>
          <p id='price' className='merriweather-bold-italic'>{product.specs.price}</p>
        </div>
        
        <a href="#" className='btn'>Book Now</a>
      </div>
    </div>
  )
}

export default Card