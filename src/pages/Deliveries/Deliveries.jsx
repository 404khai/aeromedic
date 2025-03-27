import React, {useState} from 'react';
import { useEffect } from 'react';
import './Deliveries.css';
import { Link } from 'react-router-dom';
import meds from '../../images/meds.jpg'
import Card from '../../components/Card/Card'
import { PiCaretDownBold } from "react-icons/pi";
import { GiToggles } from "react-icons/gi";
import data from '../../bookingData.json'

const Deliveries = () => {
    const [products, setProducts] = useState([]);

        useEffect(() => {
        setProducts(data);
    }, []);

  return (
    <div className='deliveries'>
        <div className="banner">
            <div className="bannerTxt">
                <h1>Healthcare at Your Doorstep — Powered by Drones</h1>
                <p>💊Bringing essential medications to your doorstep, emergency or routine — get your medication in record time with drone delivery.</p>
                <Link to='/UserLogin'>
                    <button className='buyNow'>Shop for Meds</button>
                </Link>
            </div>
            
            <div className="bannerImg">
                <img src={meds} alt="" />
            </div>
        </div>

        <div className="filterSec">
            <div className="filterOptions">
                <div className="button">Categories <PiCaretDownBold /></div>
                <div className="button">Price <PiCaretDownBold /></div>
                <div className="button">Review <PiCaretDownBold /></div>
            </div>
            
            <i><GiToggles /></i>
        </div>

        <div className="products">
            {products.map((product) => (
                <Card key={product.id} product={product} />
            ))}

        </div>
    </div>
  )
}

export default Deliveries