// src/services/movieService.js
import { collection, getDocs, query, limit, startAfter } from 'firebase/firestore'
import { db } from '../firebase/config'

// Original function - fetch all movies
export const fetchMovies = async () => {
  try {
    console.log('Fetching movies from Firebase...')
    
    const moviesCollection = collection(db, 'movies')
    const movieSnapshot = await getDocs(moviesCollection)
    
    const movieList = movieSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    
    console.log(`✅ Fetched ${movieList.length} movies from Firebase`)
    return movieList
    
  } catch (error) {
    console.error('❌ Error fetching movies from Firebase:', error)
    throw error
  }
}

// NEW - Paginated function (add this)
export const fetchMoviesPaginated = async (pageSize = 20, lastDoc = null) => {
  try {
    let q = lastDoc
      ? query(collection(db, 'movies'), startAfter(lastDoc), limit(pageSize))
      : query(collection(db, 'movies'), limit(pageSize))
    
    const snapshot = await getDocs(q)
    const movies = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    const lastVisible = snapshot.docs[snapshot.docs.length - 1]
    
    return { movies, lastVisible, hasMore: movies.length === pageSize }
  } catch (error) {
    console.error('Error fetching movies:', error)
    throw error
  }
}
// Add this to movieService.js
export const fetchMovieStats = async () => {
  try {
    const snapshot = await getDocs(collection(db, 'movies'))
    
    const movies = snapshot.docs.map(doc => doc.data())
    
    // Calculate statistics
    const totalMovies = movies.length
    const categories = [...new Set(movies.map(m => m.category))].length
    const avgRating = (movies.reduce((sum, m) => sum + (m.rating || 0), 0) / totalMovies).toFixed(1)
    const yearRange = {
      oldest: Math.min(...movies.map(m => m.year || 2000)),
      newest: Math.max(...movies.map(m => m.year || 2000))
    }
    
    return {
      totalMovies,
      categories,
      avgRating,
      yearRange
    }
  } catch (error) {
    console.error('Error fetching movie stats:', error)
    throw error
  }
}