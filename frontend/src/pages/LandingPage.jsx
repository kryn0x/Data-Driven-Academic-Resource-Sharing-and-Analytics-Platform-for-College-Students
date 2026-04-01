import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import ResourceCard from '../components/ResourceCard';
import UploadModal from '../components/UploadModal';
import { getResources } from '../services/api';

const LandingPage = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const resourcesRef = useRef(null);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      setLoading(true);
      const response = await getResources();
      setResources(response.data);
      setError('');
    } catch (err) {
      setError('Failed to load resources');
      console.error('Error fetching resources:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleUploadSuccess = () => {
    fetchResources();
  };

  const scrollToResources = () => {
    resourcesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openUploadModal = () => {
    setIsUploadModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        onUploadClick={openUploadModal}
        onResourcesClick={scrollToResources}
      />
      
      <HeroSection 
        onExploreClick={scrollToResources}
        onUploadClick={openUploadModal}
      />
      
      <HowItWorksSection />
      
      {/* Resources Section */}
      <section ref={resourcesRef} className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Academic Resources</h2>
            <p className="text-gray-600 text-lg">Explore our collection of previous year question papers</p>
          </div>
          
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600 text-lg">Loading resources...</p>
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center mb-8">
              <p className="text-red-600 font-medium">{error}</p>
            </div>
          )}
          
          {!loading && !error && resources.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-12">
                <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
                <p className="text-gray-600 mb-6">Get started by uploading your first academic resource!</p>
                <button 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  onClick={openUploadModal}
                >
                  Upload Resource
                </button>
              </div>
            </div>
          )}
          
          {!loading && !error && resources.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <ResourceCard 
                  key={resource._id} 
                  resource={resource} 
                  onDeleteSuccess={fetchResources} 
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onUploadSuccess={handleUploadSuccess}
      />
    </div>
  );
};

export default LandingPage;