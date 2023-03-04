import  React from 'react';

import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/route/Home/Home';
import Weather from './components/route/Weather';
import {PATHS} from './paths';

function App() {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
   <Route path={PATHS.WEATHER} element={<Weather />} />
    
    </Routes>
  );
}

export default App;
