import React from 'react'
import Welcome from '../components/Welcome'
import Mainlayout from '../layout/Mainlayout'
import AllTheBooks from '../components/AllTheBooks'

const Homepage = () => {
    return (
        <Mainlayout>
            <AllTheBooks />
        </Mainlayout>
    )

}

export default Homepage
