import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Slider() {
  return (
    <div className="mx-20 my-5">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className="overflow-hidden rounded-xl"
      >
        <SwiperSlide>
          <div className="relative w-full h-125">
            <img
              src="../../public/img/slider1.jpg"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-125">
            <img
              src="../../public/img/slider2.jpg"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-125">
            <img
              src="../../public/img/slider3.jpg"
              className="w-full h-full object-cover "
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}