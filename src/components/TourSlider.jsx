import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TourSlider() {

  const tours = [
    {
      img: "/src/assets/safari-25-s-x2.jpg",
      badge: "ЛУЧШЕЕ САФАРИ В АФРИКЕ",
      title: "Танзания и Кения",
      desc: "Пляжный отдых. Комби туры сафари + пляж",
      color: "bg-green-600"
    },
    {
      img: "/src/assets/mauritiusm-banner.jpg",
      badge: "Сезон 2026",
      title: "Маврикий",
      desc: "Гарантированные блоки из Москвы  на 11 ночей",
      color: "bg-orange-500 "
    },
    {
      img: "/src/assets/maldivesm-1.jpg",
      badge: "СЕЗОН 2026",
      title: "Мальдивы",
      desc: "Скидки до 40% на проживание",
      color: "bg-gray-200"
    },
    {
      img: "/src/assets/bali2310-m1-1.jpg",
      badge: "СЕЗОН 2026",
      title: "Индонезия",
      desc: "Продолжительность 12–14 н.",
      color: "bg-pink-500"
    },
    {
      img: "/src/assets/cyprus-25-s.jpg",
      badge: "LOVE Cyprus",
      title: "Кипр",
      desc: "Солнце и море.Культура и религия. Гастрономия. MICE Discovery Cyprus!",
      color: "bg-green-500"
    },
    {
      img: "/src/assets/mauritiusm-banner.jpg",
      badge: "Сезон 2026",
      title: "Маврикий",
      desc: "Гарантированные блоки из Москвы  на 11 ночей",
      color: "bg-orange-500 "
    }
  ];

  return (
    <div className="mx-20">

      <Swiper
        modules={[Pagination]}
        spaceBetween={25}
        slidesPerView={4}
        pagination={{ clickable: true }}
      >

        {tours.map((tour, index) => (
          <SwiperSlide key={index}>

            <div className="relative h-60 rounded-xl overflow-hidden group">

              <img
                src={tour.img}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-tr from-black/60 via-black/20 to-transparent"></div>

              <div className={`absolute top-4 left-4 px-3 py-1 text-xs text-white rounded ${tour.color}`}>
                {tour.badge}
              </div>

              <div className="absolute bottom-6 left-6 text-white">

                <h3 className="text-2xl font-bold">
                  {tour.title}
                </h3>

                <p className="text-sm mt-2 max-w-55">
                  {tour.desc}
                </p>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
}