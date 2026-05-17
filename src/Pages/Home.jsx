import React from 'react'
import Navbar from '../components/Navbar'
import Carausel from '../components/Carausel'
import Footer from '../components/Footer'
import ProductCards from '../components/ProductCards'
import Testing from '../components/Testing'
import ProductHorizontal from '../components/ProductHorizontal'
import {data,sliders} from '../data/data'
const Home = () => {
  return (
    <div style={{ paddingTop: '64px' }}>
       <Navbar />
      <Carausel />
      <div className="flex gap-11 mt-12">
       <ProductCards
  title="Pick up where you left off"
  products={data.slice(0, 4)}
/>

        <ProductCards title="Deals inspired by your recent history"   products={data.slice(4, 8)} />
        <ProductCards title="Deals you might like in Computers & Accessories" products={data.slice(8, 12)} />
      </div>
        <ProductHorizontal title="Up to 40% off | Best Deals on smartphones" products={sliders} />
      <Footer />
    </div>
  )
}

export default Home
