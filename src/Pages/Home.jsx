import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Carausel from '../components/Carausel'
import Footer from '../components/Footer'
import ProductCards from '../components/ProductCards'
import ProductHorizontal from '../components/ProductHorizontal'
import {data,sliders} from '../data/data'
import SearchProduct from '../components/SearchProduct'
import Sidebar from '../components/Sidebar'
const Home = () => {
  const [search, setSearch] = useState(false);
  const [catogary, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  return (
    <div>
      
       <Navbar setCategory={setCategory} setSearch={setSearch} />
       {search ? (
        <div className="flex gap-4 bg-gray-50 px-4 py-4">
          <Sidebar priceRange={priceRange} setPriceRange={setPriceRange} />
          <div className="flex-1">
            <SearchProduct category={catogary} priceRange={priceRange} />
          </div>
        </div>
       ) : (
         <>
           <Carausel />
           <div className="flex gap-11 mt-12">
             <ProductCards title="Pick up where you left off" products={data.slice(0, 4)}/>
             <ProductCards title="Deals inspired by your recent history"   products={data.slice(4, 8)} />
             <ProductCards title="Deals you might like in Computers & Accessories" products={data.slice(8, 12)} />
           </div>
           <div className='flex gap-11 mt-12'>
              <ProductCards title="Customer's most loved picks for you" products={data.slice(12, 16)} />
              <ProductCards title="Deals inspired by your recent history"   products={data.slice(4, 8)} />
              <ProductCards title="Deals you might like in Computers & Accessories" products={data.slice(8, 12)} />
           </div>
           <ProductHorizontal title="Up to 40% off | Best Deals on smartphones" products={sliders} />
         </>
       )}
      <Footer />
    </div>
  )
}

export default Home
