import React from 'react';
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}>Prev</button>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  );
};



{/* <div className={`swiper-nav-btns transition-opacity ease-out duration-500`}>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className={`flex justify-center items-center transition-opacity ease-out duration-100 "cursor-pointer"}`}>
                <ExpandCircleDownIcon className='rotate-90 text-white/80 hover:text-white'/>
              </button>
                <button onClick={next} className={`flex justify-center items-center transition-opacity ease-out duration-100 "cursor-pointer"}`}>
                <ExpandCircleDownIcon className='-rotate-90 text-white/80 hover:text-white' />
              </button>
              
            </div>
            <div className="absolute bottom-4 right-0 left-0">
              <div className='flex items-center justify-center gap-2'>
                {slides.map((_, i) => (
                  <div className={`transition-all w-2 h-2 bg-white rounded-full "opacity-20"}`} key={i + 1}/>
                ))}
              </div>
            </div>
          </div> */}

// import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
