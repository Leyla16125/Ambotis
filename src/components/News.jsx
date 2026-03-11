import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoSend } from "react-icons/io5";



import "swiper/css";
import "swiper/css/navigation";

export default function News() {
  const news = [
    {
      date: "25.020.2026",
      title: "Реновации в отелях о. Бали",
      des: "Актуальная информация о текущих и планируемых работах в отелях",
    },
    { 
      date: "25.020.2026",
      title: "Реновационные работы в отелях Таиланда",
      des: "Актуальная информация о сроках ремонтных и строительных работ в ряде отелей",
    },
    {
      date: "25.020.2026",
      title: "Реновации в отелях о. Бали",
      des: "Плановые технические работы",
    },
    {
      date: "25.020.2026",
      title: "Бахрейн: информация по пляжу отеля SOLYMAR HOTEL & BEACH 5*",
      des: "Плановые технические работы",
    },
    {
      date: "25.020.2026",
      title: "Реновации в отелях о. Бали",
      des: "Актуальная информация о текущих и планируемых работах в отелях",
    },
    {
      date: "25.020.2026",
      title: "Реновационные работы в отелях Таиланда",
      des: "Актуальная информация о сроках ремонтных и строительных работ в ряде отелей",
    },
  ];

  return (
    <>
   <div className="mx-20 my-10">

    <Swiper
      navigation={true}
      modules={[Navigation]}
      loop={true}
      spaceBetween={24}
      slidesPerView={3}
    >

      {news.map((item, index) => (
        <SwiperSlide key={index}>

          <div className="border border-[#eef0f3] rounded-2xl p-10 h-60 bg-white flex flex-col justify-between">

            <span className="text-[#6b7a99] text-sm">
              {item.date}
            </span>

            <h3 className="text-[20px] font-semibold leading-7 text-[#1f2937]">
              {item.title}
            </h3>

            <p className="text-[#6b7a99] text-[15px] leading-6">
              {item.des}
            </p>

          </div>

        </SwiperSlide>
      ))}

    </Swiper>

</div>

    <div className="mx-20 bg-[#e1edff] rounded-md px-10 py-4 flex items-center justify-left gap-8">

      <h2 className="text-[18px] font-semibold">
        Подпишитесь на рассылку и получайте новости первыми
      </h2>

      <div className="relative w-100">

        <MdOutlineMarkEmailUnread className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3b82f6] text-xl" />

        <input
          type="email"
          placeholder="Ваш Email"
          className="w-full h-14 rounded-xl bg-white pl-12 pr-12 outline-none"
        />

        <IoSend className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3b82f6] text-xl cursor-pointer" />

      </div>

    </div>
    </>
  );
}