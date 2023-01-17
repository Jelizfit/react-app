import { useState, useEffect } from "react";
import Map from "./Map";
import { getWeather } from "../../services/apiService";
import ErrorModal from "../../ErrorModal";
import Data from "./Data";
import { useSelector } from "react-redux";

function Now() {

  const [errorMessage, setErrorMessage] = useState(null);
  const [weatherData, setWeatherData] = useState(null)
  const searchParams = useSelector((state) => state.searchParams);
  useEffect(() => {
    (async function () {
      try {
        const response = await getWeather(searchParams);
        const data = await response.json();

        if (data.cod !== 200)
          throw Error(data.message);

        setWeatherData(data);
      } catch (error) {
        setErrorMessage(error.message);
      }
    })()
  }, [searchParams]);

  return (
    <>
      <Data data={weatherData} />
      <Map />
      <ErrorModal message={errorMessage} handleClose={() => setErrorMessage(null)} />
    </>
  );
}

export default Now;