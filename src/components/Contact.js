import React, { useState } from 'react'
import './contact.css'


function Contact() {

    const [userName, setUserName] = useState()

    const sayThankyou = (e) => {

        alert(`Thanks ${userName} for your message!`)
        e.preventDefault()
        setUserName('')
    }

    return (
        <div className='Contact'>
            <h2>contact</h2>
            <form>
                <label></label>
                <br />
                <input value={userName} type="text" id="name" placeholder='name' onChange={(e) => { setUserName(e.target.value) }} />
                <br />
                <label></label>
                <br />
                <input type="email" id="email" placeholder='email' />
                <br />
                <label></label>
                <br />
                <textarea placeholder='message'></textarea>
                <br />
                <button onClick={(e) => { sayThankyou(e) }}>submit</button>
            </form>
        </div>
    )
}

export default Contact