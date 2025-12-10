import { useState, useEffect } from 'react'
import { fetchMovies } from '../services/movieService'
import SearchBar from '../components/SearchBar'
import MovieList from '../components/MovieList'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LoadingSkeletons from '../components/LoadingSkeletons'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const [featuredMovie, setFeaturedMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Fetch movies on component mount
  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true)
      try {
        const data = await fetchMovies()
        setMovies(data)
        setFilteredMovies(data)
        
        // Set random featured movie
        if (data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length)
          setFeaturedMovie(data[randomIndex])
        }
      } catch (error) {
        console.error('Error loading movies:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadMovies()
  }, [])

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredMovies(movies)
      return
    }

    const term = searchTerm.toLowerCase()
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(term) ||
      movie.name.toLowerCase().includes(term) ||
      movie.author.toLowerCase().includes(term)
    )
    setFilteredMovies(filtered)
  }

  // Group movies by category
  const getMoviesByCategory = (category) => {
    return movies.filter(movie => movie.category === category)
  }

  const actionMovies = getMoviesByCategory('Action')
  const dramaMovies = getMoviesByCategory('Drama')
  const comedyMovies = getMoviesByCategory('Comedy')
  const sciFiMovies = getMoviesByCategory('Sci-Fi')
  const thrillerMovies = getMoviesByCategory('Thriller')

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />

      <main className="flex-grow pt-0">
        {/* Hero/Featured Section */}
        {isLoading ? (
          // Loading skeleton for hero section
          <div className="relative h-[80vh] w-full bg-gray-900 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
                <div className="max-w-2xl space-y-4">
                  <div className="h-16 bg-gray-800 rounded w-3/4"></div>
                  <div className="h-8 bg-gray-800 rounded w-1/2"></div>
                  <div className="flex space-x-4">
                    <div className="h-12 bg-gray-800 rounded w-32"></div>
                    <div className="h-12 bg-gray-800 rounded w-24"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : featuredMovie ? (
          <div className="relative h-[80vh] w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={featuredMovie.poster}
                alt={featuredMovie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
                <div className="max-w-2xl">
                  <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl">
                    {featuredMovie.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-200 mb-6 drop-shadow-lg">
                    {featuredMovie.name}
                  </p>
                  
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded">
                      <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-white font-bold">{featuredMovie.rating}</span>
                    </div>
                    <span className="text-gray-300 font-medium">{featuredMovie.year}</span>
                    <span className="px-3 py-1 border border-gray-500 text-gray-300 text-sm rounded">
                      {featuredMovie.category}
                    </span>
                  </div>

                  <p className="text-gray-300 text-lg mb-8 max-w-xl">
                    Directed by {featuredMovie.author}. A cinematic masterpiece that captivates audiences with its storytelling and visual excellence.
                  </p>

                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-3 bg-white hover:bg-gray-200 text-black px-8 py-4 rounded font-bold text-lg transition-all duration-200 transform hover:scale-105">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                      <span>Play</span>
                    </button>
                    <button className="flex items-center space-x-3 bg-gray-500/70 hover:bg-gray-500/90 text-white px-8 py-4 rounded font-bold text-lg transition-all duration-200 backdrop-blur-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>More Info</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Search Section */}
        <div className="bg-black py-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Movie Rows */}
        <div className="bg-black pb-12">
          {isLoading ? (
            // Show multiple loading skeletons
            <>
              <LoadingSkeletons />
              <LoadingSkeletons />
              <LoadingSkeletons />
            </>
          ) : filteredMovies.length === movies.length ? (
            // Show all categories when not searching
            <>
              {actionMovies.length > 0 && (
                <MovieList movies={actionMovies} title="Action Movies" />
              )}
              {dramaMovies.length > 0 && (
                <MovieList movies={dramaMovies} title="Drama" />
              )}
              {comedyMovies.length > 0 && (
                <MovieList movies={comedyMovies} title="Comedy" />
              )}
              {sciFiMovies.length > 0 && (
                <MovieList movies={sciFiMovies} title="Sci-Fi" />
              )}
              {thrillerMovies.length > 0 && (
                <MovieList movies={thrillerMovies} title="Thriller" />
              )}
              {/* Show all movies at the end */}
              <MovieList movies={movies} title="All Movies" />
            </>
          ) : (
            // Show search results
            <>
              {filteredMovies.length > 0 ? (
                <MovieList 
                  movies={filteredMovies} 
                  title={`Search Results (${filteredMovies.length} found)`} 
                />
              ) : (
                <div className="text-center py-20 px-4">
                  <div className="max-w-md mx-auto">
                    <svg
                      className="mx-auto h-20 w-20 text-gray-600 mb-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <h3 className="text-white text-2xl font-bold mb-3">No movies found</h3>
                    <p className="text-gray-400 text-lg">
                      Try adjusting your search criteria to find what you're looking for.
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home