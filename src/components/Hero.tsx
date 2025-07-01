
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-streamlit-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-streamlit-gray-800 mb-6 font-source-sans">
              Clean Your Data,
              <span className="text-streamlit-blue"> Unlock Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-streamlit-gray-600 mb-8 font-source-sans leading-relaxed">
              FixMyData is a powerful Streamlit application that transforms messy datasets into clean, 
              analysis-ready data with automated insights and visualizations.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-streamlit-blue hover:bg-streamlit-darkBlue text-white px-8 py-3 text-lg font-source-sans"
              onClick={() => window.open('https://fixmydata.streamlit.app/', '_blank')}
            >
              <Play className="w-5 h-5 mr-2" />
              Launch FixMyData
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-streamlit-gray-300 text-streamlit-gray-700 hover:bg-streamlit-gray-50 px-8 py-3 text-lg font-source-sans"
              onClick={() => window.open('https://github.com/koltetushar/FixMyData', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-streamlit-blue mb-2">Python</div>
                <div className="text-streamlit-gray-600 font-source-sans">Powered Technology</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-streamlit-blue mb-2">Fast</div>
                <div className="text-streamlit-gray-600 font-source-sans">Data Processing</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-streamlit-blue mb-2">100%</div>
                <div className="text-streamlit-gray-600 font-source-sans">Open Source</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
