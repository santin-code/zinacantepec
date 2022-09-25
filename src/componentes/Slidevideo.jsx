import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './slide-video.css'

import { Autoplay, Pagination, Navigation } from 'swiper'

import React from 'react'

const Slidevideo = ({ imagen1, imagen2, imagen3, title, id, name, ad, pay  }) => {
  return (
    <div className='swiper__container' >
      <Swiper spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay:2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false} 
      modules={[Autoplay, Pagination, Navigation ]}
      className='mySwiper'>
        
          <div className="video__slide-container">
            <SwiperSlide> <img src={imagen1} alt={name}  />  </SwiperSlide>
            <SwiperSlide> <img src={imagen2} alt={name}  />  </SwiperSlide>
            <SwiperSlide> <img src={imagen3} alt={name}  />  </SwiperSlide>
           </div>
            <h1 className='title'> {title} </h1>
            <div className="buttons__container">
              <button className='ad__button'>
                <a href={ad} rel='noreferrer noopener'> Ver Gratis </a>
              </button>

              <button className='pay__button'>
                <a href={pay} rel='noreferrer noopener'> Sin Anuncios </a>
              </button>
          </div>
      </Swiper>
    </div>
  )
}

export default Slidevideo