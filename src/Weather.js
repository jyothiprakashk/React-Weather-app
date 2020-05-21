import React from "react";

function Weather({ city, country, temp, humidity, condition, description,wind }) {

  const winddata=Math.floor(wind)    
  return (
      
    <div className="details">
      {temp.length>0 ?(
        <div>
        <p>
        Location : <span>{city},{country}</span>
      </p>
      <p>Temperature: <span>{temp} ℃</span></p>
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
