import React from "react";

function Weather({ city, country, temp, humidity, condition, description,wind,icon }) {
  console.log(icon)
  const winddata=Math.floor(wind)    
  return (
      
    <div className="details">
      {temp.length>0 ?(
        <div>
        <p>Location : <span>{city},{country}</span></p>
      <p>Temperature: <span>{temp} ℃</span></p>
      <p className="image">Weather forecast: <span style={{marginTop:"10px"}}><img src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather forecast" /></span></p>
      <p>Humidity: <span>{humidity}%</span></p>
      <p>Condition: <span>{condition}</span></p>
      <p>wind: <span>{winddata} Km/hr</span></p>
      </div>
      ):(
        <p></p>
      )}
    
     
    </div>
  );
    
}

export default Weather;
