
import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="py-16 px-4 max-w-4xl mx-auto space-y-16">
      {/* Impressum */}
      <section className="space-y-8">
        <h1 className="text-4xl font-kids font-bold text-[#6A2C91]">Impressum</h1>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-6 text-slate-700">
          <div>
            <h2 className="font-bold text-slate-900 mb-1">Vereinsname</h2>
            <p>Verein FreizeitHelden</p>
          </div>
          <div>
            <h2 className="font-bold text-slate-900 mb-1">Adresse</h2>
            <p>Platzhalterstraße 1<br />1234 Musterstadt, Österreich</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="font-bold text-slate-900 mb-1">ZVR-Nummer</h2>
              <p>Wird nach Registrierung ergänzt</p>
            </div>
            <div>
              <h2 className="font-bold text-slate-900 mb-1">Obfrau/Obmann</h2>
              <p>Tanja K. / Hanna M.</p>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-slate-900 mb-1">Kontakt</h2>
            <p>E-Mail: freizeithelden2024@gmail.com<br />Tel: +43 660 255 51 20</p>
          </div>
          <div className="pt-4 border-t border-slate-50">
            <h2 className="font-bold text-slate-900 mb-2">Haftungsausschluss</h2>
            <p className="text-sm leading-relaxed">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
          </div>
        </div>
      </section>

      {/* Datenschutz */}
      <section className="space-y-8">
        <h2 className="text-3xl font-kids font-bold text-[#2EB5B5]">Datenschutz</h2>
        <div className="prose prose-slate max-w-none bg-slate-50 p-8 rounded-3xl text-slate-700 text-sm leading-relaxed space-y-4">
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
          </p>
          <h3 className="font-bold">Kontakt mit uns</h3>
          <p>
            Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <h3 className="font-bold">Ihre Rechte</h3>
          <p>
            Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu.
          </p>
        </div>
      </section>

      {/* AGB */}
      <section className="space-y-8">
        <h2 className="text-3xl font-kids font-bold text-[#84C225]">AGB für Betreuungsleistungen</h2>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-slate-700 space-y-4">
          <p className="font-medium">1. Geltungsbereich</p>
          <p className="text-sm">Diese Allgemeinen Geschäftsbedingungen gelten für alle Betreuungs- und Freizeitbegleitungsleistungen des Vereins FreizeitHelden.</p>
          
          <p className="font-medium">2. Vertragsabschluss</p>
          <p className="text-sm">Ein Vertrag kommt nach einem erfolgreichen Kennenlerngespräch und der schriftlichen Vereinbarung über den Betreuungsumfang zustande.</p>

          <p className="font-medium">3. Stornobedingungen</p>
          <p className="text-sm">Vereinbarte Termine müssen mindestens 24 Stunden vorher abgesagt werden, andernfalls kann eine Ausfallgebühr verrechnet werden.</p>
        </div>
      </section>
    </div>
  );
};

export default Legal;
