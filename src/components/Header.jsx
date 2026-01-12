// Import data from shows
import { headers } from "../data/shows.js";

// Import Swiper React Components & Swiper styles.............
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// React Arrow Icon...........................................
import { GoArrowRight } from 'react-icons/go';
import { GoArrowLeft } from 'react-icons/go';

export const Header = () => {
  return (
    <div className=''>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            loop = {true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
            {
                headers.map(({id, logo, headerImg, desc}, ) => {
                    return (
                        <SwiperSlide key={id}>
                            <div className='w-screen h-screen items-center justify-center my-0 mx-auto relative'>
                                <div className='flex flex-col absolute w-[35%] h-[20%] left-0 top-1/3 -translate-y-1/3 text-white ml-20 z-30'>
                                    <img src={logo} alt="" className='relative w-48 h-auto mt-5 mb-4 z-100' />
                                    <p className='mx-10 text-xl text-justify'>{desc}</p>
                                </div>
                                <div className='absolute inset-0 bg-black opacity-20 z-20'></div>
                                <img src={headerImg} alt="" className='object-cover bg-center relative z-10' />
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </div>
  )
}
