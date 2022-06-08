import React from 'react'

function Search({ location, setLocation, searchLocation }) {
    return (
        <div>
            <div className="search">
                <input
                    value={location}
                    type='text'
                    onChange={event => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder='Enter location' />
            </div>
        </div>
    )
}

export default Search