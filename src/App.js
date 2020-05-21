import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./Weather";

function App() {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [description, setDescription] = useState([]);
  const [error, setError] = useState(false);

  const findCity = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${state} &appid=301d07fe957b22588706806d38ff89d5`
      )
      .then((res) => {
        console.log(res)
        const weatherData = res.data;
        console.log(weatherData)
        setDescription({
          country: weatherData.sys.country,
          city: weatherData.name,
          Temp: weatherData.main.temp,
          humidity: weatherData.main.humidity,
          description: weatherData.weather[0].description,
          wind: weatherData.wind.speed,
        });
      })
      .catch(() => {
        setError(true);
      });
  };
  const data = [];
  const dumydata = [];
  if (description.Temp > 0) {
    const tempdata = Math.floor(309 - 273.15);
    data.push(tempdata);
  } else {
    dumydata.push("error");
  }

  return (
    <div className="main">
      <div className="weather">
        <i className="fas fa-cloud-sun-rain"></i>
        <h1>Weather Details</h1>
      </div>
      <div className="second">
        <form onSubmit={findCity}>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City.."
          />
          <input
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="Country.."
          />
          <button type="submit">Get Weather</button>
        </form>
        {
          error && <div style={{color: `red`}}>OOPS!!! No City is found with your details</div>
        }
        <Weather
          city={description.city}
          country={description.country}
          humidity={description.humidity}
          condition={description.description}
          description={description}
          wind={description.wind}
          temp={data}
        />
      </div>
    </div>
  );
}

export default App;
