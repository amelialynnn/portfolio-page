import './App.css'
import './main-style.css'

import Navbar from './components/navbar/Navbar'
import SubHeader from './components/subheader/SubHeader'
import About from './components/about/About'
import SkillsAndTools from './components/skillsandtools/SkillsAndTools'
import Work from './components/work/Work'

function App() {
    return (
        <div className="App">
            <header id="home" className="header-container-outer">
                <div className="header-container-inner">
                    <Navbar></Navbar>
                    <div className="wrapper-width">
                        <SubHeader></SubHeader>
                    </div>
                </div>
                <div className="angle angle-1"></div>
            </header>
            <main>
                <section className="about-container" id="about">
                    <div className="wrapper-width">
                        <About></About>
                    </div>
                </section>
                <div className="angle angle-2"></div>
                <section className="skills-tools-container" id="skills-tools">
                    <div className="wrapper-width">
                        <SkillsAndTools></SkillsAndTools>
                    </div>
                </section>
                <div className="angle angle-3"></div>
                <section className="work-container" id="work">
                    <div className="wrapper-width">
                        <Work></Work>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default App
