import { useEffect } from "react";
import TimeSelector from "./TimeSelector";
import Map from "./Map";
import { getWeather } from "../../services/apiService";

function Now () {

    useEffect(() => {
        (async function () {
          const weather = await getWeather();
          const response = await weather.json();
          console.log('response', response)
        })()
      }, []);
    
    return (
        <>
          <TimeSelector id="now" />
          <Map />
        </>
    );
}

export default Now;