
import React from 'react';
import { Download, Shield } from 'lucide-react';

const Statutes: React.FC = () => {
  const sections = [
    { id: "1", title: "Zweck des Vereins", content: "Der Verein 'FreizeitHelden' bezweckt die Entlastung von Familien mit Kindern und Jugendlichen mit Beeinträchtigungen durch individuelle Betreuung und Freizeitgestaltung." },
    { id: "2", title: "Mitgliedschaften", content: "Der Verein unterscheidet zwischen ordentlichen Mitgliedern (Standard) und außerordentlichen Mitgliedern (Ehrenmitglieder/Unterstützer)." },
    { id: "3", title: "Organe", content: "Die Organe des Vereins sind die Generalversammlung, der Vorstand, die Rechnungsprüfer und das Schiedsgericht." },
    { id: "4", title: "Finanzen", content: "Die finanziellen Mittel werden durch Mitgliedsbeiträge, Spenden und Förderungen aufgebracht." },
    { id: "5", title: "Auflösung", content: "Bei Auflösung des Vereins fällt das verbleibende Vermögen einer gemeinnützigen Organisation mit ähnlicher Zielsetzung zu." },
  ];

  return (
    <div className="py-16 px-4 max-w-4xl mx-auto space-y-12">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-100 pb-12">
          <div className="space-y-2">
            <h1 className="text-4xl font-kids font-bold text-[#6A2C91]">Vereinsstatuten</h1>
            <p className="text-slate-500">Offizielle Satzung: <em>Vereinsstatuten FreizeitHelden_neu</em></p>
          </div>
          <button className="flex items-center space-x-2 px-6 py-3 bg-[#6A2C91] text-white rounded-2xl font-bold hover:bg-purple-800 transition shadow-lg active:scale-95">
             <Download size={20} />
             <span>Statuten laden (.rtf)</span>
          </button>
       </div>

       <div className="bg-blue-50 p-8 rounded-3xl flex items-start space-x-6 border border-blue-100">
          <Shield className="text-blue-600 flex-shrink-0" size={32} />
          <div>
            <h3 className="font-bold text-blue-900 mb-2">Transparenz & Verlässlichkeit</h3>
            <p className="text-sm text-blue-800 leading-relaxed">
              Als eingetragener Verein legen wir größten Wert auf Transparenz. Hier findest du die Kernpunkte unserer Satzung. Die vollständige Version kann jederzeit angefordert werden.
            </p>
          </div>
       </div>

       <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.id} className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                <span className="w-10 h-10 bg-purple-100 text-[#6A2C91] rounded-full flex items-center justify-center mr-4 text-lg">§ {section.id}</span>
                {section.title}
              </h2>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-slate-700 leading-relaxed italic">
                {section.content}
              </div>
            </div>
          ))}
       </div>

       <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mt-20">
          <p className="text-sm text-slate-500 text-center">
            Die vollständigen Statuten wurden bei der Vereinsbehörde eingereicht und bilden das rechtliche Fundament von FreizeitHelden.
          </p>
       </div>
    </div>
  );
};

export default Statutes;
