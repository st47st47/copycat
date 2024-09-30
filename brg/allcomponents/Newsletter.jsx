import React from 'react'
import { ImArrowRight } from 'react-icons/im'
import './newsletter.css'

const Newsletter = () => {
    return (
        <div className="newsletter">
            <h2>...Join Us! ★ *^-^!</h2>
            <h3>★Sign Up now to stay updated!!</h3>
            <div className='entermail'>
                <input type='email' placeholder='Email....' />
                <button><ImArrowRight /></button>
            </div>
        </div>
    )
}

export default Newsletter