import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import football from '../../assets/img/football.jpg';
import laptop from '../../assets/img/laptop.jpg';
import stadium from '../../assets/img/stadium.jpg';
function Home() {
  return (
    <div>
      <div className="h-max">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img src={football} alt="loading" className="h-[550px] w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={stadium} alt="loading" className="h-[550px] w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={laptop} alt="loading" className="h-[550px] w-full" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
