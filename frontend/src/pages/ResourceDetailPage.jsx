import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getResources, deleteResource } from '../services/api';

const ResourceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this resource?')) {
      try {
        await deleteResource(id);
        navigate('/');
      } catch (err) {
        alert('Failed to delete resource');
        console.error('Delete error:', err);
      }
    }
  };

  useEffect(() => {
    fetchResource();
  }, [id]);

  const fetchResource = async () => {
    try {
      setLoading(true);
      // For now, we'll get all resources and find the one we need
      // In a real app, you'd have a getResourceById API endpoint
      const response = await getResources();
      const foundResource = response.data.find(r => r._id === id);
      if (foundResource) {
        setResource(foundResource);
      } else {
        setError('Resource not found');
      }
    } catch (err) {
      setError('Failed to load resource');
      console.error('Error fetching resource:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading resource...</p>
        </div>
      </div>
    );
  }

  if (error || !resource) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Resource Not Found</h1>
          <p className="text-gray-600 mb-6">{error || 'The requested resource could not be found.'}</p>
          <Link 
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              AcadIntel
            </Link>
            <Link 
              to="/"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              ← Back to Resources
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Resource Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-start mb-6">
                <h1 className="text-3xl font-bold text-gray-900">{resource.title}</h1>
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium text-sm">
                  {resource.year}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Subject</h3>
                  <p className="text-base text-gray-900 font-medium">{resource.subject}</p>
                </div>
                <div>
                  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Type</h3>
                  <p className="text-base text-gray-900 font-medium">{resource.type}</p>
                </div>
              </div>

              {resource.keywords && resource.keywords.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {resource.keywords.map((keyword, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
                <a 
                  href={`http://localhost:5000/uploads/${resource.filename}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View PDF
                </a>
                
                <button
                  onClick={handleDelete}
                  className="inline-flex items-center bg-red-50 text-red-600 px-4 py-2.5 rounded-lg hover:bg-red-100 transition-colors duration-200 font-medium text-sm"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Analytics */}
          <div className="space-y-6">
            {/* Top Keywords Analytics */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Keywords</h3>
              <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center mb-3">
                <p className="text-sm text-gray-500">Chart visualization</p>
              </div>
              <p className="text-xs text-gray-600">
                Keyword frequency analysis helps identify important topics.
              </p>
            </div>

            {/* Resource Info */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Resource Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Uploaded:</span>
                  <span className="text-gray-900 font-medium">
                    {new Date(resource.uploadDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">File Size:</span>
                  <span className="text-gray-900 font-medium">
                    {(resource.fileSize / 1024 / 1024).toFixed(2)} MB
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Keywords:</span>
                  <span className="text-gray-900 font-medium">
                    {resource.keywords ? resource.keywords.length : 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Study Suggestions Section - Full Width Below Main Content */}
        {resource.studySuggestions && resource.studySuggestions.length > 0 && (
          <div className="mt-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Study Suggestions</h2>
              
              <div className="space-y-6">
                {/* High Priority */}
                {resource.studySuggestions.filter(s => s.priority === 'High').length > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">High Priority</h3>
                    <div className="flex flex-wrap gap-2">
                      {resource.studySuggestions.filter(s => s.priority === 'High').map((s, i) => (
                        <span 
                          key={i} 
                          className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-red-600 transition-colors duration-200"
                        >
                          {s.topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Medium Priority */}
                {resource.studySuggestions.filter(s => s.priority === 'Medium').length > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Medium Priority</h3>
                    <div className="flex flex-wrap gap-2">
                      {resource.studySuggestions.filter(s => s.priority === 'Medium').map((s, i) => (
                        <span 
                          key={i} 
                          className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-orange-600 transition-colors duration-200"
                        >
                          {s.topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Low Priority */}
                {resource.studySuggestions.filter(s => s.priority === 'Low').length > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Low Priority</h3>
                    <div className="flex flex-wrap gap-2">
                      {resource.studySuggestions.filter(s => s.priority === 'Low').map((s, i) => (
                        <span 
                          key={i} 
                          className="bg-gray-400 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-gray-500 transition-colors duration-200"
                        >
                          {s.topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ResourceDetailPage;