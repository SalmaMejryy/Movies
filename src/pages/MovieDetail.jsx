import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MovieDetail = () => {
  const location = useLocation()
  const navigate = useNavigate()
  
  // Initialize movie from location state or redirect
  const movie = location.state?.movie || null

  // Redirect if no movie data
  useEffect(() => {
    if (!movie) {
      navigate('/')
    }
  }, [movie, navigate])

  if (!movie) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-red-600 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Loading movie details...</p>
        </div>
      </div>
    )
  }

  const { title, name, author, category, rating, year, description, poster } = movie

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />

      <main className="flex-grow pt-16">
        {/* Hero Section with Background */}
        <div className="relative h-[70vh] md:h-[85vh] overflow-hidden">
          <img
            src={poster}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

          {/* Back Button */}
          <Link
            to="/"
            className="absolute top-8 left-4 md:left-12 flex items-center space-x-2 text-white bg-black/50 hover:bg-black/70 px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-105 z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back</span>
          </Link>

          {/* Movie Info */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-16">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl">
                  {title}
                </h1>
                <p className="text-2xl md:text-3xl text-gray-200 mb-6 drop-shadow-lg">
                  {name}
                </p>

                <div className="flex items-center space-x-4 mb-8">
                  <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded">
                    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-white font-bold text-lg">{rating}</span>
                  </div>
                  <span className="text-white font-semibold text-lg">{year}</span>
                  <span className="px-3 py-1 border-2 border-gray-400 text-gray-300 text-sm font-semibold rounded">
                    {category}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-3 bg-white hover:bg-gray-200 text-black px-8 py-4 rounded font-bold text-lg transition-all duration-200 transform hover:scale-105">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="flex items-center justify-center w-12 h-12 border-2 border-gray-400 rounded-full hover:border-white transition-all duration-200 bg-black/40 backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  <button className="flex items-center justify-center w-12 h-12 border-2 border-gray-400 rounded-full hover:border-white transition-all duration-200 bg-black/40 backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-white mb-6">About</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {description || `${title} is a captivating ${category.toLowerCase()} film directed by ${author}. Released in ${year}, this cinematic masterpiece has garnered critical acclaim and audience appreciation for its compelling storytelling, powerful performances, and stunning visual presentation. With a rating of ${rating}/10, it stands as a testament to exceptional filmmaking.`}
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <span className="text-gray-500 font-semibold min-w-[120px]">Director:</span>
                    <span className="text-white font-medium">{author}</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-gray-500 font-semibold min-w-[120px]">Genre:</span>
                    <span className="text-white font-medium">{category}</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-gray-500 font-semibold min-w-[120px]">Release Year:</span>
                    <span className="text-white font-medium">{year}</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-gray-500 font-semibold min-w-[120px]">Rating:</span>
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-white font-medium">{rating}/10</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar - Similar Movies/More Info */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-800 p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-white mb-4">More Like This</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Discover similar films in the {category} genre and explore our curated collection.
                  </p>
                  <Link
                    to="/"
                    className="w-full flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span>Browse Movies</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default MovieDetail