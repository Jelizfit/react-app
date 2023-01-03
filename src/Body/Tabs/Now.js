import { useState, useEffect } from "react";
import Map from "./Map";
import { getWeather } from "../../services/apiService";
import ErrorModal from "../../ErrorModal";
import Data from "./Data";

function Now() {

  const [errorMessage, setErrorMessage] = useState(null);
  const [weatherData, setWeatherData] = useState(null);


  useEffect(() => {
    (async function () {
      try {
        const response = await getWeather();
        const data = await response.json();
        console.log('response', response);
        if (data.cod !== 200)
          throw Error(data.message);

        setWeatherData(data);
      } catch (error) {
        setErrorMessage(error.message);
      }
    })()
  }, []);

  return (
    <>
      <Data data={weatherData} />
      <Map />
      <ErrorModal message={errorMessage} handleClose={() => setErrorMessage(null)} />
    </>
  );
}

export default Now;