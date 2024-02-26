import React from 'react'
import MyNav from "../components/MyNav"
import MyFooter from "../components/MyFooter"

const Mainlayout = ({ children }) => {
    return (
        <>
            <MyNav />
            {children}
            <MyFooter />
        </>
    )
}

export default Mainlayout
