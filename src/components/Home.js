import React from 'react'
import '../index.css'
import Overcast from "./Overcast";

function Home({ data }) {

    const unixTimeSunrise = data.sys.sunrise
    const date = new Date(unixTimeSunrise * 1000)


    const unixTimeSunset = data.sys.sunset
    const dataSet = new Date(unixTimeSunset * 1000)


    return (
        <div className='Home-weather'>

            <div className="top-home">

                <div className="location-home">
                    <h2>{data.name}</h2>
                </div>

                <div className="temp-home">
                    <div>
                        Sonnenaufgang:

                        {data.sys ? <p>{date.toLocaleString('de-DE')}</p> : null}

                        Sonnenuntergang:
                        {data.sys ? <p>{dataSet.toLocaleString('de-DE')}</p> : null}
                    </div>
                    <div>
                        min-temp:
                        {data.main ? <p>{data.main.temp_min.toFixed()}°C</p> : null}

                        max-temp:
                        {data.main ? <p>{data.main.temp_max.toFixed()}°C</p> : null}
                    </div>
                </div>

            </div>


            <div className='Home-app'>
                <h3>Wetter</h3>
                <p>Das Wetter ist der Zustand am Himmel. Um die Erde ist eine Lufthülle, die Atmosphäre. Mit Wetter ist gemeint, wie es in dieser Lufthülle zugeht, und zwar an einem bestimmten Ort und zu einer bestimmten Zeit. Das Klima hingegen besagt, ob es an einem Ort normalerweise eher warm oder eher kalt ist, im Durchschnitt vieler Jahre. </p>
                <p>Zum Wetter gehören Wind, Stürme, Regen, Schnee und manches mehr. Das alles kommt durch die Sonne zustande. Die Hitze der Sonne über dem Meer sorgt dafür, dass Wasser verdunstet und die Feuchtigkeit in die Luft aufsteigt. Daraus werden später Wolken. Wind entsteht dadurch, dass es an manchen Stellen wärmere Luft gibt als woanders.
                </p>
            </div>



        </div>
    )
}

export default Home