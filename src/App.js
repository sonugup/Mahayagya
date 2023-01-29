import logo from './logo.svg'
import './App.css'
import Tample from './Component/Temple/Tample'
import NavabarPage from './Component/Navbar/NavabarPage'
import Home from './Component/sigin/Home'
import Footer from './Component/footer/Footer'

function App() {
  return (
    <div className="app">
      <NavabarPage />
      {/* <Tample/> */}
      <Home />
      {/* <Footer/> */}
    </div>
  )
}

export default App
