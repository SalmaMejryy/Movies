// src/services/movieService.js

import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'

// Fetch movies from Firebase
export const fetchMovies = async () => {
  try {
    const moviesCollection = collection(db, 'movies')
    const movieSnapshot = await getDocs(moviesCollection)
    
    const movieList = movieSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    
    console.log(`Fetched ${movieList.length} movies from Firebase`)
    return movieList
  } catch (error) {
    console.error('Error fetching movies from Firebase:', error)
    throw error
  }
}