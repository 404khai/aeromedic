import React, {useState} from 'react';
import { useEffect } from 'react';
import './Deliveries.css';
import pills from '../../images/pill1.png'
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
                <h1>🎉 New Year, New Discounts! 🎉</h1>
                <p>💊Stay Healthy & Save More with Our January Medication Sale. <br />Up to 50% Off on Essential Medications!</p>
                <button className="buyNow">Buy Now</button>
            </div>
            
            <div className="bannerImg">
                <img src={pills} alt="" />
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