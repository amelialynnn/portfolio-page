import React from 'react'

import './work.css'
import hamaterWars from '../../assets/work/hamsterwars.png'

const Work = () => {
    return (
        <>
            <h2>Work</h2>
            <h3>Check out some stuff I’ve build</h3>
            <div className="work-image-container">
                <img src={hamaterWars} alt="hamster wars project"></img>
            </div>
            <h4>Hamater Wars</h4>
        </>
    )
}

export default Work
