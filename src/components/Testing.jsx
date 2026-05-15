import React from 'react'

const Testing = ({ title, products }) => {
  return (
    <>
      <div className="container w-[90%] mx-auto mt-12 ">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <div className="flex gap-4 overflow-x-scroll">
            {Object.entries(products).map(([name, image]) => (
        <div key={name}>
          <img src={image} alt={name} />
            <h3>{name}</h3>
        </div>
        ))}
        </div>
      </div>
    </>
  )
}

export default Testing
