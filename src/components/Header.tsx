
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Monitor, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-streamlit-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-streamlit-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-2xl font-bold text-streamlit-gray-800 font-source-sans">
              FixMyData
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-streamlit-gray-700 hover:text-streamlit-blue transition-colors font-source-sans">
              Features
            </a>
            <a href="#how-it-works" className="text-streamlit-gray-700 hover:text-streamlit-blue transition-colors font-source-sans">
              How it Works
            </a>
            <a href="#about" className="text-streamlit-gray-700 hover:text-streamlit-blue transition-colors font-source-sans">
              About
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-streamlit-gray-300 text-streamlit-gray-700 hover:bg-streamlit-gray-50"
              onClick={() => window.open('https://github.com/koltetushar/FixMyData', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button
              className="bg-streamlit-blue hover:bg-streamlit-darkBlue text-white"
              size="sm"
              onClick={() => window.open('https://fixmydata.streamlit.app/', '_blank')}
            >
              Launch App
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-streamlit-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-streamlit-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-streamlit-gray-200 pt-4">
            <nav className="flex flex-col space-y-4 mb-4">
              <a
                href="#features"
                className="text-streamlit-gray-700 hover:text-streamlit-blue transition-colors font-source-sans"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-streamlit-gray-700 hover:text-streamlit-blue transition-colors font-source-sans"
                onClick={() => setIsMenuOpen(false)}
              >
                How it Works
              </a>
              <a
                href="#about"
                className="text-streamlit-gray-700 hover:text-streamlit-blue transition-colors font-source-sans"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </nav>
            <div className="flex flex-col space-y-3">
              <Button
                variant="outline"
                size="sm"
                className="border-streamlit-gray-300 text-streamlit-gray-700 hover:bg-streamlit-gray-50 w-full justify-center"
                onClick={() => {
                  window.open('https://github.com/koltetushar/FixMyData', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                className="bg-streamlit-blue hover:bg-streamlit-darkBlue text-white w-full justify-center"
                size="sm"
                onClick={() => {
                  window.open('https://fixmydata.streamlit.app/', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                Launch App
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
        
        {/* Desktop Notice */}
        <div className="mt-3 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center justify-center space-x-2 text-sm text-blue-700">
            <Monitor className="w-4 h-4" />
            <span className="font-source-sans">Best experienced on Desktop/Laptop for optimal performance</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
