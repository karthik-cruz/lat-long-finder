import './App.css';
import {useState,useEffect} from 'react';

function App() {

  const [location, setLocation] = useState({});

  useEffect(()=>{
    getLocation();
  },[])

  const getLocation = () =>{
    navigator.geolocation.getCurrentPosition((position)=>{
      const {latitude,longitude} = position.coords;
      setLocation({latitude,longitude});
    
  })}

  return (
    <div className="App">
      <h1>GPS Location</h1>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
      
    </div>
  );
}

export default App;
