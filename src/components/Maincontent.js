import React from 'react'

function Maincontent({ data }) {
    return (
        <div>
            <div className="top">
                <div className="location">
                    <p>{data.name}</p>
                </div>
                <div className="temp">
                    {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
                </div>
                <div className="description">
                    {data.weather ? <p className="bold">{data.weather[0].main}</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Maincontent