import React, {useState} from 'react'
import { useEffect } from 'react'
import './EvtolBooking.css'
import DroneFilterSideNav from '../../components/DroneFilterSideNav/DroneFilterSideNav'
import data from '../../json/bookingData.json'
import Card from '../../components/Card/Card'

const EvtolBooking = ({drone, addToCart, cartItems}) => {
    const [drones, setDrones] = useState([]);

        useEffect(() => {
        setDrones(data);
    }, []);

  return (
    <div className='drones'>
      <DroneFilterSideNav />
      <div className="dronesBodyBox">
        <div className="dronesHead">
          <h1>Drones</h1>
        </div>
        <div className="dronesBody">
          {drones.map((drone) => (
            <Card key={drone.id} drone={drone} cartItems={cartItems} addToCart={addToCart}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EvtolBooking