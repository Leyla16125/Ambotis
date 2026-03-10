import logo from "../assets/logo.png";
import {FaVk , FaTelegramPlane } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";



function Navbar() {
  return (
    <>
    <div className="flex items-center justify-between  mt-5 mx-20">
      
      <div>
        <img className="w-36" src={logo} alt="logo" />
      </div>

      <div>
        <div className="flex gap-16">

        <ul className="flex flex-col">
          <li className="text-[#81899c] text-sm">Офис Ambotis</li>
          <li className="font-semibold cursor-pointer">Москва</li>
        </ul>

        <ul className="flex flex-col">
          <li className="text-[#81899c] text-sm">Агентствам</li>
          <li className="hover:text-[#2c5789] font-semibold cursor-pointer">+7 (495) 649-85-99 <span className="text-[#81899c] text-sm">8 (800) 333-41-31</span></li>
        </ul>

        <ul className="flex flex-col">
          <li className="text-[#81899c] text-sm">Частным лицам</li>
          <li className="hover:text-[#2c5789] font-semibold cursor-pointer">+7 (495) 170-10-40 <span className="text-[#81899c] text-sm">8 (800) 333-00-40</span></li>
        </ul>

        </div>

        <div className="flex gap-16 text-[#407bc1]"> 
          <ul className="flex flex-col">
            <li className="hover:text-[#2c5789] cursor-pointer">ONLINE</li>
          </ul>

          <ul className="flex flex-col">
            <li className="hover:text-[#2c5789] cursor-pointer">Страны</li>
          </ul>

          <ul className="flex flex-col">
            <li className="hover:text-[#2c5789] cursor-pointer">Акции</li>
          </ul>

          <ul className="flex flex-col">
            <li className="hover:text-[#2c5789] cursor-pointer">Авиа</li>
          </ul>

          <ul className="flex flex-col">
            <li className="hover:text-[#2c5789] cursor-pointer">Турагентствам</li>
          </ul>

          <ul className="flex flex-col">
            <li className="hover:text-[#2c5789] cursor-pointer">Туристам</li>
          </ul>

          <ul className="flex flex-col">
            <li className="hover:text-[#2c5789]   cursor-pointer">О нас</li>
          </ul>
        </div>
      </div>

      <div>
       <div className="flex flex-col items-end gap-4">

        <div className="flex gap-6">

          <a 
            href="https://t.me/ambotisholidaysspb"
            target="_blank"
            rel="noopener noreferrer">

            <div className="w-10 h-10 flex items-center justify-center border rounded-full text-[#81899c] hover:bg-[#229ED9] hover:text-white transition-all duration-300 cursor-pointer">
              <FaTelegramPlane size={18} href="https://t.me/ambotisholidaysspb" />
            </div>
          </a>

          <a
            href="https://chat.whatsapp.com/J3iWm5BUNx1BSCI2LSjnzY"
            target="_blank"
            rel="noopener noreferrer">
            <div className="w-10 h-10 flex items-center justify-center border rounded-full text-[#81899c] hover:bg-[#25D366] hover:text-white transition-all duration-300 cursor-pointer">
            <IoIosCall  size={18} />
          </div>
          </a>
          
          <a 
            href="https://vk.com/ambotistours"
            target="_blank"
            rel="noopener noreferrer">
          <div className="w-10 h-10 flex items-center justify-center border rounded-full text-[#81899c] hover:bg-[#4C75A3] hover:text-white transition-all duration-300 cursor-pointer">
            <FaVk size={18} />
          </div>
          </a>

        </div>

        <a
          href=""
          className="flex items-center gap-3 border border-[#81899c] px-5 py-2 rounded-md  hover:border-[#2c5789] transition-colors duration-300"
        >
          <span className="uppercase text-[11px] font-semibold leading-6 text-[#81899c] hover:text-[#2c5789] cursor-pointer">
            Личный кабинет
          </span>

          <AiOutlineArrowRight size={18} />
        </a>

       </div>
      </div>

    </div>


    <div>
      
    </div>
    </>
  );
}

export default Navbar;