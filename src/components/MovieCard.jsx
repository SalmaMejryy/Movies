import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  const { title, name, author, category, rating, year, poster } = movie

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={poster}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
            <svg className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-gray-900 text-sm font-medium">{rating}</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-md">
            {category}
          </span>
          <span className="text-gray-500 text-sm font-medium">{year}</span>
        </div>

        <h3 className="text-gray-900 text-lg font-bold mb-1 line-clamp-2 leading-tight">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-1">{name}</p>
        <p className="text-gray-500 text-sm mb-4">Directed by {author}</p>

        <Link
          to={`/movie/${title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
          state={{ movie }}
          className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 text-center inline-block transform hover:scale-[1.02] active:scale-[0.98]"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default MovieCard