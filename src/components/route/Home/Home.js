import React, { useState } from 'react';
import  './Home.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Weather from '../Weather';

const Home = () => {
  const navigate = useNavigate();
 const [query , setQuery] = useState('');

 
 
 

const handleSearch = async (e)=>{
  e.preventDefault();

  if(query==''){
    alert('enter city name');
    return;
  }
  try{
    
    const key='2de453961f24473791742406230403'
    const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=new+${query})`

    const response =  await axios.get(url);
    console.log(response.data.location);
    const city = response.data.location.name;
   //  setData(response.location.Search);
   console.log("city",city);
   navigate(`/weather/${city}`);
} catch(error){
  console.log('error');
}

  
};


  return (
    <div className='paper'>
      <h1>WEATHER API</h1>
      <input type='text' placeholder='enter location' className='input' onChange={(e)=>setQuery(e.target.value)} ></input> <br/>
       <button type='submit' className='btn' onClick={handleSearch} >Search</button>
    </div>
  )
}

export default Home;