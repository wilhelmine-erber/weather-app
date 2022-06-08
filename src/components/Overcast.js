import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Overcast() {

    const [data, setData] = useState()

    const url = `https://api.openweathermap.org/data/2.5/weather?q=Leipzig&appid=eeef9832529c00e4b3d881da4489351f&units=metric`

    const forecast = () => {
        axios.get(url).then((response) => {
            setData(response.data)
            const data = response.data

            console.log(data.sys.sunrise);
        })
    }

    useEffect(() => {
        forecast()
    }, [])

    // const calculateSunrise = () => {
    //     let t = new Date();
    //     t.setSeconds(1654570573);
    //     let formatted = moment(t).format("dd.mm.yyyy hh:MM:ss");
    // }
    // //calculateSunrise()


    return (
        <div>
            <div className="top">
                <div className="location">
                    <p>So ist das Wetter heute in Leipzig</p>
                </div>
                <div className="temp">
                    <h3>Temperatur: </h3>
                    <h3>Sonnenaufgang: { } </h3>





                    {/* {data.sys.sunrise} */}

                </div>
                <div className="description">

                </div>
            </div>
        </div>
    )
}

export default Overcast