const HowItWorksSection = () => {
  const steps = [
    {
      title: "Upload Question Paper",
      description: "Simply upload your PDF question papers from previous years",
      icon: "📄"
    },
    {
      title: "Automatic Keyword Extraction",
      description: "Our system analyzes the content and extracts key topics automatically",
      icon: "🔍"
    },
    {
      title: "Discover Frequently Asked Topics",
      description: "Get insights into the most important topics and patterns",
      icon: "📊"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg">Simple steps to get valuable insights from your study materials</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-200 border border-gray-200">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;