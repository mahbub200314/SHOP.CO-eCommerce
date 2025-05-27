import './home.css'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router';


const Home = () => {
  return (
    <div className='home'>
        <Swiper 
        navigation={true} modules={[Navigation,Autoplay]}
        autoplay = {{
            delay:3000,
            disableOnInteraction:true  //user interaction এর পরও autoplay চলবে
        }}
        speed={1300}

         className="mySwiper">
        <SwiperSlide className='SwiperSlide'>
            <div className="slide slide1">
               <h1>FIND CLOTHES <br></br>THAT MATHCHES YOUR STYLE</h1>
               <p>Browse throught our diverse range of meticulously crafted garments, designed to brind our your individuality an cater to your sense of style.</p>
            <button> <Link to='shop'>Shop Now</Link> </button>
            </div>
        </SwiperSlide>



        {/* .......................................................................... */}





        <SwiperSlide className='SwiperSlide' >
            <div className="slide slide2">
                <h1>YOUR HAPPY <br></br> OUR HEART HAPPINES </h1>
               <p>Browse throught our diverse range of meticulously crafted garments, designed to brind our your individuality an cater to your sense of style.</p>
               <button> <Link to='shop'>Shop Now</Link> </button>
            </div>
        </SwiperSlide>
       
      </Swiper>
      
    </div>
  )
}

export default Home
