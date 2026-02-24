const HeroSection = ({ onExploreClick, onUploadClick }) => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Smarter Exam Preparation with Data-Driven Insights
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Upload and explore previous year question papers with automatic keyword analysis.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onExploreClick}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-lg"
          >
            Explore Resources
          </button>
          <button 
            onClick={onUploadClick}
            className="bg-white text-gray-700 px-8 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200 font-medium text-lg"
          >
            Upload Paper
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;