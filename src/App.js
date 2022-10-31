import './App.css'

import Navbar from './components/navbar/Navbar'
import SubHeader from './components/subheader/SubHeader'
import About from './components/about/About'

function App() {
  return (
    <div className="App">
      <header id="home" className="header-container">
        <Navbar></Navbar>
        <div className='wrapper-width'>
          <SubHeader></SubHeader>
        </div>
      </header>
      <main>
        <section className='about-container' id="about" >
          <div className='wrapper-width'>
            <About></About>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
