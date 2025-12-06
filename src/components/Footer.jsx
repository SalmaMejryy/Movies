const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
            </div>
            <span className="text-gray-600 text-sm font-medium">
              © 2024 CineVault. All rights reserved.
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            Your gateway to cinematic excellence. Discover, explore, and celebrate the art of filmmaking.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer