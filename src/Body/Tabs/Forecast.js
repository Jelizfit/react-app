import TimeSelector from "./TimeSelector";
import Map from "./Map";
import { getForecast } from "../../services/apiService";
import { useEffect, useState } from "react";

function Forecast() {
  const [forecastData, setForecastData] = useState(null);
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    (async function () {
      const response = await getForecast();
      const data = await response.json();
      setForecastData(data);
    })()
  }, []);

  return (
    <>
    
      <TimeSelector 
      currentData={currentData}
      setCurrentData={setCurrentData} 
      data={forecastData} 
      />
      <Map weatherData={currentData} />
    </>
  );
}

export default Forecast;