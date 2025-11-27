import React, { useState, useEffect } from 'react';
import type { View } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import FindDoctor from './components/FindDoctor';
import AIAssistant from './components/AIAssistant';
import Contact from './components/Contact';
import OurMission from './components/OurMission';
import Reviews from './components/Reviews';

// SEO Configuration for each view
const seoConfig: Record<View, { title: string; description: string }> = {
  home: {
    title: 'Midway Hospital - Compassionate Care, Advanced Medicine',
    description: 'Welcome to Midway Hospital. We combine state-of-the-art technology with a patient-first approach to provide the best possible care.'
  },
  doctors: {
    title: 'Find a Doctor - Midway Hospital',
    description: 'Search our directory of world-class physicians and specialists. Find the right doctor for your cardiology, neurology, or pediatric needs.'
  },
  services: {
    title: 'Medical Services - Midway Hospital',
    description: 'Explore our comprehensive medical services including Emergency Care, Cardiology, Orthopedics, Pediatrics, and more.'
  },
  'health-assistant': {
    title: 'Health Assistant - Midway Hospital',
    description: 'Get general health information and answers to your questions from our virtual Health Assistant.'
  },
  contact: {
    title: 'Contact Us - Midway Hospital',
    description: 'Get in touch with Midway Hospital. View our location, contact numbers, and visiting hours. Emergency contacts available.'
  },
  mission: {
    title: 'Our Mission & Values - Midway Hospital',
    description: 'Learn about Midway Hospital\'s mission to improve community health through compassion, excellence, and integrity.'
  },
  reviews: {
    title: 'Patient Reviews - Midway Hospital',
    description: 'Read testimonials from our patients about their experiences at Midway Hospital. See why we are a trusted choice for healthcare.'
  }
};

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('home');

  // Dynamic SEO Effect
  useEffect(() => {
    const config = seoConfig[activeView];
    if (config) {
      // Update Document Title
      document.title = config.title;

      // Helper function to update meta tags
      const updateMeta = (selector: string, content: string) => {
        const element = document.querySelector(selector);
        if (element) {
          element.setAttribute('content', content);
        }
      };

      // Update Meta Description
      updateMeta('meta[name="description"]', config.description);
      
      // Update Open Graph tags
      updateMeta('meta[property="og:title"]', config.title);
      updateMeta('meta[property="og:description"]', config.description);

      // Update Twitter tags
      updateMeta('meta[property="twitter:title"]', config.title);
      updateMeta('meta[property="twitter:description"]', config.description);
    }

    // Scroll to top on view change
    window.scrollTo(0, 0);
  }, [activeView]);

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return (
          <>
            <Hero onNavigate={setActiveView} />
            <Services />
          </>
        );
      case 'doctors':
        return <FindDoctor />;
      case 'services':
        return <Services />;
      case 'health-assistant':
        return <AIAssistant />;
      case 'contact':
        return <Contact />;
      case 'mission':
        return <OurMission />;
      case 'reviews':
        return <Reviews />;
      default:
        return <Hero onNavigate={setActiveView} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen dark:bg-slate-900 transition-colors duration-300">
      <Header activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer setActiveView={setActiveView} />
    </div>
  );
};

export default App;