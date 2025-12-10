// src/pages/Upload.jsx
import { useState } from 'react'
import { uploadMoviesToFirebase } from '../utils/uploadMovies'
import Header from '../components/Header'  // Add Header
import Footer from '../components/Footer'  // Add Footer

const Upload = () => {
  const [isUploading, setIsUploading] = useState(false)
  const [message, setMessage] = useState('')

  const handleUpload = async () => {
    setIsUploading(true)
    setMessage('Uploading movies to Firebase...')
    
    try {
      const result = await uploadMoviesToFirebase()
      if (result.success) {
        setMessage(`✅ Successfully uploaded ${result.count} movies to Firebase!`)
      } else {
        setMessage(`❌ Error: ${result.error}`)
      }
    } catch (error) {
      setMessage('❌ Error uploading movies: ' + error.message)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20 flex items-center justify-center">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Upload Movies to Firebase</h1>
          <p className="text-gray-400 mb-8">
            This will upload all movies from your movies.json file to Firebase Firestore.
          </p>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-3">Before You Upload:</h2>
            <ul className="text-gray-300 text-left space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Make sure Firebase is properly configured
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Firestore database should be created
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Movies will be added to "movies" collection
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">⚠</span>
                This may take a few minutes for all movies
              </li>
            </ul>
          </div>
          
          <button
            onClick={handleUpload}
            disabled={isUploading}
            className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
              isUploading
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-red-600 hover:bg-red-700 hover:scale-105'
            } text-white mb-6`}
          >
            {isUploading ? 'Uploading...' : 'Upload Movies to Firebase'}
          </button>
          
          {message && (
            <div className={`p-4 rounded-lg ${
              message.includes('✅') 
                ? 'bg-green-500/20 border border-green-500 text-green-300' 
                : message.includes('❌')
                ? 'bg-red-500/20 border border-red-500 text-red-300'
                : 'bg-blue-500/20 border border-blue-500 text-blue-300'
            }`}>
              <p className="text-lg">{message}</p>
            </div>
          )}
          
          <div className="mt-8 text-sm text-gray-500">
            <p>Note: Movies will be uploaded from your local movies.json file.</p>
            <p>Check browser console for detailed upload progress.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default Upload