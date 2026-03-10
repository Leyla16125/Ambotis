import { useState, useReducer } from "react";

function personReducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state > 1 ? state - 1 : state;
    default:
      return state;
  }
}

export default function Filter() {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("Москва");

  const [open2, setOpen2] = useState(false);
  const [country, setCountry] = useState("Куда");

  const [open3, setOpen3] = useState(false);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const [open4, setOpen4] = useState(false);
  const [person, dispatch] = useReducer(personReducer, 2);

  const cities = ["Москва", "Санкт-Петербург", "Казань", "Сочи"];
  const countries = [
    "Азербайджан",
    "Бахрейн",
    "Вьетнам",
    "Греция",
    "Грузия",
    "Индия",
    "Индонезия",
    "Катар",
  ];
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const [minDate, setMinDate] = useState("2026-03-01");
  const [maxDate, setMaxDate] = useState("2026-04-01");
  const [dateActive, setDateActive] = useState(false);

  function handleClick(d) {
    if (start === null) {
      setStart(d);
    } else if (end === null) {
      setEnd(d);
    } else {
      setStart(d);
      setEnd(null);
    }
  }

  return (
    <div className="flex pt-5 mx-20 sticky top-0 z-100 bg-[#f0f3fe] pb-2">
      <div className="w-64 relative z-50">
        <div
          onClick={() => {
            setOpen(!open);
            setOpen2(false);
            setOpen3(false);
            setOpen4(false);
          }}
          className={`relative  bg-white cursor-pointer transition px-4 pt-6 pb-3 flex justify-between items-center border
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
            setOpen3(false);
            setOpen4(false);
          }}
          className={`relative  bg-white cursor-pointer transition px-4 pt-6 pb-3 flex justify-between items-center border
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
          className={`relative  bg-white transition px-6 pt-6 pb-3 border  ${
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
                setOpen(false);
                setOpen2(false);
                setOpen3(false);
                setOpen4(false);
                setDateActive(true);
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
                setOpen(false);
                setOpen2(false);
                setOpen3(false);
                setOpen4(false);
                setDateActive(true);
              }}
              className="outline-none bg-transparent text-black text-[16px] cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="w-36 relative z-50">
        <div
          onClick={() => {
            setOpen3(!open3);
            setOpen(false);
            setOpen2(false);
            setOpen4(false);
          }}
          className={`relative  bg-white cursor-pointer transition px-4 pt-6 pb-3 h-16 border
            ${
              open3
                ? "border-blue-500 ring-2 ring-blue-200"
                : "border-gray-300 hover:border-gray-400"
            }`}
        >
          <span className="absolute top-2 left-4 text-xs text-gray-400">
            Ночей
          </span>

          <div className="flex justify-between items-center">
            <span className="text-black text-[18px]">
              {start && end
                ? `${Math.min(start, end)}-${Math.max(start, end)}`
                : start || ""}
            </span>

            <span className="text-gray-400 text-sm">
              {open3 ? "▲" : "▼"}
            </span>
          </div>
        </div>

        {open3 && (
          <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg p-4 w-105">
            <p className="text-gray-600 mb-3">Доступное количество ночей</p>

            <div className="grid grid-cols-10 gap-2 ">
              {days.map((item) => (
                <button
                  key={item}
                  onClick={() => handleClick(item)}
                  className={`h-10 w-10 rounded-lg border border-gray-300 
                    ${
                      (start !== null &&
                        end !== null &&
                        item >= Math.min(start, end) &&
                        item <= Math.max(start, end)) ||
                      item === start ||
                      item === end
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="w-46 relative z-50">
        <div
          onClick={() => {
            setOpen4(!open4);
            setOpen(false);
            setOpen2(false);
            setOpen3(false);
            setDateActive(false);
          }}
          className={`relative  bg-white cursor-pointer transition px-4 pt-6 pb-3 flex justify-between items-center border
            ${
              open4
                ? "border-blue-500 ring-2 ring-blue-200"
                : "border-gray-300 hover:border-gray-400"
            }`}
        >
          <span className="absolute top-2 left-4 text-xs text-gray-400">
            Туристы
          </span>

          <span className="text-black text-[18px]">{person} человека</span>

          <span className="text-gray-400 text-sm">{open4 ? "▲" : "▼"}</span>
        </div>

        {open4 && (
          <div className="absolute top-full left-0 mt-2 w-66 bg-white border border-gray-200 rounded-xl shadow-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[18px] text-black">Взрослые</p>
                <span className="text-gray-400 text-sm">18+</span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => dispatch({ type: "decrement" })}
                  className="w-12 h-12 rounded-xl bg-gray-100 text-2xl text-gray-400 hover:bg-gray-200"
                >
                  -
                </button>

                <span className="text-2xl text-black w-6 text-center">
                  {person}
                </span>

                <button
                  onClick={() => dispatch({ type: "increment" })}
                  className="w-12 h-12 rounded-xl bg-gray-100 text-2xl text-gray-400 hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <button className="ml-4 px-4 py-3 bg-[#2c5789] text-white rounded-lg hover:bg-[#386ba4] transition w-full h-16 cursor-pointer">
          Найти туры
        </button>
      </div>
    </div>
  );
}