import React from 'react'

function Footer({ data }) {
    return (
        <div className='Footer'>
            {data.name != undefined &&
                <div className="bottom">
                    <div className="feels">
                        {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°C</p> : null}
                        <p>Feels like</p>
                    </div>
                    <div className="humidity">
                        {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
                        <p>Humidity</p>
                    </div>
                    <div className="wind">
                        {data.main ? <p className="bold">{data.wind.speed} MPH</p> : null}
                        <p>Winds</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Footer