import React from 'react';
import '../Styles/Style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    image: '/images/img2.webp'
  },
  {
    image: '/images/img3.webp'
  },
  {
    image: '/images/img4.webp'
  },
  {
    image: '/images/img5.webp'
  }
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 1400,    
  };
  return (
    <div className='d-flex  home'>
      <div className=' w-100 m-auto'>
        <Slider {...settings} className = "image-slider">
          {data.map((item, index) => {
            return ( 
              <div key={index}>
                <div className='image-container'>
                  <img src={item.image} alt="image" className='slider-image' />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default Home