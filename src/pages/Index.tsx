
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Demo from '@/components/Demo';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-source-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <Demo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
