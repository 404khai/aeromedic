import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Packaging.css';
import boxing from '../../images/boxing.gif';
import conveyor from '../../images/conveyor-belt.gif';

const Packaging = () => {
  const [gif, setGif] = useState(boxing);
  const navigate = useNavigate();

  useEffect(() => {
    // Start with boxing gif
    setGif(boxing);

    const boxingTimer = setTimeout(() => {
      // Switch to conveyor gif after 3 seconds
      setGif(conveyor);

      const conveyorTimer = setTimeout(() => {
        navigate('/Booking'); // Navigate to Booking after 3 seconds of conveyor gif
      }, 6000);

      return () => clearTimeout(conveyorTimer); // Cleanup the conveyor timer
    }, 2000);

    return () => clearTimeout(boxingTimer); // Cleanup the boxing timer
  }, [navigate]);

  return (
    <div className="package">
      {gif && <img src={gif} alt="Processing" className="gif" />}
    </div>
  );
};

export default Packaging;
