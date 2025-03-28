// import React from 'react';
// import './DroneModal.css';
// import { FaBatteryThreeQuarters } from "react-icons/fa6";

// const DroneModal = ({ drone, onClose }) => {
//     const getStatusColor = (status) => {
//         switch (status) {
//           case 'LOADING': return 'orange';
//           case 'LOADED': return 'red';
//           case 'DELIVERING': return 'red';
//           case 'DELIVERED': return 'blue';
//           case 'RETURNING': return 'purple';
//           case 'IDLE': return 'green';
//           default: return 'black';
//         }
//       };

//   if (!drone) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <button className="close-btn" onClick={onClose}>&times;</button>
//         <img src={drone.mainImage} alt={drone.name} className="modal-img" />
//         <div className="modal-content">
//           <h2>{drone.name}</h2>
//           <p><b>Model:</b> {drone.specs.model}</p>
//           <p><b>Status:</b> <span style={{ color: getStatusColor(drone.specs.status) }}>{drone.specs.status}</span></p>
//           <p><b>Battery:</b> <FaBatteryThreeQuarters /> {drone.specs.battery}</p>
//           <p><b>Max-weight:</b> 500g</p>
//           <p><b>Service Fee:</b> {drone.specs.price}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DroneModal;


import React from 'react';
import ReactDOM from 'react-dom';
import './DroneModal.css';
import { FaBatteryThreeQuarters } from "react-icons/fa6";

const DroneModal = ({ drone, onClose }) => {
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

  if (!drone) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <img src={drone.mainImage} alt={drone.name} className="modal-img" />
        <div className="modal-content">
          <h2>{drone.name}</h2>
          <p><b>Model:</b> {drone.specs.model}</p>
          <p><b>Status:</b> <span style={{ color: getStatusColor(drone.specs.status) }}>{drone.specs.status}</span></p>
          <p><b>Battery:</b> <FaBatteryThreeQuarters /> {drone.specs.battery}</p>
          <p><b>Max-weight:</b> 500g</p>
          <p><b>Service Fee:</b> {drone.specs.price}</p>
        </div>
      </div>
    </div>,
    document.body // Render outside the component tree
  );
};

export default DroneModal;
