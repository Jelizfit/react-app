import { useState, useEffect } from "react";
import TimeSelector from "./TimeSelector";
import Map from "./Map";
import { getWeather } from "../../services/apiService";
import ErrorModal from "../../ErrorModal";

function Now() {

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const weather = await getWeather();
        const response = await weather.json();
        console.log('response', response);
        if (response.cod !== 200)
          throw Error(response.message);
      } catch (error) {
        setErrorMessage(error.message);
      }
    })()
  }, []);

  return (
    <>
      <TimeSelector id="now" />
      <Map />
      <ErrorModal message={errorMessage} handleClose={() => setErrorMessage(null)} />
        </>
  );
}

export default Now;