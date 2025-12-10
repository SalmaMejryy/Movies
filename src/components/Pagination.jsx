const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = []
  const maxVisiblePages = 5

  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1)
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return (
    <div className="flex items-center justify-center space-x-2 mt-16 mb-12">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 rounded font-medium transition-all duration-200 ${
          currentPage === 1
            ? 'bg-gray-800 text-gray-600 cursor-not-allowed opacity-50'
            : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600 hover:border-gray-500'
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* First Page */}
      {startPage > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="px-4 py-2 rounded font-medium bg-gray-800 text-white hover:bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all duration-200"
          >
            1
          </button>
          {startPage > 2 && <span className="text-gray-500 px-2">...</span>}
        </>
      )}

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded font-medium transition-all duration-200 ${
            currentPage === page
              ? 'bg-red-600 text-white border-2 border-red-600 shadow-lg shadow-red-600/30'
              : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600 hover:border-gray-500'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Last Page */}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="text-gray-500 px-2">...</span>}
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-4 py-2 rounded font-medium bg-gray-800 text-white hover:bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all duration-200"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 rounded font-medium transition-all duration-200 ${
          currentPage === totalPages
            ? 'bg-gray-800 text-gray-600 cursor-not-allowed opacity-50'
            : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600 hover:border-gray-500'
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default Pagination