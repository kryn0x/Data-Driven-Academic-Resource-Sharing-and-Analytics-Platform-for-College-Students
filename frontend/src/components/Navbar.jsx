import { Link } from 'react-router-dom';

const Navbar = ({ onUploadClick, onResourcesClick }) => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200">
            AcadIntel
          </Link>
          
          <div className="flex items-center space-x-4">
            {/* Cool Resources Button */}
            <button 
              onClick={onResourcesClick}
              className="group relative px-6 py-2.5 font-medium text-gray-700 transition-all duration-300 hover:text-blue-600"
            >
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-gray-100 group-hover:bg-blue-50 group-hover:skew-x-12"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-blue-50 group-hover:bg-gray-100 group-hover:-skew-x-12"></span>
              <span className="absolute bottom-0 left-0 hidden w-full h-20 transition-all duration-100 ease-out transform group-hover:mb-8 group-hover:rotate-12"></span>
              <span className="relative flex items-center space-x-2">
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>Resources</span>
              </span>
            </button>

            {/* Cool Upload Button */}
            <button 
              onClick={onUploadClick}
              className="group relative px-6 py-2.5 font-medium text-white transition-all duration-300 transform hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-gradient-to-r from-[#6D8196] to-[#4A4A4A] group-hover:from-[#4A4A4A] group-hover:to-[#6D8196] group-hover:skew-x-12 rounded-lg"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-gradient-to-r from-[#4A4A4A] to-[#6D8196] group-hover:from-[#6D8196] group-hover:to-[#4A4A4A] group-hover:-skew-x-12 rounded-lg"></span>
              <span className="relative flex items-center space-x-2">
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span>Upload</span>
              </span>
            </button>

            {/* Cool Upload Button */}
            <button 
              onClick={onUploadClick}
              className="group relative px-6 py-2.5 font-medium text-white transition-all duration-300 transform hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:from-blue-700 group-hover:to-blue-600 group-hover:skew-x-12 rounded-lg"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-gradient-to-r from-blue-700 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:-skew-x-12 rounded-lg"></span>
              <span className="relative flex items-center space-x-2">
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span>Upload</span>
              </span>
            </button>

            {/* Cool Login Button */}
            <Link 
              to="/login"
              className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-blue-600 transition-all duration-300 ease-out border-2 border-blue-600 rounded-lg hover:text-white"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-600 group-hover:translate-x-0 ease">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-blue-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                Login
              </span>
              <span className="relative invisible">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;