import { useState } from "react";

export default function Filter() {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("Москва");

  const [open2, setOpen2] = useState(false);
  const [country, setCountry] = useState("Куда");


  const cities = ["Москва", "Санкт-Петербург", "Казань", "Сочи"];
  const countries = ["Азербайджан","Бахрейн","Вьетнам","Греция","Грузия","Индия","Индонезия","Катар",];

  const [minDate, setMinDate] = useState("2026-03-01");
  const [maxDate, setMaxDate] = useState("2026-04-01");
  const [dateActive, setDateActive] = useState(false);

  return (
    <div className="flex pt-5 mx-20 sticky top-0 z-100 bg-[#f0f3fe] pb-2">
      <div className="w-64 relative z-50">
        <div
          onClick={() => {
            setOpen(!open);
            setOpen2(false);
            setDateActive(false);
          }}
          className={`relative rounded-xl bg-white cursor-pointer transition px-4 pt-6 pb-3 flex justify-between items-center border
            ${
              open
                ? "border-blue-500 ring-2 ring-blue-200"
                : "border-gray-300 hover:border-gray-400"
            }`}
        >
          <span className="absolute top-2 left-4 text-xs text-gray-400">
            Откуда
          </span>

          <span className="text-black text-[18px]">{city}</span>

          <span className="text-gray-400 text-sm">{open ? "▲" : "▼"}</span>
        </div>

        {open && (
          <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow overflow-hidden">
            {cities.map((c, index) => (
              <div
                key={index}
                onClick={() => {
                  setCity(c);
                  setOpen(false);
                }}
                className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
              >
                {c}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-64 relative z-50">
        <div
          onClick={() => {
            setOpen2(!open2);
            setOpen(false);
            setDateActive(false);
          }}
          className={`relative rounded-xl bg-white cursor-pointer transition px-4 pt-6 pb-3 flex justify-between items-center border
            ${
              open2
                ? "border-blue-500 ring-2 ring-blue-200"
                : "border-gray-300 hover:border-gray-400"
            }`}
        >
          <span className="absolute top-2 left-4 text-xs text-gray-400">
            Куда
          </span>

          <span className="text-black text-[18px]">{country}</span>

          <span className="text-gray-400 text-sm">{open2 ? "▲" : "▼"}</span>
        </div>

        {open2 && (
          <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow overflow-hidden">
            {countries.map((c, index) => (
              <div
                key={index}
                onClick={() => {
                  setCountry(c);
                  setOpen2(false);
                }}
                className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
              >
                {c}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-84 relative z-50 -ml-px">
        <div
          className={`relative rounded-xl bg-white transition px-6 pt-6 pb-3 border  ${
            dateActive
              ? "border-blue-500 ring-2 ring-blue-200"
              : "border-gray-300 hover:border-gray-400"
          }`}
        >
          <span className="absolute top-2 left-6 text-xs text-gray-400">
            Период вылета
          </span>

          <div className="flex items-center gap-2 mt-1">
            <input
              type="date"
              value={minDate}
              onChange={(e) => setMinDate(e.target.value)}
              onFocus={() => {
                setDateActive(true);
                setOpen(false);
                setOpen2(false);
              }}
              className="outline-none bg-transparent text-black text-[16px] cursor-pointer"
            />

            <span className="text-black">-</span>

            <input
              type="date"
              value={maxDate}
              min={minDate}
              onChange={(e) => setMaxDate(e.target.value)}
              onFocus={() => {
                setDateActive(true);
                setOpen(false);
                setOpen2(false);
              }}
              className="outline-none bg-transparent text-black text-[16px] cursor-pointer"
            />
          </div>
        </div>
      </div>

      

    </div>
  );
}