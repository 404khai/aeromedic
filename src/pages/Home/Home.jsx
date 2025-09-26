import React, {useState, useRef} from 'react';
import { useEffect } from 'react';
import './Home.css'
// import banner from '../../images/package.png'
// import medInterface from '../../images/medFuture.png'
import drone from '../../images/2dronez.png'
import drone2 from '../../images/3dronez.png'
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import gsap from "gsap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';


const Home = () => {

  const swiperRef = useRef(null);

  const animateSlide = () => {
    gsap.fromTo(
      ".mainTxt",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 2, ease: "power2.out" }
    );

    gsap.fromTo(
      ".subTxt",
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 3, ease: "power2.out" }
    );

    gsap.fromTo(
      ".img",
      { opacity: 0, y: -800 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out" }
    );
    // gsap.fromTo(
    //   ".img1",
    //   { opacity: 0, x: -100 },
    //   { opacity: 1, x: 0, duration: 5, ease: "power3.out" }
    // );

    gsap.fromTo(
      ".buyNow",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 3, ease: "power3.out" }
    );
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    if (!swiperInstance) return;

    animateSlide(); // Run animation on the first load

    swiperInstance.on("slideChangeTransitionStart", animateSlide);

    return () => {
      swiperInstance.off("slideChangeTransitionStart", animateSlide);
    };
  }, []);

  return (
    <div className='home'>
        <Swiper
            ref={swiperRef}
            pagination={{
                dynamicBullets: true,
            }}
            autoplay={{
                delay: 8000, 
                disableOnInteraction: true, 
            }}
            speed={1000}
            modules={[Pagination, Autoplay]}
            loop={true}
            spaceBetween={0}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="homeBanner">
                    <div className="homeBannerTxt">
                      <h1 className='mainTxt'>
                        <FaQuoteLeft />
                        The Future of <span className='healthCare'>Healthcare</span> is in the Air
                        <FaQuoteRight />
                      </h1>
                        <p className='subTxt'>
                          Revolutionizing prescription delivery with cutting-edge drone technology that bring your medications to your doorstep when you need them.
                          Say goodbye to long waits and hello to instant relief.
                        </p>
                        <Link to='/UserLogin'>
                            <button className='buyNow'>Our Vision</button>
                        </Link>
                    </div>
                    
                    <div className="homeBannerImg">
                        <img src={drone} alt="" className='img'/>
                    </div>
                </div>  
            </SwiperSlide>

            <SwiperSlide>
                <div className="homeBanner">
                    <div className="homeBannerTxt">
                        <h1 className='mainTxt'>The Future of Healthcare Delivery — Faster, Smarter, Life-Saving</h1>
                        <p className='subTxt'>Pioneering the future of drone delivery for blood during transfusions, organs for emergency operations, and critical care supplies.</p>
                        <Link to='/UserLogin'>
                            <button className='buyNow'>Learn More</button>
                        </Link>
                    </div>
                    
                    <div className="homeBannerImg">
                        <img src={drone2} alt="" className='img'/>
                    </div>
                </div>  
            </SwiperSlide>
        </Swiper>
    </div>
    // <div>
    //     <div className="home">
    //         <div className="homeTxt">
    //             <h1>
    //               <FaQuoteLeft />
    //               The Future of <span className='healthCare'>Healthcare</span> is in the Air
    //               <FaQuoteRight />
    //             </h1>
    //             <p>
    //                 Revolutionizing prescription delivery with cutting-edge drone technology that bring your medications to your doorstep when you need them.
    //                 Say goodbye to long waits and hello to instant relief.
    //             </p>
    //         </div>
    //         <img src={banner} alt="" />
    //     </div>
    // </div>
  )
}

export default Home