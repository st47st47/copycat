import React, { useState } from 'react'
import Navbar from './allcomponents/Navbar.jsx'
import { Link, useLoaderData } from 'react-router-dom'
import './cart.css'
import Footer from './allcomponents/Footer.jsx'
import Newsletter from './allcomponents/Newsletter.jsx'

import { data } from './data.js'

const Cart = () => {
    const [ca, cc] = useLoaderData()

    const [caState, setCaState] = useState(ca)
    const [ccState, setCcState] = useState(cc)

    function incdec(operator, arg2) {
        const currentCart = caState.slice();
        let newCartCount = 0;

        const updatedCart = currentCart.map(each => {
            if (each.pid === arg2) {
                if (operator === '+') {
                    return { ...each, count: each.count + 1 };
                } else if (operator === '-') {
                    return { ...each, count: each.count - 1 };
                }
            }
            return each;
        });

        updatedCart.forEach(each => {
            newCartCount += each.count;
        });

        window.localStorage.setItem('cartt', JSON.stringify(updatedCart));
        window.localStorage.setItem('carttcountt', JSON.stringify(newCartCount));
        setCcState(newCartCount);
        setCaState(updatedCart);
    }

    function removeitem(arg) {
        let newcartcount = 0
        const currentcart = [...caState]
        const newcart2 = currentcart.map((each) => {
            if (each.pid === arg) {
                return { ...each, count: 0 }
            }
            else {
                return each
            }
        })
        newcart2.forEach((each) => {
            newcartcount += each.count
        })

        window.localStorage.setItem('cartt', JSON.stringify(newcart2))
        window.localStorage.setItem('carttcountt', JSON.stringify(newcartcount))
        setCcState(newcartcount)
        setCaState(newcart2)
    }


    let finalTotal = 0
    caState.forEach((each) => {
        finalTotal += each.count * data[each.pid].prodprice
    })

    return (
        <div className='cartpage'>
            <Navbar prop1={ccState} />

            <div className='cb'>
                <h1>Your cart</h1>
                <Link to='/'><h5>Continue Shopping</h5></Link>
            </div>

            <table>
                <tr>
                    <th><h6>PRODUCT</h6></th>
                    <th><h6>QUANTITY</h6></th>
                    <th><h6>SUBTOTAL</h6></th>
                </tr>
                {caState.map((each) => {
                    if (each.count > 0) {
                        return <tr>
                            <td className='prodcolum'>
                                <img src={data[each.pid].picture} width='140px' height='150px' />
                                <div>
                                    <p>{each.pname}</p>
                                    <h5>${data[each.pid].prodprice}</h5>
                                </div>
                            </td>
                            <td >
                                <div className="twocolum">
                                    <div className="quancolum">
                                        <button onClick={() => { incdec('-', each.pid) }}>-</button>{each.count} <button onClick={() => { incdec('+', each.pid) }}>+</button>
                                    </div>
                                    <button className='dustbin' onClick={() => { removeitem(each.pid) }}>&#128465;</button>
                                </div>
                            </td>
                            <td>${data[each.pid].prodprice * each.count}</td>
                        </tr>
                    }
                })}
            </table>

            <div className="last">
                <div className="instr">
                    <label htmlFor="instr"><h5>Order special instructions</h5></label>
                    <textarea name="" id="instr"></textarea>
                </div>
                <div className="ready">
                    <h3>Estimated Total: ${finalTotal}</h3>
                    <h6>Taxes, discounts and shipping calculated at checkout</h6>
                    <button>Check out</button>
                </div>
            </div>

            <Footer />
            <Newsletter />
        </div>
    )
}

export default Cart