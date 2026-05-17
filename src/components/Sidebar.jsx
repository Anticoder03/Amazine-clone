import React from 'react'

const Sidebar = ({ priceRange, setPriceRange }) => {
  const priceOptions = [
    { label: 'All prices', value: 'all' },
    { label: 'Under ₹200', value: 'under-200' },
    { label: '₹200 - ₹500', value: '200-500' },
    { label: '₹500 - ₹1000', value: '500-1000' },
    { label: 'Above ₹1000', value: 'above-1000' },
  ]

  return (
    <aside className="w-full md:w-72 shrink-0 bg-white border border-gray-200 rounded-lg p-4 h-fit">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter by price</h2>
      <div className="space-y-3">
        {priceOptions.map(option => (
          <label key={option.value} className="flex items-center gap-3 cursor-pointer text-sm text-gray-700">
            <input
              type="radio"
              name="priceRange"
              value={option.value}
              checked={priceRange === option.value}
              onChange={(e) => setPriceRange(e.target.value)}
              className="h-4 w-4 text-blue-600 border-gray-300"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
