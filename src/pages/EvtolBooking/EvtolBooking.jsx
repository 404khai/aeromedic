import React, {useState} from 'react'
import { useEffect } from 'react'
import './EvtolBooking.css'
import data from '../../bookingData.json'
import Card from '../../components/Card/Card'

const EvtolBooking = ({product}) => {
    const [products, setProducts] = useState([]);

        useEffect(() => {
        setProducts(data);
    }, []);

  return (
    <div className="droneShop">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
    </div>
  )
}

export default EvtolBooking