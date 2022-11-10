import React from "react";
import Temp from "./Temp";
import Description from "./Description";
import Icon from "./Icon";

const Weathers = (props) => {
  return props.weathers.map((weather) => (
    <div key={weather.dt}>
      <Temp weather={weather} />
      <Description weather={weather} />
      <Icon weather={weather} />
    </div>
  ));
};

export default Weathers;
