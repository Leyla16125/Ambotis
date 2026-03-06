export default function Holidays() {
  return (
    <section className="mx-20 mt-24 flex items-center gap-16">

      <div className="relative w-105 h-75">

        <img
          src="src/assets/about.webp"
          className="absolute left-0 top-0 w-[320px] h-55 object-cover rounded-xl"
        />
      </div>

      <div className="max-w-175">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-3xl font-semibold">
            Туроператор Ambotis Holidays
          </h2>

          <a
            href="#"
            className="text-blue-600 flex items-center gap-2 hover:gap-3 transition-all"
          >
            Подробнее →
          </a>

        </div>

        <p className="text-gray-600 leading-7">
          Сегодня Ambotis Holidays обладает центральным офисом в Москве, а также офисами в Санкт-Петербурге, Ростове-на-Дону, Самаре и Казани. Сначала Ambotis Holidays позиционировался как туроператор по Греции, но сейчас количество направлений расширилось. Компания предлагает туры в Грецию, а также на остров Кипр, Шри-Ланку, Занзибар (Танзания), в Индонезию, ОАЭ, Мальдивы, Маврикий, Сейшельские острова, в Сингапур, Малайзию, Вьетнам, Катар и Турцию.
        </p>

      </div>

    </section>
  );
}