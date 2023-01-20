import { useState, useEffect } from "react";
import Map from "./Map";
import { getWeather } from "../../services/apiService";
import Data from "./Data";
import { useSelector } from "react-redux";
import { setErrorMessage } from '../../services/stateService';
import { useDispatch } from "react-redux";

function Now() {
  const dispatch = useDispatch();
  const [weatherData, setWeatherData] = useState(null)
  const searchParams = useSelector((state) => state.searchParams);

  useEffect(() => {
    (async function () {
      try {
        // Запросы на сервер и при удачном раскладе возвращают Response object 
        // Этот объект хранит в себе статус и многое другое.
        // Также хранит данные в буфере. 
        const response = await getWeather(searchParams);
        const data = await response.json();

        // json() функция берет этот буфер и превращает его в js объект. 
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
      <Map />
      
    </>
  );
}

export default Now;