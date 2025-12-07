import MovieCard from './MovieCard'
import { useState, useRef } from 'react'

const MovieList = ({ movies, title = "Popular on CineVault" }) => {
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scroll = (direction) => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = container.clientWidth * 0.8
      const newScrollLeft = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  const handleScroll = () => {
    const container = scrollContainerRef.current
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0)
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      )
    }
  }

  return (
    <div className="relative group mb-12">
      {/* Section Title */}
      <h2 className="text-white text-xl md:text-2xl font-bold mb-4 px-4 md:px-12">
        {title}
      </h2>

      {/* Scroll Container */}
      <div className="relative px-4 md:px-12">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-0 bottom-0 z-40 w-12 md:w-16 bg-black/50 hover:bg-black/80 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Scroll left"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Movies Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {movies.map((movie, index) => (
            <div
              key={`${movie.title}-${index}`}
              className="flex-shrink-0 w-40 md:w-48 lg:w-56"
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-0 bottom-0 z-40 w-12 md:w-16 bg-black/50 hover:bg-black/80 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Scroll right"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}

export default MovieList