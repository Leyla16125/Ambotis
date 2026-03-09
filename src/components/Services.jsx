import { FaPlaneDeparture, FaTicketAlt, FaSuitcaseRolling } from "react-icons/fa";
import { MdOutlineCorporateFare } from "react-icons/md";
import { GiChurch } from "react-icons/gi";

function Services() {
  const services = [
    {
      id: 1,
      icon: <FaPlaneDeparture size={38} />,
      title: "Пакетные туры",
    },
    {
      id: 2,
      icon: <FaTicketAlt size={38} />,
      title: "Авиабилеты\nна все направления",
    },
    {
      id: 3,
      icon: <FaSuitcaseRolling size={38} />,
      title: "Корпоративный\nтуризм",
    },
    {
      id: 4,
      icon: <MdOutlineCorporateFare size={38} />,
      title: "Наземное\nобслуживание",
    },
    {
      id: 5,
      icon: <GiChurch size={38} />,
      title: "Паломническая\nслужба",
    },
  ];

  return (
    <div className="w-full px-20 mt-10">
      <h2 className="text-[26px] font-semibold text-black mb-6">Услуги</h2>

      <div className="flex gap-4 flex-wrap">
        {services.map((item) => (
          <div
            key={item.id}
            className="group relative flex-1 min-w-45 h-44 bg-[#eef3fb] rounded-[18px] overflow-hidden cursor-pointer flex flex-col items-center justify-center px-3"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-0 h-0 rounded-full bg-white opacity-0 transition-all duration-500 ease-out group-hover:w-28 group-hover:h-28 group-hover:opacity-100"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="text-[#2f6fbd] mb-4">
                {item.icon}
              </div>

              <p className="text-[#2c2c2c] text-[16px] font-semibold text-center leading-[1.3] whitespace-pre-line max-w-42">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;