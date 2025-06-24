
// import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import EventData from '../Utils/EventData'
import './Swiper.css'
import 'swiper/css';
import 'swiper/css/effect-fade';



import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default () => {
    return (
        <div className="swiper_container">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
            >
               {EventData.map((event) => (
                    
                   <SwiperSlide><img src={event.image} /></SwiperSlide>
                ))}
                    
                
            </Swiper>
        </div>
      );
  };