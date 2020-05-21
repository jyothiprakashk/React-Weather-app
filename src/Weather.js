import React from "react";

function Weather({ city, country, temp, humidity, condition, description,wind }) {
    // console.log(temp==="NaN")
  return (
      
    <div className="details">
    
      <p>
        Location : <span>{city}   {country}</span>
      </p>
      <p>Temperature: <span>{temp}</span></p>
      <p>Humidity: <span>{humidity}</span></p>
      <p>Condition: <span>{condition}</span></p>
      <p>wind: <span>{wind}</span></p>
    </div>
  );
}

export default Weather;
