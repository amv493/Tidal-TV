import { shows } from '../data/shows';
import ShowCard from './ShowCard';
import ShuffleButton from './ShuffleButton';

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

export const BrowseShows = () => {
  return (
    <div>
        <div className='m-10'>
            <h1 className='font-semibold text-3xl mb-4'>Browse Shows</h1>
          
             <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                loop = {true}
                slideToClickedSlide
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                    {
                      shows.map((show, id) => {
                        return (
                          <SwiperSlide key={id}>
                            <ShowCard key={show.id} show={show} />
                          </SwiperSlide>
                        )
                      })
                    }
              </Swiper>

            {/*Shuffle's shows selected*/}
            <ShuffleButton />
        </div>
    </div>
  )
}
