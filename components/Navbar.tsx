
import React, { useState } from 'react';
// Using 'react-router' instead of 'react-router-dom' to resolve export issues in this environment.
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Startseite', path: '/' },
    { label: 'Kontakt', path: '/kontakt' },
    { label: 'Formulare', path: '/formulare' },
    { label: 'Statuten', path: '/statuten' },
    { label: 'AGB / Impressum', path: '/impressum' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-14 h-14 overflow-hidden rounded-full border-2 border-purple-100 shadow-sm bg-white flex items-center justify-center p-1">
                <img 
                  src="/images/gecko_logo.png" 
                  alt="FreizeitHelden Logo" 
                  className="w-full h-full object-contain scale-150"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://api.dicebear.com/7.x/bottts/svg?seed=Chameleon";
                  }}
                />
              </div>
              <span className="text-2xl font-kids font-bold text-[#6A2C91] group-hover:text-[#2EB5B5] transition-colors">FreizeitHelden</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-all duration-300 font-bold text-sm uppercase tracking-wide px-4 py-2 rounded-xl ${
                  isActive(item.path) 
                    ? 'text-[#6A2C91] bg-purple-50' 
                    : 'text-slate-600 hover:text-[#6A2C91] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-[#6A2C91] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-purple-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-medium rounded-md ${
                  isActive(item.path) ? 'bg-purple-50 text-[#6A2C91]' : 'text-slate-600 hover:bg-purple-50 hover:text-[#6A2C91]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
