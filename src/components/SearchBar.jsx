import { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleInputChange = (e) => {
    const term = e.target.value
    setSearchTerm(term)
    onSearch(term)
  }

  const handleClear = () => {
    setSearchTerm('')
    onSearch('')
  }

  return (
    <div className="max-w-3xl mx-auto mb-12 px-4">
      <div className="relative">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
          <svg
            className={`h-5 w-5 transition-colors duration-200 ${
              isFocused ? 'text-white' : 'text-gray-400'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Input Field */}
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search titles, people, genres..."
          className={`w-full pl-14 pr-14 py-4 bg-black/70 border-2 text-white placeholder-gray-400 
            focus:outline-none transition-all duration-300 backdrop-blur-sm
            ${isFocused 
              ? 'border-white bg-black/90 shadow-lg shadow-white/10' 
              : 'border-gray-700 hover:border-gray-600'
            }
          `}
        />

        {/* Clear Button */}
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-5 flex items-center group"
          >
            <div className="p-1.5 rounded-full hover:bg-gray-700 transition-all duration-200">
              <svg
                className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </button>
        )}
      </div>

      {/* Search Results Counter */}
      {searchTerm && (
        <div className="mt-4 text-center">
          <p className="text-gray-400 text-sm">
            Searching for <span className="text-white font-semibold">"{searchTerm}"</span>
          </p>
        </div>
      )}
    </div>
  )
}

export default SearchBar