import React from 'react';

function Day(props) {
    return (
        <div className="weather-day-info-container">
        <h1>{props.day}</h1>
        <h1>12*</h1>
        <div className="weather-info-type-wrapper">
          <div className="weather-image-wrapper">
            img
          </div>
          <h2>{"WEATHER DESC"}</h2>
        </div>
      </div>
    
    )
}

export default Day;
