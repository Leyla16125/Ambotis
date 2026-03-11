import { FaFire } from "react-icons/fa";
import { useState } from "react";

export default function ResortsSection() {

  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("Москва");

  const resorts = [
    {
      img: "../../public/img/8527_50598_photo_-1276977399.jpg",
      country: "Индонезия",
      name: "MAYA SANUR RESORT & SPA",
      date: "16.04.2026 на 13 ночей, BB",
      price: "201 221 ₽",
      room: "WONDERFUL GARDEN VIEW",
      stars: 5
    },
    {
      img: "../../public/img/8489_44724_photo_-384559975.jpg",
      country: "Танзания (Занзибар)",
      name: "KENDWA ROCKS",
      date: "08.06.2026 на 10 ночей, BB",
      price: "151 617 ₽",
      room: "ECONOMY ROOM",
      stars: 3
    },
    {
      img: "../../public/img/13620_104399_photo_576962186.jpg",
      country: "Индонезия",
      name: "CANDI BEACH RESORT & SPA",
      date: "02.06.2026 на 12 ночей, BB",
      price: "154 626 ₽",
      room: "DELUXE GARDEN ROOM",
      stars: 4
    },
    {
      img: "../../public/img/7875_165477_photo_579874154.jpg",
      country: "Маврикий",
      name: "LE MERIDIEN ILE MAURICE",
      date: "05.08.2026 на 11 ночей, HB",
      price: "269 110 ₽",
      room: "JUNIOR SUITE KING",
      stars: 5
    }
  ];

  return (
    <section className="mx-20 mt-20">

      <div className="flex items-center gap-6 mb-6">

        <div className="flex items-center gap-2 text-[24px] leading-10 font-medium">
          <FaFire className="text-orange-500" />
          Выгодно сегодня
        </div>

        <span className="text-[#81899c] leading-6 text-[15px] ml-6">
          Вылет из
        </span>

        <div
          onClick={() => setOpen(!open)}
          className="relative border border-[#e9ecf1] hover:border-black px-4 py-1 flex items-center gap-2 cursor-pointer w-50"
        >
          {city}
          <span className="pl-20 text-[#e9ecf1] hover:text-black ">{open ? "▲" : "▼"}</span>

          {open && (
            <div className="absolute left-0 top-full w-full bg-white border rounded-lg mt-1 shadow z-50 text-black ">   
              <div
                onClick={() => { setCity("Москва"); setOpen(false); }}
                className="p-2  cursor-pointer"
              >
                Москва
              </div>
            </div>
          )}

        </div>

      </div>


      <div className="grid grid-cols-4 gap-6">

        {resorts.map((item, index) => (
          <div key={index} className="group cursor-pointer">

            <div className="relative overflow-hidden rounded-xl">

              <img
                src={item.img}
                className="w-full h-55 object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute top-3 left-3 bg-blue-700 text-white text-xs px-3 py-1 rounded">
                {item.country}
              </div>

            </div>

            <div className="flex items-center mt-3 text-orange-500">
              {"★".repeat(item.stars)}
            </div>

            <h3 className="font-semibold mt-2 hover:text-[#407bc1]">
              {item.name}
            </h3>

            <p className="text-[#81899c] text-sm mt-1 hover:text-[#407bc1]">
              {item.date}
            </p>

            <div className="mt-4 border border-[#e9ecf1]  p-1 flex justify-between items-center">

              <span className="text-[#407bc1] hover:text-[#407bc1] font-bold text-lg">
                {item.price}
              </span>

              <span className="text-xs text-[#81899c]">
                {item.room}
              </span>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}