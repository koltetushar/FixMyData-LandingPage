
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Upload, 
  Search, 
  BarChart3, 
  Download, 
  Zap, 
  Shield,
  TrendingUp,
  Database
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Upload className="w-6 h-6" />,
      title: "Easy File Upload",
      description: "Simply drag and drop your CSV files or browse to upload. Support for multiple file formats with automatic encoding detection."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Data Profiling",
      description: "Get comprehensive data insights including missing values, data types, statistical summaries, and data quality assessment."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Smart Data Cleaning",
      description: "Automated detection and handling of missing values, duplicates, outliers, and inconsistent data formats."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Interactive Visualizations",
      description: "Generate beautiful charts and graphs including histograms, scatter plots, correlation matrices, and distribution plots."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Statistical Analysis",
      description: "Perform descriptive statistics, correlation analysis, and basic statistical tests with automated interpretation."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Transformation",
      description: "Apply various transformations including normalization, encoding categorical variables, and feature engineering."
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Export Clean Data",
      description: "Download your cleaned and processed datasets in various formats including CSV, Excel, and JSON."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Processing",
      description: "Fast data processing with real-time feedback and progress indicators for large datasets."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-streamlit-gray-800 mb-4 font-source-sans">
            Powerful Features for Data Professionals
          </h2>
          <p className="text-xl text-streamlit-gray-600 max-w-2xl mx-auto font-source-sans">
            Everything you need to clean, analyze, and visualize your data in one comprehensive Streamlit application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-streamlit-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-streamlit-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-streamlit-blue">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-streamlit-gray-800 font-source-sans">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-streamlit-gray-600 font-source-sans">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-streamlit-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-streamlit-gray-800 mb-4 font-source-sans">
                Built with Streamlit
              </h3>
              <p className="text-streamlit-gray-600 mb-6 font-source-sans">
                Leveraging the power of Streamlit framework for rapid development and deployment. 
                Enjoy the familiar Streamlit interface with enhanced data processing capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Pandas', 'Streamlit', 'Plotly', 'Scikit-learn'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white text-streamlit-gray-700 rounded-full text-sm font-source-sans">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-streamlit-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-16 h-16 text-streamlit-blue" />
              </div>
              <p className="text-streamlit-gray-600 font-source-sans">
                Process datasets of any size with confidence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
