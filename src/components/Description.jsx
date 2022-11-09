import React from 'react';

const Description = (props) => {
    
    return <p>Description : {props.weather.weather[0].description} </p>  ;
    
}
 
export default Description;