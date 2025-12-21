
import React from 'react';
import { Download, FileText, FileCheck, ClipboardList, ShieldCheck, Heart, Landmark } from 'lucide-react';

const FormCard: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({ title, desc, icon }) => (
  <div className="bg-white p-6 rounded-3xl shadow-md border border-slate-100 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 hover:shadow-lg transition group">
    <div className="w-16 h-16 bg-purple-50 text-[#6A2C91] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#6A2C91] group-hover:text-white transition-colors">
      {icon}
    </div>
    <div className="flex-grow space-y-1">
      <h3 className="font-bold text-lg text-slate-800">{title}</h3>
      <p className="text-sm text-slate-500 mb-4">{desc}</p>
      <button className="flex items-center space-x-2 px-4 py-2 bg-[#84C225] text-white rounded-xl text-sm font-bold hover:bg-[#74ae20] transition shadow-sm active:scale-95">
        <Download size={16} />
        <span>Download (.pdf / .docx)</span>
      </button>
    </div>
  </div>
);

const Forms: React.FC = () => {
  const careForms = [
    { 
      title: "Delegation Pflege", 
      desc: "Grundlagen zur Übertragung pflegerischer Tätigkeiten.", 
      icon: <ClipboardList /> 
    },
    { 
      title: "Ärztliche Anordnung – Medikamente", 
      desc: "Notwendig für die Verabreichung von Medikamenten durch unser Team.", 
      icon: <FileText /> 
    },
    { 
      title: "Betreuungsvertrag", 
      desc: "Die vertragliche Grundlage für unsere Zusammenarbeit.", 
      icon: <FileCheck /> 
    },
    { 
      title: "Delegation komplexe medizinische Pflege", 
      desc: "Spezielle Anordnung für intensivmedizinische oder komplexe Bedürfnisse.", 
      icon: <ClipboardList /> 
    },
  ];

  const associationForms = [
    { 
      title: "Vereinsstatuten FreizeitHelden", 
      desc: "Die offizielle Satzung unseres Vereins.", 
      icon: <Landmark /> 
    },
    { 
      title: "Mitgliedsantrag", 
      desc: "Werde Teil der Helden-Familie (Standard oder Ehrenmitglied).", 
      icon: <Heart /> 
    },
    { 
      title: "Datenschutz-Einwilligung", 
      desc: "Informationen zur sicheren Verarbeitung deiner Daten.", 
      icon: <ShieldCheck /> 
    },
  ];

  return (
    <div className="py-16 px-4 max-w-5xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-kids font-bold text-[#6A2C91]">Formulare & Dokumente</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Hier finden Eltern und Unterstützer alle notwendigen Unterlagen zum Herunterladen. Bitte fülle die benötigten Formulare aus und bringe sie zum Erstgespräch mit.
        </p>
      </div>

      <div className="bg-[#2EB5B5]/10 p-6 rounded-3xl flex items-center space-x-4 border border-[#2EB5B5]/20">
        <div className="text-[#2EB5B5]"><ShieldCheck size={32} /></div>
        <p className="text-sm text-slate-700">
          <strong>Hinweis zum Datenschutz:</strong> Alle Dokumente dienen ausschließlich der optimalen und sicheren Betreuung Ihres Kindes. Ihre Daten werden gemäß DSGVO vertraulich behandelt.
        </p>
      </div>

      {/* Category: Betreuung */}
      <section className="space-y-8">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-2 bg-[#6A2C91] rounded-full"></div>
          <h2 className="text-2xl font-kids font-bold text-slate-800">Betreuung & Pflege</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careForms.map((form, i) => (
            <FormCard key={i} {...form} />
          ))}
        </div>
      </section>

      {/* Category: Verein */}
      <section className="space-y-8">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-2 bg-[#84C225] rounded-full"></div>
          <h2 className="text-2xl font-kids font-bold text-slate-800">Verein & Mitgliedschaft</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {associationForms.map((form, i) => (
            <FormCard key={i} {...form} />
          ))}
        </div>
      </section>

      <div className="bg-slate-50 p-8 rounded-3xl border border-dashed border-slate-200 text-center">
        <p className="text-slate-500 font-medium italic">
          Benötigen Sie Hilfe beim Ausfüllen? Kontaktieren Sie uns gerne telefonisch!
        </p>
      </div>
    </div>
  );
};

export default Forms;
