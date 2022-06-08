import React from 'react'
import Search from "./Search";
import Maincontent from "./Maincontent";
import Footer from "./Footer";

function Weather({ location, setLocation, searchLocation, data }) {
    return (
        <div className='container'>
            <Search
                location={location}
                setLocation={setLocation}
                searchLocation={searchLocation} />
            <Maincontent
                data={data} />
            <Footer
                data={data} />
        </div>
    )
}

export default Weather