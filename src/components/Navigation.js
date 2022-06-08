import React from 'react'
import { Link } from "react-router-dom"

function Navigation() {
    return (
        <div className='navigation'>
            <nav>
                <div><Link to="/">weather</Link></div>
                <div><Link to="/weather/">info</Link></div>
                <div><Link to="/pics/">pictures</Link></div>
                <div><Link to="/contact/">contact</Link></div>
            </nav>
        </div>
    )
}

export default Navigation