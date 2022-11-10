import React from "react";

const Temp = (props) => {
  return <p>temp : {Math.round(props.weather.main.temp - 273.15)}° </p>;
};

export default Temp;
