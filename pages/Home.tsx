
import React from 'react';
// Switching source to 'react-router' to fix module export errors.
import { Link } from 'react-router-dom';
import PuzzleNav from '../components/PuzzleNav';
import { Heart, Users, Calendar, MapPin, CheckCircle2, Star, Zap, CreditCard } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-0 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-green-50 py-16 lg:py-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-3/5 space-y-8 text-center lg:text-left z-10">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-[#6A2C91] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest">
              <Zap size={14} />
              <span>Entlastung & Freizeitbegleitung</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-kids font-bold text-slate-900 leading-tight">
              Entlastung für <span className="text-[#6A2C91]">Familien</span>. <br />
              Zeit für <span className="text-[#2EB5B5]">Kinder</span>.
            </h1>
            <p className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Wir begleiten und betreuen Kinder und Jugendliche mit körperlicher oder kognitiver Beeinträchtigung – individuell, liebevoll und verlässlich.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start pt-4">
              <Link 
                to="/kontakt" 
                className="px-10 py-5 bg-[#6A2C91] text-white rounded-2xl font-bold text-lg hover:bg-purple-800 transition-all shadow-xl hover:-translate-y-1"
              >
                Kontakt aufnehmen
              </Link>
              <Link 
                to="/formulare" 
                className="px-10 py-5 bg-white text-[#6A2C91] border-2 border-purple-100 rounded-2xl font-bold text-lg hover:bg-purple-50 transition-all shadow-sm"
              >
                Formulare laden
              </Link>
            </div>
          </div>
          <div className="lg:w-2/5 mt-16 lg:mt-0 relative flex justify-center">
             <div className="relative w-full max-w-sm aspect-square bg-white rounded-[3rem] shadow-2xl p-12 flex items-center justify-center border border-purple-50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-green-500/10"></div>
                <div className="relative z-10 text-center space-y-4">
                  <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-[#6A2C91]">
                    <Heart size={48} fill="currentColor" />
                  </div>
                  <h3 className="text-2xl font-kids font-bold text-slate-800">Gemeinsam Helden sein</h3>
                  <p className="text-slate-500 text-sm">Individuelle Begleitung für besondere Bedürfnisse.</p>
                </div>
                {/* Decorative blobs */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#2EB5B5]/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#84C225]/10 rounded-full blur-2xl"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Puzzle Navigation Section */}
      <section className="bg-white py-20 relative">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-kids font-bold text-slate-800 mb-2">Entdecke FreizeitHelden</h2>
          <p className="text-lg text-slate-500 max-w-lg mx-auto mb-4">Klicke auf die Puzzleteile für mehr Informationen.</p>
          <PuzzleNav />
        </div>
      </section>

      {/* WER SECTION */}
      <section id="wer" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-kids font-bold text-[#6A2C91]">Wer wir sind</h2>
            <p className="text-xl text-slate-700 leading-relaxed">
              Wir sind der Verein FreizeitHelden – ein Team aus qualifizierten Fachkräften, das Familien entlastet und Kindern passende Freizeitbegleitung bietet. Wir arbeiten wertschätzend, individuell und alltagsnah.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-purple-100 text-center hover:shadow-md transition-shadow">
                <div className="w-28 h-28 rounded-full mx-auto mb-6 border-4 border-[#2EB5B5] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1544717297-fa154daaf544?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="Tanja K." />
                </div>
                <h3 className="text-xl font-bold text-[#6A2C91]">Tanja K., MSc</h3>
                <p className="text-sm font-semibold text-slate-500 mt-1">Pädagogin</p>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-purple-100 text-center hover:shadow-md transition-shadow">
                <div className="w-28 h-28 rounded-full mx-auto mb-6 border-4 border-[#84C225] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="Hanna M." />
                </div>
                <h3 className="text-xl font-bold text-[#6A2C91]">Hanna M., BSc</h3>
                <p className="text-sm font-semibold text-slate-500 mt-1">DGKPP</p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80&w=1200" className="rounded-[3rem] shadow-2xl relative z-10" alt="Unser Team" />
          </div>
        </div>
      </section>

      {/* WARUM SECTION */}
      <section id="warum" className="py-24 bg-[#6A2C91] text-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-10">
          <Heart className="w-20 h-20 mx-auto text-[#84C225] animate-pulse" fill="currentColor" />
          <h2 className="text-4xl md:text-5xl font-kids font-bold">Warum FreizeitHelden?</h2>
          <p className="text-2xl md:text-3xl font-light italic leading-relaxed text-purple-100">
            „Familien mit beeinträchtigten Kindern tragen große Verantwortung. Wir möchten ihnen Freiräume ermöglichen – und Kindern sichere, wertvolle Freizeitmomente bieten.“
          </p>
        </div>
      </section>

      {/* WAS SECTION */}
      <section id="was" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 space-y-4">
             <h2 className="text-4xl font-kids font-bold text-[#2EB5B5]">Was wir tun</h2>
             <p className="text-xl text-slate-600">Unsere Leistungen für euch</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Individuelle Betreuung", desc: "Betreuung des Kindes genau dort, wo sie gebraucht wird.", color: "bg-[#6A2C91]" },
              { title: "Freizeitbegleitung", desc: "Gemeinsames Spielen, Kreatives oder kleine Ausflüge.", color: "bg-[#2EB5B5]" },
              { title: "Entlastung der Eltern", desc: "Freiraum für Termine, Erledigungen oder einfach Erholung.", color: "bg-[#84C225]" },
              { title: "Gruppenaktivitäten", desc: "Aktivitäten in kleinen, überschaubaren Gruppen.", color: "bg-[#6A2C91]" },
              { title: "Angepasste Unterstützung", desc: "Alles wird an Bedürfnisse, Tagesform & Fähigkeiten angepasst.", color: "bg-[#2EB5B5]" },
            ].map((service, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-purple-200 transition-all group hover:-translate-y-2">
                <div className={`w-14 h-14 ${service.color} text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition shadow-lg`}>
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FÜR WEN SECTION */}
      <section id="wer-fuer" className="py-24 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
             <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800" className="rounded-[3rem] shadow-2xl relative z-10" alt="Kinder" />
          </div>
          <div className="lg:w-1/2 space-y-10">
            <h2 className="text-4xl font-kids font-bold text-[#6A2C91]">Für wen wir da sind</h2>
            <div className="space-y-6">
              {[
                "Kinder und Jugendliche mit körperlichen oder kognitiven Beeinträchtigungen",
                "Familien, die Unterstützung und Entlastung benötigen",
                "Eltern mit eingeschränkten zeitlichen Ressourcen"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-6 bg-white p-6 rounded-[1.5rem] shadow-sm border-l-8 border-[#84C225]">
                  <span className="text-xl font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WIE SECTION */}
      <section id="wie" className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-kids font-bold text-center mb-20 text-[#2EB5B5]">So funktioniert es</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-purple-100 -translate-x-1/2" />
            <div className="space-y-16">
              {[
                { title: "Kontakt & Erstgespräch", icon: <Users /> },
                { title: "Kennenlernen & Bedarfserhebung", icon: <Calendar /> },
                { title: "Individuelle Planung", icon: <MapPin /> },
                { title: "Start der Betreuung", icon: <Zap /> },
                { title: "Regelmäßige Rücksprache & Anpassungen", icon: <Star /> },
              ].map((step, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-10 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 w-full text-center md:text-left">
                    <div className={`inline-block p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                      <h3 className="text-2xl font-bold text-slate-800">{step.title}</h3>
                    </div>
                  </div>
                  <div className="z-10 w-16 h-16 rounded-2xl bg-[#6A2C91] text-white flex items-center justify-center font-bold border-4 border-white shadow-xl">
                    <span className="text-2xl">{i + 1}</span>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WIEVIEL SECTION */}
      <section id="wieviel" className="py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-kids font-bold text-[#6A2C91]">Mitgliedschaften</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-white rounded-[3rem] p-12 shadow-2xl border-t-[12px] border-[#6A2C91] hover:-translate-y-2 transition-transform">
                 <h3 className="text-3xl font-kids font-bold mb-4">Standard-Mitgliedschaft</h3>
                 <div className="flex items-baseline mb-10 text-6xl font-bold">50 € <span className="text-slate-500 text-lg ml-2">/ Monat</span></div>
                 <ul className="space-y-6 mb-12 text-lg">
                    <li>✓ 10 % Rabatt auf Betreuung</li>
                    <li>✓ Vergünstigte Ausflüge</li>
                    <li>✓ Reservierte Plätze</li>
                    <li>✓ Gratis-Stunde nach 10 Buchungen</li>
                 </ul>
                 {/* REPLACE THE HREF WITH YOUR PAYPAL SUBSCRIPTION LINK */}
                 <a 
                   href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PLACEHOLDER" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center space-x-2 w-full py-5 bg-[#6A2C91] text-white rounded-2xl font-bold text-xl hover:bg-purple-800 transition shadow-lg"
                 >
                    <CreditCard size={24} />
                    <span>Mitglied werden</span>
                 </a>
              </div>

              <div className="bg-white rounded-[3rem] p-12 shadow-2xl border-t-[12px] border-[#2EB5B5] hover:-translate-y-2 transition-transform">
                 <h3 className="text-3xl font-kids font-bold mb-4">Ehrenmitgliedschaft</h3>
                 <div className="flex items-baseline mb-6 text-6xl font-bold"><span className="text-xl font-normal mr-2">ab</span> 45 € <span className="text-slate-500 text-lg ml-2">/ Monat</span></div>
                 <p className="italic text-slate-500 mb-10">Werde zum Möglichmacher!</p>
                 <ul className="space-y-6 mb-12 text-lg">
                    <li>✓ Hilfe für finanziell schwache Familien</li>
                    <li>✓ Unterstützung neuer Projekte</li>
                    <li>✓ Zuschüsse für Ausflüge</li>
                    <li>✓ Hilfe beim Vereinsaufbau</li>
                 </ul>
                 {/* REPLACE THE HREF WITH YOUR PAYPAL DONATION LINK */}
                 <a 
                   href="https://www.paypal.com/donate/?hosted_button_id=PLACEHOLDER" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center space-x-2 w-full py-5 bg-[#2EB5B5] text-white rounded-2xl font-bold text-xl hover:bg-turquoise-600 transition shadow-lg"
                 >
                    <Heart size={24} />
                    <span>Jetzt fördern</span>
                 </a>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
