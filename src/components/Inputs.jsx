import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Inputs (props){
    const { updateCity, UpdateWeather } = props;
    return (
      
        <form className="flex flex-row relative text-white bg-slate-800" onSubmit={UpdateWeather}>
          <input
            type="text"
            onChange={(e) => updateCity(e.target.value)}
            placeholder="enter a city name "
            className="mt-1  block w-full px-3 py-2 text-slate-800 bg-white border border-slate-300 rounded-md text-md shadow-md placeholder-slate-400 capitalize focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
          />
        <button
          className="text-md font-medium text-slate-700 absolute inset"
          type={"submit"}
        >
         <FontAwesomeIcon icon={solid("magnifying-glass")} />
        </button>
      </form>
     
    );
  };