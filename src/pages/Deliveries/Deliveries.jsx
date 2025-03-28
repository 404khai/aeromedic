import React from 'react';
import './Deliveries.css';
import { Link } from 'react-router-dom';
import meds from '../../images/meds.jpg'

const Deliveries = () => {

  return (
    <div className='deliveries'> 
        <div className="deliveryBanner">
            <div className="deliveryBannerTxt">
                <h1>Healthcare at Your Doorstep — Powered by Drones</h1>
                <p>💊Bringing essential medications to your doorstep, emergency or routine — get your medication in record time with drone delivery.</p>
                <Link to='/Medications'>
                    <button className='buyNow'>Shop for Meds</button>
                </Link>
            </div>
                    
            <div className="deliveryImg">
                <img src={meds} alt=""/>
            </div>
        </div> 
    </div>
  )
}

export default Deliveries