import React from 'react'

import './about.css'
import profileImg from '../../assets/profile.jpeg'

const About = () => {
    return (
        <>
            <h2>About</h2>
            <h3>Who am I?</h3>
            <div className="content-container">
                <div className="profile-image-container">
                    <img src={profileImg} alt="profile"></img>
                </div>
                <div className="text-container">
                    <h4>Creative and problemsolving frontend developer</h4>
                    <p>
                        Laboris voluptate pariatur deserunt veniam pariatur sit.
                        Adipisicing labore consectetur id mollit. Nostrud
                        pariatur voluptate quis reprehenderit labore qui sint
                        culpa qui excepteur est labore elit veniam. Enim veniam
                        cillum laboris consectetur ipsum ut nisi voluptate
                        aliquip.
                    </p>
                    <p>
                        Laboris voluptate pariatur deserunt veniam pariatur sit.
                        Adipisicing labore consectetur id mollit. Nostrud
                        pariatur voluptate quis reprehenderit labore qui sint
                        culpa qui excepteur est labore elit veniam. Enim veniam
                        cillum laboris consectetur ipsum ut nisi voluptate
                        aliquip.
                    </p>
                </div>
            </div>
        </>
    )
}
export default About
