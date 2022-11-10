import React from 'react'

import './skills-and-tools.css'

const SkillsAndTools = () => {
    return (
        <>
            <h2>Skills & tools</h2>
            <h3>My toolbox</h3>
            <p>Skills, tools and technologies I use:</p>
            <div className="icons-container">
                <div className="icon-box">
                    <i className="fa fa-brands fa-html5"></i>
                    <p>HTML5</p>
                </div>
                <div className="icon-box">
                    <i className="fa fa-brands fa-css3-alt"></i>
                    <p>CSS3</p>
                </div>
                <div className="icon-box">
                    <i className="fa fa-brands fa-square-js"></i>
                    <p>JavaScript</p>
                </div>
                <div className="icon-box">
                    <i className="fa fa-brands fa-react"></i>
                    <p>React</p>
                </div>
                <div className="icon-box">
                    <i className="fa fa-brands fa-vuejs"></i>
                    <p>Vue</p>
                </div>
                <div className="icon-box">
                    <i className="fa fa-brands fa-node-js"></i>
                    <p>Node.js</p>
                </div>
                <div className="icon-box">
                    <i className="fa fa-brands fa-git-alt"></i>
                    <p>Git</p>
                </div>
                <div className="icon-box">
                    <i className="fa fa-solid fa-terminal"></i>
                    <p>Command Line</p>
                </div>
                <div className="icon-box">
                    <i className="fa fa-brands fa-bootstrap"></i>
                    <p>Bootstrap</p>
                </div>
                <div className="icon-box">
                    <i className="fa fa-brands fa-sass"></i>
                    <p>Sass</p>
                </div>
                <div className="icon-box">
                    <i className="fa fa-brands fa-wordpress"></i>
                    <p>Wordpress</p>
                </div>
                <div className="icon-box">
                    <i className="fa fa-brands fa-figma"></i>
                    <p>Figma</p>
                </div>
            </div>
        </>
    )
}

export default SkillsAndTools
