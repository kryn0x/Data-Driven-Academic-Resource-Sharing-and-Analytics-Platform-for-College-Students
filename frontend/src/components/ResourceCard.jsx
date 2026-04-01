import { Link } from 'react-router-dom';
import { deleteResource } from '../services/api';

const ResourceCard = ({ resource, onDeleteSuccess }) => {
  const handleDelete = async (e) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to delete this resource?')) {
      try {
        await deleteResource(resource._id);
        if (onDeleteSuccess) {
          onDeleteSuccess();
        }
      } catch (err) {
        alert('Failed to delete resource');
        console.error(err);
      }
    }
  };
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900 flex-1 mr-4">
          {resource.title}
        </h3>
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {resource.year}
        </span>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-700 font-medium mb-1">{resource.subject}</p>
        <p className="text-gray-500 text-sm">{resource.type}</p>
      </div>
      {resource.studySuggestions && resource.studySuggestions.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Focus Topics</p>
          <div className="flex flex-wrap gap-2">
            {resource.studySuggestions
              .filter(s => s.priority === 'High')
              .slice(0, 2)
              .map((suggestion, index) => (
                <span 
                  key={index} 
                  className="bg-red-50 text-red-700 border border-red-200 px-2 py-1 rounded-md text-xs font-medium"
                >
                  🔥 {suggestion.topic}
                </span>
              ))}
          </div>
        </div>
      )}
      
      {resource.keywords && resource.keywords.length > 0 && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {resource.keywords.map((keyword, index) => (
              <span 
                key={index} 
                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      )}
      
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <span className="text-gray-500 text-sm">
          {new Date(resource.uploadDate).toLocaleDateString()}
        </span>
        <div className="flex flex-wrap gap-2 justify-end">
          <a 
            href={`http://localhost:5000/uploads/${resource.filename}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
          >
            View PDF
          </a>
          <Link 
            to={`/resource/${resource._id}`}
            className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-medium"
          >
            Details
          </Link>
          <button 
            onClick={handleDelete}
            className="bg-red-50 text-red-600 px-3 py-2 rounded-lg hover:bg-red-100 transition-colors duration-200 text-sm font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;