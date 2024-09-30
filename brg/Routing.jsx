import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Brglanding from './Brglanding'
import Cart from './Cart'
import { landingloader } from './allcomponents/helpers'

const Routing = () => {
    const myrouter = createBrowserRouter([
        {
            path: '/',
            element: <Brglanding />,
            loader: landingloader
        },
        {
            path: 'cart',
            element: <Cart />,
            loader: landingloader
        }
    ])

    return (
        <RouterProvider router={myrouter} />
    )
}

export default Routing