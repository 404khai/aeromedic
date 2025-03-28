// import React, {useState} from 'react'
// import './MedCard.css'
// import { FaCartPlus } from "react-icons/fa";

// const MedCard = ({drug}) => {
  
//   return (
//     <div className='medCard'>
//       <div className="medBox">
//         <h2 className='medName'>{drug.name}</h2>
//         <p className='medCategory'>{drug.category}</p>
//         <img src={drug.image} alt={drug.name} className='medImg'/>
//         <p className='medWeight'>{drug.weight}</p>
//         <h6 className='medCode'>{drug.code}</h6>
//         <i className='addToCart'><FaCartPlus /></i>
//       </div>
//     </div>
//   )
// }

// export default MedCard

import React from 'react';
import './MedCard.css';
import { FaCartPlus } from "react-icons/fa";

const MedCard = ({ drug, addToCart }) => {
  return (
    <div className='medCard'>
      <div className="medBox">
        <h2 className='medName'>{drug.name}</h2>
        <p className='medCategory'>{drug.category}</p>
        <img 
          src={drug.image} 
          alt={drug.name} 
          className='medImg' 
          style={{width: drug.width}}  
        />
        <p className='medWeight'>{drug.weight}</p>
        <p className='medPrice'><b>${drug.price}</b></p>
        <p className='medCode'><i>{drug.code}</i></p>
        <i 
          className='addToCart' 
          onClick={() => addToCart(drug)}
        >
          <FaCartPlus />
        </i>
      </div>
    </div>
  );
}

export default MedCard;



