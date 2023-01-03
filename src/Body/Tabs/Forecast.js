import TimeSelector from "./TimeSelector";
import Map from "./Map";
import { getForecast } from "../../services/apiService";
import { useEffect, useState } from "react";

function Forecast() {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    (async function () {
      const response = await getForecast();
      const data = await response.json();
      setForecastData(data);
      // console.log('response', response)
    })()
  }, []);

  return (
    <>
    
      <TimeSelector data={forecastData} />
      <Map />
    </>
  );
}

export default Forecast;