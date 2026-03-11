import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa6";



import "swiper/css";
import "swiper/css/navigation";

export default function Reviews() {
  const reviews = [
    {
      des: "Туроператор Амботис-профессионалы! Сотрудники оператора готовы помочь в любой ситуации прилаг...",
      title: "Читать полностью",
      h: "Ильина Марина",
      p: "ТК «Розовый слон»",
    },
    {
      des: "Большое спасибо за прекрасный отдых в Elihotel polis. С 20 по 31 мая. Хорошая организация Ambot...",
      title: "Читать полностью",
      h: "Наталия Сячинова",
    },
    {
      des: "Коллеги, хочу поблагодарить за прекрасно организованный тур на Шри-ланку. Хочу отметить, что ту...",
      title: "Читать полностью",
      h: "Людмила Попан",
      p: '"МИР" (г. Санкт-Петербург)',
    },
    {
      des: "Обращаюсь к руководству замечательной компании Ambotis Holidays Москва. Прошу выразить благодар...",
      title: "Читать полностью",
      h: "Гаращенко И. Е.",
      p: "Генеральный директор «Марко Поло»",
    },
    {
      des: "Коллеги, хочу поблагодарить за прекрасно организованный тур на Шри-ланку. Хочу отметить, что ту...",
      title: "Читать полностью",
      h: "Людмила Попан",
      p: '"МИР" (г. Санкт-Петербург)',
    },
    {
      des: "Туроператор Амботис-профессионалы! Сотрудники оператора готовы помочь в любой ситуации прилаг...",
      title: "Читать полностью",
      h: "Ильина Марина",
      p: "ТК «Розовый слон»",
    },
  ];

  return (
    <>
    <div className="mx-20 my-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[24px] leading-10">Отзывы партнёров</h2>
        <button className="border border-gray-300 rounded-xl px-6 py-3 text-[#3b82f6] cursor-pointer">
          Оставить отзыв
        </button>
      </div>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        spaceBetween={24}
        slidesPerView={3}
        className="partnerSwiper"
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="border border-[#eef0f3] rounded-2xl p-10 h-60 bg-white flex flex-col justify-between  leading-6">
              <div>
                <FaQuoteLeft className="text-[#4da3df] text-xl mb-6" />

                <p className=" leading-[1.7] text-[#222] mb-5">
                  {item.des}
                </p>

                <button className="text-[#3b82f6] mb-8 cursor-pointer">
                  {item.title}
                </button>
              </div>

              <div>
                <h3 className=" font-semibold text-[#6b6b6b]">
                  {item.h}
                </h3>
                {item.p && (
                  <p className=" text-[#7b7b7b] mt-2">{item.p}</p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

   
    </>
  );
}