import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-black via-gray-900 to-black border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                About <span className="text-red-600">CINEVAULT</span>
              </h1>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Your gateway to unlimited stories, endless entertainment, and cinematic excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                CineVault was created with a simple yet profound mission: to make cinematic masterpieces accessible to everyone, everywhere. We believe that great films have the power to inspire, educate, and transform lives.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Whether you're a casual moviegoer or a dedicated film enthusiast, CineVault offers a carefully curated collection that spans genres, decades, and cultures, ensuring there's always something new to discover.
              </p>
              <div className="flex items-center space-x-4 mt-8">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-400 text-sm">Stream Anywhere</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-400 text-sm">HD Quality</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-400 text-sm">No Ads</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-800 p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-red-600/30">
                  <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                </div>
                <h3 className="text-5xl font-black text-white mb-3">1000+</h3>
                <p className="text-gray-400 text-lg">Premium Films & Series</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-800 p-8 hover:border-gray-700 transition-all duration-300 group">
              <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors duration-300">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Curated Collection</h3>
              <p className="text-gray-400 leading-relaxed">
                Every film in our collection is carefully selected for its artistic merit, cultural significance, and entertainment value.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-800 p-8 hover:border-gray-700 transition-all duration-300 group">
              <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors duration-300">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Easy Discovery</h3>
              <p className="text-gray-400 leading-relaxed">
                Our intuitive search and filtering system makes it easy to find exactly what you're looking for or discover something new.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-800 p-8 hover:border-gray-700 transition-all duration-300 group">
              <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors duration-300">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Passion for Cinema</h3>
              <p className="text-gray-400 leading-relaxed">
                Built by film enthusiasts, for film enthusiasts. We share your passion for the art of filmmaking.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-center shadow-2xl shadow-red-600/20">
            <h2 className="text-4xl font-black text-white mb-4">Get In Touch</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Have questions, suggestions, or want to share your favorite films? We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="mailto:info@cinevault.com"
                className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-black font-bold rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
              <a
                href="#"
                className="inline-flex items-center px-8 py-4 bg-black/30 hover:bg-black/50 text-white font-bold rounded-lg border-2 border-white/30 hover:border-white/50 transition-all duration-200 backdrop-blur-sm"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a3 3 0 10-4.732 2.684m4.732-2.684a3 3 0 00-4.732-2.684M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default About