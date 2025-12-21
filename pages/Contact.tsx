
import React from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-kids font-bold text-[#6A2C91]">Kontakt</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">Wir freuen uns darauf, euch und euer Kind kennenzulernen. Schreibt uns oder ruft uns einfach an!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info & Details */}
        <div className="space-y-10">
          <div className="bg-purple-50 p-8 rounded-3xl space-y-8">
            <h2 className="text-2xl font-bold text-slate-800">So erreicht ihr uns</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#6A2C91] shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Telefon</p>
                  <p className="text-lg font-bold">+43 660 255 51 20</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#6A2C91] shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">E-Mail</p>
                  <p className="text-lg font-bold">freizeithelden2024@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#6A2C91] shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Adresse</p>
                  <p className="text-lg font-bold">Platzhalter-Adresse, Österreich</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#84C225]/10 p-8 rounded-3xl border-2 border-dashed border-[#84C225]">
            <h3 className="text-xl font-bold mb-4 text-slate-800">Wir sind mobil</h3>
            <p className="text-slate-700">
              Wir kommen gerne zu einem Erstgespräch zu euch nach Hause oder treffen uns an einem Ort, an dem ihr euch wohlfühlt.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Vollständiger Name</label>
                <input 
                  type="text" 
                  placeholder="Erika Mustermann"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#6A2C91] focus:border-transparent outline-none transition"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">E-Mail Adresse</label>
                <input 
                  type="email" 
                  placeholder="beispiel@mail.com"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#6A2C91] focus:border-transparent outline-none transition"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Telefonnummer (optional)</label>
              <input 
                type="tel" 
                placeholder="+43..."
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#6A2C91] focus:border-transparent outline-none transition"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Deine Nachricht</label>
              <textarea 
                rows={5}
                placeholder="Wie können wir euch unterstützen?"
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#6A2C91] focus:border-transparent outline-none transition resize-none"
              ></textarea>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-5 h-5 rounded border-slate-300 text-[#6A2C91] focus:ring-[#6A2C91]" id="privacy" />
              <label htmlFor="privacy" className="text-sm text-slate-600">
                Ich habe die <a href="#/impressum" className="text-[#6A2C91] underline">Datenschutzerklärung</a> gelesen und akzeptiere sie.
              </label>
            </div>

            <button className="w-full py-5 bg-[#6A2C91] text-white rounded-2xl font-bold text-lg hover:bg-purple-800 transition shadow-lg flex items-center justify-center space-x-2">
              <span>Nachricht absenden</span>
              <Check size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
