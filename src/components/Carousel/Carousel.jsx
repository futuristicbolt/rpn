import React from 'react'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import Image from '../Image/Image';
import "./Carousel.css"
import like from "../../icons/like.svg";


function Carousel({ children: slides, animation }) {

  const [controls, setControls] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);
 
  const displayControls = () => {
    setControls(true)
  }
  const hideControls = () => {
    clearTimeout(timeoutId);
    const newTimeoutId = setTimeout(() => {
      setControls(false);
    }, 100);
    setTimeoutId(newTimeoutId);
  }

  const handleDoubleClick = (e) => {
    if(e.target.classList.contains("img")){
      animation();
    }
  }

  let touchStartTimestamp = 0;
  let doubleTapDelay = 300; // Adjust the delay as per your requirement
  
  function handleDoubleTap(e) {
    if(e.target.classList.contains("img")){
      animation();
    }
  }
  
  function handleTouchStart(event) {
    if (event.touches.length === 1) {
      const currentTimeStamp = new Date().getTime();
      const tapDuration = currentTimeStamp - touchStartTimestamp;
  
      if (tapDuration < doubleTapDelay) {
        handleDoubleTap(event);
        touchStartTimestamp = 0; // Reset the touch start timestamp
      } else {
        touchStartTimestamp = currentTimeStamp;
      }
    }
  }

  return (
    <div
      className='relative'
      onMouseEnter={displayControls}
      onMouseLeave={hideControls}
      onDoubleClick={handleDoubleClick}
      onTouchStart={handleTouchStart}
    >
      <div className='like-heart absolute h-1/4 w-1/4 flex items-center justify-center z-10 opacity-0 cursor-grab pointer-events-none'>
                <img src={like} className='brightness-[2000%] w-full' alt="" />
            </div>
       <Swiper
        className={`${controls && "display-controls"} cursor-grab`}
        slidesPerView={1}
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
      >
        {slides.map((slide) => {
          return <SwiperSlide key={slide}><Image src={slide} /></SwiperSlide>
        })}
      </Swiper>
    </div>
  )
}

export default Carousel
