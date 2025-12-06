import { useState, useEffect } from 'react'
import moviesData from '../data/movies.json'
import SearchBar from '../components/SearchBar'
import MovieList from '../components/MovieList'
import Pagination from '../components/Pagination'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const moviesPerPage = 10

  useEffect(() => {
    setMovies(moviesData)
    setFilteredMovies(moviesData)
    setCurrentPage(1)
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [filteredMovies])

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

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const indexOfLastMovie = currentPage * moviesPerPage
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie)
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Welcome to <span className="text-blue-600">CineVault</span>
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Discover cinematic masterpieces, explore timeless classics, and find your next favorite film in our curated collection.
              </p>
            </div>

            <SearchBar onSearch={handleSearch} />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  {filteredMovies.length === movies.length
                    ? 'All Movies'
                    : `Search Results (${filteredMovies.length} found)`}
                </h2>
                <p className="text-gray-500 text-sm">
                  Showing {indexOfFirstMovie + 1}-{Math.min(indexOfLastMovie, filteredMovies.length)} of {filteredMovies.length} movies
                </p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>Total collection:</span>
                <span className="font-semibold text-gray-700">{movies.length} movies</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {currentMovies.length > 0 ? (
            <>
              <MovieList movies={currentMovies} />
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <svg
                  className="mx-auto h-16 w-16 text-gray-300 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4"
                  />
                </svg>
                <h3 className="text-gray-900 text-xl font-semibold mb-2">No movies found</h3>
                <p className="text-gray-600 text-sm">
                  Try adjusting your search criteria to find what you're looking for.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home