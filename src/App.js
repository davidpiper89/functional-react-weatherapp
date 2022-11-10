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
    console.log(data.list);

    setWeathers(data.list);
  };

  const error = (err) => {
    console.log(err);
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return <>{weathers ? <Weathers weathers={weathers} /> : ""}</>;
};

export default App;
