import React, {useState} from 'react'
import { useEffect } from 'react'
import eVTOL from '../../images/eVTOL3.png'
import './Book.css'
import Card from '../../components/Card/Card'
import data from '../../bookingData.json'

const Book = ({product}) => {
    const [products, setProducts] = useState([]);

        useEffect(() => {
        setProducts(data);
    }, []);

  return (
    <div className="book">

      <div className="bookHeroSec">
        <img src={eVTOL} alt="" />
        <div className="bookTxt">
          <h1>🚀 Your Air Taxi Awaits!🚀</h1>
          <p>
            Secure Your eVTOL Flight – Fast, Safe, and Hassle-Free!
            Seamless eVTOL Bookings for a Faster Commute.
          </p>
          <button className="bookNow">Book Now</button>
        </div>
      </div>

      <div className="droneShop">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      
    </div>
  )
}

export default Book