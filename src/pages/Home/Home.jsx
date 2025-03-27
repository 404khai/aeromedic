import React from 'react'
import './Home.css'
import banner from '../../images/dronewithmeds.png'
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
        <div className="home">
            <div className="homeTxt">
                <h1>
                  <FaQuoteLeft />
                  The Future of <span className='healthCare'>Healthcare</span> is in the Air
                  <FaQuoteRight />
                </h1>
                <p>
                    Revolutionizing prescription delivery with cutting-edge drone technology that bring your medications to your doorstep when you need them.
                    Say goodbye to long waits and hello to instant relief.
                </p>
            </div>
            <img src={banner} alt="" />
        </div>
    </div>
  )
}

export default Home