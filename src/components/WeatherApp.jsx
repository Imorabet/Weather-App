import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import Highlight from "./Highlights";
import swal from 'sweetalert';
import axios from "axios";
import {  useState } from "react";

/**
 * * important
 * TODO: styling my shit the interface
 * @param search is the city we gon search for
 */

export default function WeatherApp() {
  const [search, setSearch] = useState("");
  const [results, setResult] = useState({});

  
   async function getData(e) {
    e.preventDefault()
    if (search===""){
      swal("Oh no", "Please enter a city name", "warning", {
        button: "got it",
      });
    }else
      {const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/weather/?q=${search}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      );
      setResult(res.data);}
    };
  
    // ? we display the API response
    
    console.log(results);
    console.log(search);
    console.log(
      `${process.env.REACT_APP_API_URL}/weather/?q=${search}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    );
  const styling=()=>{
                                       
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row gap-9 w-full justify-items-center justify-center">
        <h1 className="text text-center text-2xl">current weather</h1>
        <button className="border w-8 border-black rounded-md bg-white" onClick={styling}>
          <FontAwesomeIcon icon={solid("moon")} />
        </button>
       
      </div>
      
      <form className="flex flex-row relative" >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="enter a city name "
            className="mt-1  block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-md shadow-md placeholder-slate-400 capitalize focus:outline-none focus:border-sky-300 focus:ring-1 focus:ring-sky-300"
          />
        <button
          className="text-md font-medium text-slate-700 absolute inset "
          onClick={(e) => getData(e)}
        >
         <FontAwesomeIcon icon={solid("magnifying-glass")} />
        </button>
      </form>
      {console.log("hoe",results)}
      {results!=={} &&
    <Highlight weatherInfo={results}/>}
    </div>
  );
}
