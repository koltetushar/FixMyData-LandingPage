
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="about" className="bg-streamlit-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-streamlit-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-2xl font-bold font-source-sans">FixMyData</span>
            </div>
            <p className="text-streamlit-gray-300 mb-6 font-source-sans leading-relaxed">
              A powerful, open-source data cleaning and analysis application. 
              Transform your messy datasets into clean, actionable insights with professional-grade tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                size="sm"
                className="border-streamlit-gray-600 text-streamlit-gray-300 hover:bg-streamlit-gray-700 hover:text-white hover:border-streamlit-gray-500 transition-all duration-200"
                onClick={() => window.open('https://github.com/koltetushar/FixMyData', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub Repository
              </Button>
              <Button
                size="sm"
                className="bg-streamlit-blue hover:bg-streamlit-darkBlue text-white transition-all duration-200"
                onClick={() => window.open('https://fixmydata.streamlit.app/', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Launch App
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-source-sans">Features</h3>
            <ul className="space-y-2 text-streamlit-gray-300 font-source-sans">
              <li>Data Cleaning</li>
              <li>Statistical Analysis</li>
              <li>Data Visualization</li>
              <li>Export Options</li>
              <li>Interactive Interface</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-source-sans">Technology</h3>
            <ul className="space-y-2 text-streamlit-gray-300 font-source-sans">
              <li>Python</li>
              <li>Streamlit</li>
              <li>Pandas</li>
              <li>Plotly</li>
              <li>Scikit-learn</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-streamlit-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mt-4 md:mt-0">
              <p className="text-streamlit-gray-400 text-sm font-source-sans text-center md:text-left">
                © 2025 FixMyData. Open source project under MIT License.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
