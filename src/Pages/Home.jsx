import React from 'react'
import Navbar from '../components/Navbar'
import Carausel from '../components/Carausel'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div style={{ paddingTop: '64px' }}>
       <Navbar />
      <Carausel />
      <Footer />
    </div>
  )
}

export default Home
