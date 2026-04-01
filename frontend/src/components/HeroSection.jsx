const HeroSection = ({ onExploreClick, onUploadClick }) => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Smarter Exam Preparation with Data-Driven Insights
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Upload and explore previous year question papers with automatic keyword analysis.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onExploreClick}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-lg shadow-md"
          >
            Explore Resources
          </button>
          <button 
            onClick={onUploadClick}
            className="bg-white text-gray-900 px-8 py-3 rounded-lg border-2 border-gray-300 hover:bg-gray-50 transition-colors duration-200 font-medium text-lg shadow-md"
          >
            Upload Paper
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;