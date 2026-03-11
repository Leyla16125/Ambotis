import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


export default function Destinations() {
    const destinations = [
        {
            img: "../../public/img/direction-greece1500.jpg",
            title: "Греция",
            desc: "Корфу, Афины, Аттика, Крит, Пелопоннес, Родос, Халкидики"
        },
        {
            img: "../../public/img/direction-bali1500.jpg",
            title: "Индонезия",
            desc: "Джимбаран, Кута, Легиан, Нуса-Дуа, Санур, Семиньяк"
        },
        {
            img:"../../public/img/direction-mauritian1500.jpg",
            title:"Маврикий"
        },
        {
            img:"../../public/img/direction-maldives1500.jpg",
            title: "Мальдивы",
            desc: "Мальдивы"
        },
        {
            img:"../../public/img/direction-zanzibar1500.jpg",
            title: "Танзания (Занзибар)",
            desc: "Занзибар"
        },
        {
            img:"../../public/img/direction-istanbul1500.jpg",
            title: "Турция",
            desc: "Анкара, Ялова"
        }
    ]


    return(
     
         <div className="mx-20 my-10 pb-5 cursor-pointer">

        <h2 className="text-[24px] leading-10 py-10">Популярные направления</h2>
        <Swiper
            spaceBetween={20}
            slidesPerView={4.5}
        >

            {destinations.map((destination, index) => (
            <SwiperSlide key={index}>

                <div className="relative h-80 rounded-xl overflow-hidden group">

                <img
                    src={destination.img}
                    className="w-full h-full object-cover"
                />


                <div className="absolute bottom-6 left-6 text-white">

                    <h3 className="text-2xl font-bold">
                    {destination.title}
                    </h3>

                    <p className="text-sm mt-2 max-w-55">
                    {destination.desc}
                    </p>

                </div>

                </div>

            </SwiperSlide>
            ))}

        </Swiper>

        </div>
        )}