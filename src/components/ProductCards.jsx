import React from "react";

const ProductCards = ({ products, title }) => {
  return (
    <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-5 text-gray-900">
        {title}
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(products).map(([name, image]) => (
          <div
            key={name}
            className="cursor-pointer hover:scale-105 transition-all duration-300"
          >
            
            {/* Image Box */}
            <div className="bg-gray-100 rounded-lg overflow-hidden h-44 flex items-center justify-center">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Product Name */}
            <h3 className="text-sm mt-2 text-gray-800 line-clamp-1">
              {name}
            </h3>
          </div>
        ))}
      </div>

      <button className="mt-5 text-blue-600 hover:underline text-sm font-medium">
        See more deals
      </button>
    </div>
  );
};

export default ProductCards;