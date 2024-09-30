import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = ({ prop1 }) => {
    return (
        <nav>
            <div className="navleft">
                <Link to='/'><img src="./brglogo.png" /></Link>
                <Link to='/'>Home</Link>
                <Link to='/'>Hats</Link>
                <Link to='/'>T-shirts</Link>
                <Link to='/'>Outerwear</Link>
                <Link to='/'>1 of 1</Link>
            </div>
            <div className="navright">
                <div className="dropdown">
                    <select name="" id="">
                        <option value="">United States | USD $</option>
                    </select>
                </div>
                <p href="">&#128269;</p>
                <p href="">&#128100;</p>
                <Link to='/cart'>&#128722;</Link>
                <p id='cartcount'>{prop1}</p>
            </div>
        </nav>
    )
}

export default Navbar