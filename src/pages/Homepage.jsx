import React from 'react'
import Welcome from '../components/Welcome'
import Mainlayout from '../layout/Mainlayout'
import AllTheBooks from '../components/AllTheBooks'
import MyNav from '../components/MyNav'
import MyFooter from '../components/MyFooter'

const Homepage = () => {
    return (
        <Mainlayout>
            <MyNav />
            <Welcome />
            <AllTheBooks />
            <MyFooter />
        </Mainlayout>
    )

}

export default Homepage
