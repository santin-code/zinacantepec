import React from 'react'
import { freeSlide } from '../data';

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slide.css";

import { Autoplay, Pagination, Navigation } from 'swiper';

const Slide = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className='swiper'  
        >
          {
            freeSlide.map(({id, image})=>{
              return (
                <SwiperSlide className='swiper' key={id} >
                  <div className="swiper__container">
                    <img src={image} alt="slide" />
                  </div>
                </SwiperSlide>
              )
            })
            
          }
      </Swiper>
    </>
  )
}

export default Slide