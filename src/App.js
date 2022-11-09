import React, { useEffect, useState } from "react";
import axios from "axios";
import Weathers from "./components/Weathers";

const App = () => {
  const [weathers, setWeathers] = useState();

  const success = async (evt) => {
    const { latitude, longitude } = evt.coords;
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=40ce40e3254302084831efa372ed8341`
    );
  
    setWeathers(data.list);
  };

  const error = (err) => {
    console.log(err);
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error);
  };

  return (
    <>
      <div>
        <h1>Your Weather</h1>
        <button id="getMyWthr" onClick={getLocation}>
          Get My Weather
        </button>
      </div>

      {weathers ? <Weathers weathers={weathers} /> : ""}
    </>
  );
};

export default App;
