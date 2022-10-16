import './App.css'

import Navbar from './components/navbar/Navbar'
import SubHeader from './components/subheader/SubHeader'
import About from './components/about/About'

function App() {
  return (
    <div className="App">
      <header id="home" className="header-container">
        <Navbar></Navbar>
        <SubHeader></SubHeader>
      </header>
      <About></About>
    </div>
  )
}

export default App
