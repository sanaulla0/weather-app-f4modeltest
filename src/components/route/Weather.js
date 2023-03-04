import React,{useState , useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {Home} from '../route/Home/Home';
import { PATHS } from '../../paths';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import './Weatcher.css';
// import { store } from '../store';
import { SetTemperatureUnit } from '../store/action';




const Weather = () => {
 const temperatureUnit = useSelector((state)=> state);
 // const temperatureUnit = useSelector(state => state.unit);

const dispatch = useDispatch();

  const { city } = useParams();
  const formattedCity = city.replace(/\s+/g, '+');
  const [data, setData] = useState('');
  const [error, setError] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      const key = '2de453961f24473791742406230403';
      const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${formattedCity})}`;
      try {
        const response = await axios.get(url);
        console.log(response);
        setData(response.data);
        if(data.error){
          setError(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [city]);
   const unit = useSelector(state => state.unit);
   const temperature = data ? (unit === 'c' ? data.current.temp_c : data.current.temp_f) : null;

   if (error || Object.keys(data).length === 0) {
    alert("Location Not Found.. !");
    return (window.location.href = "/");
  }

   const change={
    width: "100%",
    height: "100vh",
      background: "white",
      color : "black",
       textAlign : "center",
       
   };

   const handleTemperatureUnitChange = (event) => {
    dispatch(SetTemperatureUnit(event.target.value));
  };

  return (
    <div style={change}>
      {data ? (
        <div>

        
         <h1>Weather Data</h1>
         <div className='temp'>
         <input type="checkbox" value="c"  name="temperatureUnit" onClick={handleTemperatureUnitChange}
            
              />°Celcius
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
         <input type="checkbox" value="f" name="temperatureUnit" onClick={handleTemperatureUnitChange}
              
               />°Fareinheight
        </div>
         <div className='gettext'>
         <h3>Location : {data.location.name}</h3>
          <h3>Temperature : {temperature}°{unit.toUpperCase()}</h3>
          <h3>Condition : {data.current.condition.text}</h3>
          <img src={data.current.condition.icon} width="100px" alt="icon" />
           <h3>Feels Like : {data.current.feelslike_c}°C</h3>
           <h3>Feels Like : {data.current.feelslike_f }°F</h3>
           <h3>Humidity : {data.current.humidity}</h3>
           <h3> Wind_Degree : {data.current.wind_degree}</h3>
           <h3>Wind Speed : {data.current.wind_kph}</h3>
           <h3>Last_Updated : {data.current.last_updated }</h3>
                </div>

        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
      
  )
}

export default Weather;