import { useState, useEffect } from "react";
import Map from "./Map";
import Data from "./Data";
import { getWeather } from "../../services/apiService";
import { useSelector, useDispatch } from "react-redux";
import { setErrorMessage } from '../../services/stateService';

function Now() {
  const dispatch = useDispatch();
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
        dispatch(setErrorMessage(error.message));
      }
    })()
  }, [dispatch, searchParams]);

  return (
    <>
      <Data data={weatherData} />
      <Map weatherData={weatherData}/>
      
    </>
  );
}

export default Now;