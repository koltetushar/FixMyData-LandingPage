
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, CheckCircle } from 'lucide-react';

const Demo = () => {
  const steps = [
    {
      step: "1",
      title: "Upload Your Data",
      description: "Drag and drop your CSV file or browse to select it. The app automatically detects encoding and data types."
    },
    {
      step: "2",
      title: "Review Data Profile",
      description: "Get instant insights about your data quality, missing values, and statistical summaries."
    },
    {
      step: "3",
      title: "Clean & Transform",
      description: "Apply automated cleaning rules or customize transformations based on your specific needs."
    },
    {
      step: "4",
      title: "Visualize & Analyze",
      description: "Generate interactive charts and perform statistical analysis to understand your data better."
    },
    {
      step: "5",
      title: "Export Results",
      description: "Download your cleaned dataset and comprehensive analysis in multiple formats."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-streamlit-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-streamlit-gray-800 mb-4 font-source-sans">
            How FixMyData Works
          </h2>
          <p className="text-xl text-streamlit-gray-600 max-w-2xl mx-auto font-source-sans">
            From messy data to actionable insights in just 5 simple steps. Launch the application to get started.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {steps.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-streamlit-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold font-source-sans">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-streamlit-gray-800 mb-2 font-source-sans">
                    {item.title}
                  </h3>
                  <p className="text-sm text-streamlit-gray-600 font-source-sans">
                    {item.description}
                  </p>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block mt-4">
                      <ArrowRight className="w-6 h-6 text-streamlit-gray-400 mx-auto" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-streamlit-blue hover:bg-streamlit-darkBlue text-white px-8 py-3 text-lg font-source-sans"
            onClick={() => window.open('https://fixmydata.streamlit.app/', '_blank')}
          >
            <Play className="w-5 h-5 mr-2" />
            Launch FixMyData
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Demo;
