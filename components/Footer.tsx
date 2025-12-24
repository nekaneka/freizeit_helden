
import React from 'react';
// Fixing export errors by importing Link from 'react-router'.
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-800 pb-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
             <div className="w-8 h-8 bg-[#6A2C91] rounded-md flex items-center justify-center font-bold">FH</div>
             <span className="text-2xl font-kids font-bold">FreizeitHelden</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Wir begleiten Kinder und Jugendliche mit Beeinträchtigung liebevoll durch ihre Freizeit und entlasten Eltern dort, wo es nötig ist.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#6A2C91] transition duration-300">
               <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#6A2C91] transition duration-300">
               <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-bold">Navigation</h3>
          <ul className="space-y-3 text-slate-400">
            <li><Link to="/" className="hover:text-white transition">Startseite</Link></li>
            <li><Link to="/kontakt" className="hover:text-white transition">Kontakt</Link></li>
            <li><Link to="/formulare" className="hover:text-white transition">Formulare</Link></li>
            <li><Link to="/statuten" className="hover:text-white transition">Statuten</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-bold">Rechtliches</h3>
          <ul className="space-y-3 text-slate-400">
            <li><Link to="/impressum" className="hover:text-white transition">Impressum</Link></li>
            <li><Link to="/impressum" className="hover:text-white transition">Datenschutz</Link></li>
            <li><Link to="/impressum" className="hover:text-white transition">AGB</Link></li>
          </ul>
          <div className="pt-4">
             <Link 
              to="/kontakt" 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-3 rounded-xl font-bold hover:from-purple-500 hover:to-purple-700 transition"
            >
              <Heart size={18} className="fill-current" />
              <span>Mitglied werden</span>
             </Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 pt-8 text-center text-slate-500 text-sm">
        <p>&copy; 2024 Verein FreizeitHelden. Alle Rechte vorbehalten. Mit Liebe gemacht für Kinder.</p>
      </div>
    </footer>
  );
};

export default Footer;
