import { Link } from 'react-router-dom';

const Navbar = ({ onUploadClick, onResourcesClick }) => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            AcadIntel
          </Link>
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={onResourcesClick}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              Resources
            </button>
            <button 
              onClick={onUploadClick}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              Upload
            </button>
            <Link 
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;