import React from 'react'
import Navbar from '../components/Navbar'
import Carausel from '../components/Carausel'
import Footer from '../components/Footer'
import ProductCards from '../components/ProductCards'
import Testing from '../components/Testing'
const Home = () => {
  return (
    <div style={{ paddingTop: '64px' }}>
       <Navbar />
      <Carausel />
      <div className="flex gap-11 mt-12">
        <ProductCards title="Best Sellers in Electronics" products={{"product1":"image1", "product2":"image2", "product3":"image3"}} />
        <ProductCards title="Deals you might like in Computers & Accessories" products={{"product1":"image1", "product2":"image2", "product3":"image3"}} />
      </div>
        <Testing title="Deals you might like in Computers & Accessories" products={{"product1":"image1", "product2":"image2", "product3":"image3"}} />

      <Footer />
    </div>
  )
}

export default Home
