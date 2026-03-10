import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import {MdOutlineFlight,MdOutlinePercent,MdOutlineMarkEmailUnread,} from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import { IoPersonSharp, IoCallOutline } from "react-icons/io5";
import { SlDirections } from "react-icons/sl";

function Menu() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const isExpanded = open || hovered;

  return (
    <div
      className={`fixed left-0 top-0 z-999 h-full bg-white transition-all duration-300 ${
        isExpanded ? "w-82" : "w-20"
      } p-6 flex flex-col gap-6 overflow-hidden`}
    >
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex items-center gap-4 px-2 py-3 min-w-max"
      >
        {open ? (
          <IoMdClose size={32} className="text-[#2e8acc] shrink-0" />
        ) : (
          <IoMdMenu size={32} className="text-[#2e8acc] shrink-0" />
        )}

      </div>

      <div
        className="flex flex-col gap-6"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="group/item flex items-center gap-4 cursor-pointer px-2 py-3 hover:bg-[#1c97dd] min-w-max">
          <MdOutlineFlight size={24} className="text-[#a1abc7]  group-hover/item:text-white"/>
          <p
            className={`transition-all duration-200 whitespace-nowrap text-[16px] text-[#2d2d2d] ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}
          >
            Онлайн-бронирование
          </p>
        </div>

        <div className="group/item flex items-center gap-4 cursor-pointer px-2 py-3 hover:bg-[#1c97dd] min-w-max">
          <FaExchangeAlt size={24} className="text-[#a1abc7]  group-hover/item:text-white"/>
          <p
            className={`transition-all duration-200 whitespace-nowrap text-[16px] text-[#2d2d2d] ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}
          >
            Курсы валюты
          </p>
        </div>

        <div className="group/item flex items-center gap-4 cursor-pointer px-2 py-3 hover:bg-[#1c97dd] min-w-max">
          <IoPersonSharp size={24} className="text-[#a1abc7]  group-hover/item:text-white"/>
          <p
            className={`transition-all duration-200 whitespace-nowrap text-[16px] text-[#2d2d2d] ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}
          >
            Личный кабинет
          </p>
        </div>

        <div className="group/item flex items-center gap-4 cursor-pointer py-3 hover:bg-[#1c97dd] min-w-max">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1c97dd] text-white transition-all duration-200 group-hover/item:bg-white group-hover/item:text-[#1c97dd] ">
            <MdOutlinePercent size={24} />
          </div>
          <p
            className={`transition-all duration-200 whitespace-nowrap text-[16px] text-[#2d2d2d] ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}
          >
            Акции
          </p>
        </div>

        <div className="group/item flex items-center gap-4 cursor-pointer px-2 py-3 hover:bg-[#1c97dd] min-w-max">
          <MdOutlineMarkEmailUnread size={24} className="text-[#a1abc7]  group-hover/item:text-white"/>
          <p
            className={`transition-all duration-200 whitespace-nowrap text-[16px] text-[#2d2d2d] ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}
          >
            Подписка на рассылку
          </p>
        </div>

        <div className="group/item flex items-center gap-4 cursor-pointer px-2 py-3 hover:bg-[#1c97dd] min-w-max">
          <SlDirections size={24} className="text-[#a1abc7]  group-hover/item:text-white"/>
          <p
            className={`transition-all duration-200 whitespace-nowrap text-[16px] text-[#2d2d2d] ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}
          >
            Рекламные туры
          </p>
        </div>

        <div className="group/item flex items-center gap-4 cursor-pointer px-2 py-3 hover:bg-[#1c97dd] min-w-max">
          <IoCallOutline size={24}className="text-[#a1abc7] group-hover/item:text-white" />
          <p
            className={`transition-all duration-200 whitespace-nowrap text-[16px] text-[#2d2d2d] ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}
          >
            Контактная информация
          </p>
        </div>
      </div>
    </div>
  );
}

export default Menu;