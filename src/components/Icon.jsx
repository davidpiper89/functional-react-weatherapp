import React from 'react';

const Icon = (props) => {
    return <p><img src={`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`}></img></p>;
    
}
 
export default Icon;