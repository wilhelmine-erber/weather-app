import React, { useState } from "react";
import axios from 'axios'
import Navigation from "./components/Navigation";
import Weather from "./components/Weather";
import PicturesW from "./components/PicturesW";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=eeef9832529c00e4b3d881da4489351f&units=metric `

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        //console.log(response.data);
      })
      setLocation('')
    }
  }

  return (
    <Router>
      <div className="App">

        <Navigation />
        <Routes>
          <Route path="/" element={<Weather data={data} location={location}
            setLocation={setLocation}
            searchLocation={searchLocation} />} />

          <Route path="/weather" element={<Home data={data} />} />
          <Route path="/pics" element={<PicturesW />} />
          <Route path="/contact" element={<Contact />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;