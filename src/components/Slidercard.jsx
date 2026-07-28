import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import data from '../component data/Slidercarddata';

function Slidercard() {
  return (
    
    
    <div className="slider-section">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
        }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="card">
              <img src={item.image} alt={item.name} />

              
              <p>{item.review}</p>
              <h3>-{item.name}</h3>


            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slidercard;