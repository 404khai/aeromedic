import React from 'react'
import './Home.css'
import eVTOL from '../../images/eVTOL2.png'

const Home = () => {
  return (
    <div>
        <div className="home">
            <div className="homeTxt">
                <h1>" The Future of Healthcare is in the Air "</h1>
                <p>
                    Revolutionizing prescription delivery with cutting-edge drone technology that bring your medications to your doorstep when you need them.
                    Say goodbye to long waits and hello to instant relief.
                </p>
            </div>
            <img src={eVTOL} alt="" />
        </div>
    </div>
  )
}

export default Home