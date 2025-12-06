import MovieCard from './MovieCard'

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {movies.map((movie, index) => (
        <MovieCard key={`${movie.title}-${index}`} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList