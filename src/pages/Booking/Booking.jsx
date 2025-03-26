import React from 'react'
import eVTOL from '../../images/drone-delivery.png'
import './Booking.css'
import { Link } from 'react-router-dom'


const Booking = () => {

  return (
    <div className="booking">
      <img src={eVTOL} alt="" className='bookingImg'/>
      <div className="bookingTxt">
        <h1>🚀 Your Air Taxi Awaits</h1>
        <p>
          Secure Your eVTOL Flight – Fast, Safe, and Hassle-Free!
          Seamless eVTOL Bookings for a Faster Commute.
        </p>
        {/* <button className="bookNow">
          <Link to='/evtolBooking'>Book Now</Link>
        </button> */}
        <Link to='/EvtolBooking'>
          <button className="bookNow">Book Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Booking