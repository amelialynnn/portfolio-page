import React from 'react'

import './header.css'

import Navbar from './navbar/Navbar'
import SubHeader from './subheader/SubHeader'

const Header = () => {
    return (
        <>
            <div className="header-container-inner">
                <Navbar></Navbar>
                <div className="wrapper-width">
                    <SubHeader></SubHeader>
                </div>
            </div>
        </>
    )
}

export default Header
