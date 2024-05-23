
import './App.css'
import Crop from './pages/Crop/Crop'
import Home from './pages/Home'
import { Nav } from './pages/Nav/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Nav />
      <Router>
        <Routes>

          <Route path='/Crop' element={<Crop />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
