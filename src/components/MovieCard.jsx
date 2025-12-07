import { Link } from 'react-router-dom'
import { useState } from 'react'

const MovieCard = ({ movie }) => {
  const { title, category, rating, year, poster } = movie
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        relative rounded overflow-hidden cursor-pointer
        transition-all duration-300 ease-in-out
        ${isHovered ? 'scale-125 z-50 shadow-2xl' : 'scale-100'}
      `}>
        {/* Movie Poster */}
        <div className="relative aspect-[2/3] overflow-hidden">
          <img
            src={poster}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          
          {/* Dark Overlay on Hover */}
          <div className={`
            absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent
            transition-opacity duration-300
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}></div>

          {/* Rating Badge - Always Visible */}
          <div className="absolute top-2 left-2">
            <div className="bg-black/80 backdrop-blur-sm rounded px-2 py-0.5 flex items-center space-x-1">
              <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-white text-xs font-bold">{rating}</span>
            </div>
          </div>

          {/* Hover Content */}
          <div className={`
            absolute bottom-0 left-0 right-0 p-4
            transition-all duration-300
            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}>
            {/* Title */}
            <h3 className="text-white text-base font-bold mb-2 line-clamp-2">
              {title}
            </h3>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2 mb-3">
              {/* Play Button */}
              <Link
                to={`/movie/${title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                state={{ movie }}
                className="flex items-center justify-center w-8 h-8 bg-white rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </Link>

              {/* Add to List Button */}
              <button className="flex items-center justify-center w-8 h-8 border-2 border-gray-400 rounded-full hover:border-white transition-colors duration-200">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>

              {/* Like Button */}
              <button className="flex items-center justify-center w-8 h-8 border-2 border-gray-400 rounded-full hover:border-white transition-colors duration-200">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </button>

              {/* More Info Button */}
              <button className="flex items-center justify-center w-8 h-8 border-2 border-gray-400 rounded-full hover:border-white transition-colors duration-200 ml-auto">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Movie Info */}
            <div className="flex items-center space-x-2 text-xs text-gray-300 mb-2">
              <span className="text-green-400 font-semibold">{rating * 10}% Match</span>
              <span className="border border-gray-500 px-1.5 py-0.5 text-[10px]">HD</span>
              <span>{year}</span>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-1">
              <span className="text-xs text-gray-400">
                {category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard