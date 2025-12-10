// src/utils/uploadMovies.js
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
import moviesData from '../data/movies.json'

// Function to upload movies to Firebase
export const uploadMoviesToFirebase = async () => {
  try {
    console.log('Starting to upload movies to Firebase...')
    
    const moviesCollection = collection(db, 'movies')
    let uploadedCount = 0
    
    // Upload each movie
    for (const movie of moviesData) {
      try {
        await addDoc(moviesCollection, {
          title: movie.title,
          name: movie.name || movie.title,
          author: movie.author || movie.director || 'Unknown',
          category: movie.category || 'Drama',
          rating: movie.rating || 8.0,
          year: movie.year || parseInt(movie.creation_date?.split('-')[0]) || 2000,
          description: movie.description || 'A great movie!',
          poster: movie.poster || movie.image || 'https://via.placeholder.com/300x450?text=No+Poster',
          director: movie.director || movie.author,
          creation_date: movie.creation_date || `${movie.year || 2000}-01-01`,
          actors: movie.actors || [],
          duration: '120 min',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        })
        
        uploadedCount++
        console.log(`Uploaded: ${movie.title}`)
        
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100))
        
      } catch (error) {
        console.error(`Error uploading ${movie.title}:`, error.message)
      }
    }
    
    console.log(`✅ Successfully uploaded ${uploadedCount} movies to Firebase!`)
    return { success: true, count: uploadedCount }
    
  } catch (error) {
    console.error('❌ Error uploading movies:', error)
    return { success: false, error: error.message }
  }
}

// Function to check if movies already exist
export const checkIfMoviesExist = async () => {
  try {
    const snapshot = await getDocs(collection(db, 'movies'))
    return snapshot.docs.length > 0
  } catch (error) {
    console.error('Error checking movies:', error)
    return false
  }
}