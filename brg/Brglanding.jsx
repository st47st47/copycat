import React, { useState } from 'react'
import { ImInstagram, ImYoutube, ImTwitter, ImFacebook } from 'react-icons/im'
import './brg.css'
import Navbar from './allcomponents/Navbar.jsx'
import Carousel from './allcomponents/Carousel.jsx'
import Footer from './allcomponents/Footer.jsx'
import Newsletter from './allcomponents/Newsletter.jsx'
import { useLoaderData } from 'react-router-dom'
import { data } from './data.js'

const Brglanding = () => {

    const [ca, cc] = useLoaderData()
    const [pseud, setPseud] = useState(0)
    const [cartCount, setCartCount] = useState(cc)
    const [cart, setCart] = useState(ca)

    function openmodal(arg) {
        const wanteddialog = document.getElementById(arg)
        wanteddialog.showModal()
    }

    function incdec(arg) {
        switch (arg) {
            case '+':
                setPseud((prev) => {
                    return prev + 1
                })
                break
            case '-':
                setPseud((prev) => {
                    return prev - 1
                })
                break
        }
    }

    function addtocart(arg) {
        const newcart = [...cart]
        const newcart2 = newcart.map((each) => {
            if (each.pname === arg) {
                return { ...each, count: each.count + pseud }
            }
            else {
                return each
            }
        }
        )
        let newcartcount = 0
        newcart2.forEach((each) => {
            newcartcount += each.count
        })
        window.localStorage.setItem('carttcountt', JSON.stringify(newcartcount))
        setCartCount(newcartcount)
        window.localStorage.setItem('cartt', JSON.stringify(newcart2))
        setCart(newcart2)
        setPseud(0)
    }


    return (
        <div className='screen'>
            <Navbar prop1={cartCount} />

            <p className='coolfont'>
                <h1>#𝕾𝕾𝕻</h1>
            </p>

            <Carousel data={data} pseud={pseud} incdec={incdec} addtocart={addtocart} openmodal={openmodal} />

            <div className="preview">
                <div className="left">
                    <img src={data[0].picture} />
                </div>
                <div className="right">
                    <h5>SSP</h5>
                    <h1>{data[0].prodname}</h1>
                    <h3>${data[0].prodprice} USD</h3>
                    <h5>Size</h5>
                    <div className="buttons">
                        {data[0].prodsizes.map((each) => {
                            return <button>{each}</button>
                        })}
                    </div>
                    <h5>Quantity</h5>
                    <div className="quanititer">
                        <button onClick={() => { incdec('-') }} disabled={pseud === 0}>-</button>
                        <span>{pseud}</span>
                        <button onClick={() => { incdec('+') }}>+</button>
                    </div>
                    <button className='carter' onClick={() => { addtocart(data[0].prodname) }}>Add to Cart</button><br />
                    <a href=""><h5>More payment options</h5></a>
                </div>
            </div>

            <div className="socialicons">
                <a href=""><ImInstagram /></a>
                <a href=""><ImYoutube /></a>
                <a href=""><ImTwitter /></a>
                <a href=""><ImFacebook /></a>
            </div>

            <Footer />

            <Newsletter />
        </div >
    )
}

export default Brglanding


