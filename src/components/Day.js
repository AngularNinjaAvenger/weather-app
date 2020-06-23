import React from 'react';

function Day(props) {
    console.log(props)
    return (
        <div className="weather-day-info-container">
        <h1>{props.data.name}</h1>
        <h1>{props.data.temp ? Math.floor(props.data.temp):0}</h1>
        <div className="weather-info-type-wrapper">
          <div className="weather-image-wrapper">
            {
              props.data.icon ? (
                <img src={`http://openweathermap.org/img/wn/${props.data.icon}.png`} width={"100%"} height={"100%"}/>
              ):""
            }
          </div>
          <h2>{props.data.weather_desc ? props.data.weather_desc:"loading...."}</h2>
        </div>
      </div>
    
    )
}

export default Day;
