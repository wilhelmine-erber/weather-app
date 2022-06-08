import React, { useState } from 'react'
import './home.css'

function PicturesW() {

    const [images, setImages] = useState([
        { picture: "/img/abendsonne.jpg", name: "evening sun", favorite: false, id: 1 },
        { picture: "/img/gewitter.jpg", name: "thunderstorm", favorite: false, id: 2 },
        { picture: "/img/leicht-bewoelkt.jpg", name: "light cloudy", favorite: false, id: 3 },
        { picture: "/img/nebel-frueh.jpg", name: "morning fog", favorite: false, id: 4 },
        { picture: "/img/nebel.jpg", name: "fog", favorite: false, id: 5 },
        { picture: "/img/regenwolken.jpg", name: "rain clouds", favorite: false, id: 6 },
        { picture: "/img/sonnenaufgang.jpg", name: "sunrise", favorite: false, id: 7 }
    ])

    const [fav, setFav] = useState('')

    const getImageToFavorites = (id) => {

        let imagesKopie = images.map((img) => {
            if (id === img.id) {
                img.favorite = !img.favorite
                return img
            } else {
                return img
            }
        })
        setImages(imagesKopie)
    }

    const filterFavorites = () => {
        const favImg = [...images]

        setFav(favImg.filter((item) => item.favorite === true))
        console.log(fav);
    }


    return (
        <div>
            <h2>weather images</h2>

            <button className='btn-favorite' onClick={() => { filterFavorites() }}>favorite</button>

            {/* {fav ?
                fav.map((img, index) => {
                    return (
                        <div key={index} className='images'>

                            <img src={img.picture} />
                            <p>{img.name}</p>

                        </div>
                    )
                })
                : null} */}

            <div className='Home'>

                {images.map((img, index) => {
                    return (
                        <div key={index} className='images'>

                            <img src={img.picture} />
                            <p>{img.name}</p>
                            <button className='likeBtn' id={img.id} onClick={() => { getImageToFavorites(img.id) }}>
                                {img.favorite ? <span>❤️</span> : <span>🤍</span>}
                            </button>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PicturesW