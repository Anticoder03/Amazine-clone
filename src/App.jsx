import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import SingleProduct from './Pages/SingleProduct'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Login from './Pages/Login'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App
