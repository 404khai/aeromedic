// import React, {useState} from 'react'
// import './Card.css';
// import { FaBatteryThreeQuarters } from "react-icons/fa6";

// const Card = ({drone}) => {

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'LOADING': return 'orange';
//       case 'LOADED': return 'red';
//       case 'DELIVERING': return 'red';
//       case 'DELIVERED': return 'blue';
//       case 'RETURNING': return 'purple';
//       case 'IDLE': return 'green';
//       default: return 'black';
//     }
//   };
//   return (
//     <div className='card'>
//       <div className="imgBox">
//         <h2 className='evtolName'>{drone.name}</h2>
//         <img src={drone.mainImage} alt={drone.name} />
//         <div className='specs'>
//           <div className="leftSpecs">
//             <p id='status' style={{ color: getStatusColor(drone.specs.status) }}>
//               <b>{drone.specs.status}</b>
//             </p>
//             <div className="model">{drone.specs.model}</div>
//             <div className="battery">
//               <FaBatteryThreeQuarters/>{drone.specs.battery}
//             </div>
//           </div>
//           <p id='price'>{drone.specs.price}</p>
//         </div>
        
//         <a href="#" className='btn'>Book Now</a>
//       </div>
//     </div>
//   )
// }

// export default Card


// import React, { useState } from 'react';
// import './Card.css';
// import { FaBatteryThreeQuarters } from "react-icons/fa6";
// import DroneModal from '../DroneModal/DroneModal';

// const Card = ({ drone }) => {
//   const [showModal, setShowModal] = useState(false);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'LOADING': return 'orange';
//       case 'LOADED': return 'red';
//       case 'DELIVERING': return 'red';
//       case 'DELIVERED': return 'blue';
//       case 'RETURNING': return 'purple';
//       case 'IDLE': return 'green';
//       default: return 'black';
//     }
//   };

//   return (
//     <div className='card'>
//       <div className="imgBox">
//         <h2 className='evtolName'>{drone.name}</h2>
//         <img src={drone.mainImage} alt={drone.name} />
//         <div className='specs'>
//           <div className="leftSpecs">
//             <p id='status' style={{ color: getStatusColor(drone.specs.status) }}>
//               <b>{drone.specs.status}</b>
//             </p>
//             <div className="model">{drone.specs.model}</div>
//             <div className="battery">
//               <FaBatteryThreeQuarters /> {drone.specs.battery}
//             </div>
//           </div>
//           <p id='price'>{drone.specs.price}</p>
//         </div>
        
//         {/* Open Modal */}
//         <button onClick={() => setShowModal(true)} className='btn'>
//           Book Now
//         </button>
//       </div>

//       {/* Display Modal */}
//       {showModal && (
//         <DroneModal 
//           drone={drone} 
//           onClose={() => setShowModal(false)} 
//         />
//       )}
//     </div>
//   );
// };

// export default Card;



import React, { useState } from 'react';
import './Card.css';
import { FaBatteryThreeQuarters } from "react-icons/fa6";
import DroneModal from '../DroneModal/DroneModal';

const Card = ({ drone }) => {
  const [showModal, setShowModal] = useState(false);

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
              <FaBatteryThreeQuarters /> {drone.specs.battery}
            </div>
          </div>
          <p id='price'>{drone.specs.price}</p>
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
        />
      )}
    </div>
  );
};

export default Card;
