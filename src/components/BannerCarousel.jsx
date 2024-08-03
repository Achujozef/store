import React from 'react';
import Slider from 'react-slick';
import { banners } from '../dummyData';

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerCarousel = () => {
  const settings = {
    dots: false, // Hide the dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // Hide the default arrows
  };

  return (
    <div className="relative flex justify-center mt-6">
      <div className="relative w-11/12 h-36 overflow-hidden border-2 border-white bg-white rounded-2xl">
        <Slider {...settings}>
          {banners.map((banner) => (
            <div key={banner.id} className="w-full h-full">
              <img
                src={banner.image}
                alt={`Banner ${banner.id}`}
                className="w-full h-full object-cover rounded-lg"
              />
              {/* <a href={banner.link} className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded">Shop Now</a> */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BannerCarousel;
