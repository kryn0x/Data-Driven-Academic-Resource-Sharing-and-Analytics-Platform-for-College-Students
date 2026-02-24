import { Link } from 'react-router-dom';

const ResourceCard = ({ resource }) => {
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
        <div className="flex gap-2">
          <a 
            href={`http://localhost:5000/uploads/${resource.filename}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
          >
            View PDF
          </a>
          <Link 
            to={`/resource/${resource._id}`}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-medium"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;