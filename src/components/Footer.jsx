import { FaTelegramPlane, FaWhatsapp, FaVk } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-[#eef0fa] px-20 py-10 mt-10">
      <div className="flex justify-between">

        <div className="max-w-[320px]">
          <h2 className="text-[16px] font-semibold mb-4">AMBOTIS HOLIDAYS</h2>

          <p className="text-[#6f7690] leading-7 mb-4">
            © Все права защищены.
            <br />
            Информация сайта защищена законом об
            <br />
            авторских правах.
          </p>

          <p className="mb-10">
            Разработка сайта —
            <span className="text-[#407bc1] cursor-pointer">«Телемарк»</span>
          </p>

          <div className="text-[#4e556f] leading-7">
            <p>Мы в реестре туроператоров</p>
            <p>
              ООО «АМБ Групп» РТО 020739
            </p>
            <p>
              ООО «А КЛУБ» РТО 024223
            </p>
          </div>
        </div>

        <div>
          <p className="text-[#81899c] mb-1">Агентствам</p>
          <p className="text-[16px] font-semibold mb-6">
            +7 (495) 649-85-99
            <span className="text-[#81899c] ml-3 text-[14px]">
              8 (800) 333-41-31
            </span>
          </p>

          <p className="text-[#81899c] mb-1">Частным лицам</p>
          <p className="text-[18px] mb-6">
            +7 (495) 170-10-40
            <span className="text-[#81899c] ml-3">
              8 (800) 333-00-40
            </span>
          </p>

          <p className="text-[#407bc1] mb-6 cursor-pointer">Контакты</p>

          <div className="flex gap-5">

            <a
              href="https://t.me/ambotisholidaysspb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 flex items-center justify-center border rounded-full text-[#81899c] hover:bg-[#229ED9] hover:text-white transition-all duration-300 cursor-pointer">
                <FaTelegramPlane size={16} />
              </div>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 flex items-center justify-center border rounded-full text-[#81899c] hover:bg-[#25D366] hover:text-white transition-all duration-300 cursor-pointer">
                <IoIosCall size={16} />
              </div>
            </a>

            <a
              href="https://vk.com/ambotistours"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 flex items-center justify-center border rounded-full text-[#81899c] hover:bg-[#4C75A3] hover:text-white transition-all duration-300 cursor-pointer">
                <FaVk size={16} />
              </div>
            </a>

          </div>
        </div>

        <div>
          <p className="text-[18px] mb-4">Курс валют</p>

          <div className="flex gap-3 mb-4">
            <span>09.03.2026</span>
            <span className="text-[#81899c] cursor-pointer">Архив</span>
          </div>

          <div className="flex gap-10 mb-10">
            <div className="flex gap-3 items-center">
              <span className="text-[#81899c]">USD</span>
              <span className="font-semibold">82,32</span>
            </div>

            <div className="flex gap-3 items-center">
              <span className="text-[#81899c]">EUR</span>
              <span className="font-semibold">95,51</span>
            </div>
          </div>

          <p className="text-[#407bc1] mb-6 cursor-pointer">
            Подписка на рассылку
          </p>

          <p className="text-[#4e556f] cursor-pointer">
            Политика защиты и обработки
            <br />
            персональных данных
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;