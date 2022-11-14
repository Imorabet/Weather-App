import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function InputField({ newSearch }) {
  const [input, setInput] = useState("");
  const SearchWeather = (e) => {
    e.preventDefault();
    newSearch(input);
  };

  return (
      <form className="flex flex-row relative" >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="enter a city name "
            className="mt-1  block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-md shadow-md placeholder-slate-400 capitalize focus:outline-none focus:border-sky-300 focus:ring-1 focus:ring-sky-300"
          />
        <button
          className="text-md font-medium text-slate-700 absolute inset "
          onClick={(e) => SearchWeather(e)}
        >
         <FontAwesomeIcon icon={solid("magnifying-glass")} />
        </button>
      </form>
  );
}
