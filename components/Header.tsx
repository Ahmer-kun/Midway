import React, { useState } from 'react';
import type { View } from '../types';
import { StethoscopeIcon, SunIcon, MoonIcon } from './Icons';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  activeView: View;
  setActiveView: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ activeView, setActiveView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems: { name: string; view: View }[] = [
    { name: 'Home', view: 'home' },
    { name: 'Find a Doctor', view: 'doctors' },
    { name: 'Services', view: 'services' },
    { name: 'Health Assistant', view: 'health-assistant' },
    { name: 'Reviews', view: 'reviews' },
    { name: 'Contact', view: 'contact' },
  ];

  const NavLink: React.FC<{ view: View; children: React.ReactNode; isMobile?: boolean }> = ({ view, children, isMobile = false }) => (
    <button
      onClick={() => {
        setActiveView(view);
        setIsMenuOpen(false);
      }}
      className={`rounded-md text-sm font-medium transition-colors ${
        activeView === view
          ? 'bg-brand-blue text-white'
          : 'text-gray-700 hover:bg-brand-blue-light hover:text-brand-blue dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white'
      } ${isMobile ? 'block w-full text-left px-3 py-2' : 'px-3 py-2'}`}
    >
      {children}
    </button>
  );

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 dark:bg-slate-900/80 dark:shadow-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => setActiveView('home')} className="flex-shrink-0 flex items-center gap-2">
              <StethoscopeIcon className="h-8 w-8 text-brand-blue" />
              <span className="text-xl font-bold text-brand-blue dark:text-white">Midway Hospital</span>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink key={item.view} view={item.view}>
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
           <div className="hidden md:flex items-center">
              <button onClick={toggleTheme} className="p-2 rounded-full text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700">
                {theme === 'light' ? <MoonIcon className="h-5 w-5"/> : <SunIcon className="h-5 w-5"/>}
              </button>
            </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleTheme} className="p-2 rounded-full text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700">
                {theme === 'light' ? <MoonIcon className="h-6 w-6"/> : <SunIcon className="h-6 w-6"/>}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-brand-blue-light dark:bg-slate-800 ml-2 inline-flex items-center justify-center p-2 rounded-md text-brand-blue dark:text-slate-300 hover:text-white hover:bg-brand-blue dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink key={item.view} view={item.view} isMobile>
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;