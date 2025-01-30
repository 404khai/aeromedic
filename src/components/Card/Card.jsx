import React, {useState} from 'react'
import './Card.css'

const Card = ({product}) => {
    const [mainImage, setMainImage] = useState(product.mainImage);

  return (
    <div className='card'>
      <div className='thumb'>
        {product.images.map((img, index) => (
          <div key={index}>
            <img 
                src={img} 
                alt={product.name} 
                onClick={() => setMainImage(img)} 
                className={mainImage === img ? 'active' : ''} 
            />
          </div>
        ))}
      </div>

      <div className="imgBox">
        <h2>{product.name}</h2>
        <img src={mainImage} alt={product.name} />
        <div className='specs'>
          <p>{product.specs.weight}</p>
          <p>{product.specs.price}</p>
        </div>
        <a href="#" className='btn'>Book Now</a>
      </div>
    </div>
  )
}

export default Card