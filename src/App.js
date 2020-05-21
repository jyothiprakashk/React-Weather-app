import React,{useState} from 'react';
import './App.css';
import axios from 'axios'
import Weather from './Weather'

function App() {
  
  const [city,setCity]=useState("")
  const [state,setState]=useState("")
  const [description,setDescription]=useState([])
  
  const findCity=(e)=>{
    e.preventDefault()
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${state} &appid=301d07fe957b22588706806d38ff89d5`)
  .then(res=> {
    const weatherData=res.data
    setDescription({
      country:weatherData.sys.country,
      city:weatherData.name,
      Temp:weatherData.main.temp,
      humidity:weatherData.main.humidity,
      description:weatherData.weather[0].description,
      wind:weatherData.wind.speed
    })
  }).catch(()=> {
    console.log("error")
  })
  };
  const data=[]
  if (description.Temp>0) {
      const tempdata=Math.floor((( description.Temp - 273.15) * 9/5) + 32)
      data.push(tempdata)
  }else {
    console.log("")
  }
  
  return (
    <div className="main">
    <h1>Weather Details</h1>
    <div className="second">
    <form onSubmit={findCity}>
        <input value={city} onChange={(e)=>setCity(e.target.value)} placeholder="City.." />
        <input value={state} onChange={(e)=>setState(e.target.value)} placeholder="Country.." />
        <button type="submit">Get Weather</button>
    </form>
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
