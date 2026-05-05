import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: 'General',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire envoyé :", formData);
    alert("Merci ! Votre message a été envoyé.");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête stylisé */}
        <div className="text-center mb-20">
          <h2 className="text-pink-600 font-bold uppercase tracking-[0.4em] text-sm mb-4">Contact</h2>
          <h1 className="text-5xl md:text-6xl font-black text-zinc-900 uppercase tracking-tighter">
            On reste en <span className="text-pink-600">contact ?</span>
          </h1>
          <p className="text-zinc-500 mt-6 max-w-2xl mx-auto font-medium">
            Une question sur les inscriptions, les entraînements ou le club ? 
            Notre équipe vous répond sous 24h à 48h.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Section Informations (Gauche - 4 colonnes) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-zinc-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              {/* Décoration d'arrière-plan */}
              <div className="absolute -right-10 -top-10 h-32 w-32 bg-pink-600 rounded-full blur-3xl opacity-20"></div>
              
              <h3 className="text-xl font-bold uppercase mb-8 relative z-10">Coordonnées</h3>
              
              <div className="space-y-8 relative z-10">
                <div className="group flex items-start gap-4">
                  <div className="bg-zinc-800 p-3 rounded-xl group-hover:bg-pink-600 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Localisation</p>
                    <p className="text-zinc-300 font-medium">Espace J. Viénot, 80420 Flixecourt</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4">
                  <div className="bg-zinc-800 p-3 rounded-xl group-hover:bg-pink-600 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Email</p>
                    <p className="text-pink-500 font-bold break-all">contact@hc-flixecourt.fr</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4">
                  <div className="bg-zinc-800 p-3 rounded-xl group-hover:bg-pink-600 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Horaires Siège</p>
                    <p className="text-zinc-300 font-medium">Lun - Ven : 14h00 - 18h00</p>
                  </div>
                </div>
              </div>

              {/* Réseaux Sociaux */}
              <div className="mt-16 pt-8 border-t border-zinc-800 flex gap-4">
                {['facebook', 'instagram'].map((social) => (
                  <a key={social} href="#" className="bg-zinc-800 p-3 rounded-full hover:bg-pink-600 transition-all transform hover:-translate-y-1">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-current" /> {/* Remplace par tes icônes réelles */}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Petit encart Map ou autre */}
            <div className="bg-pink-600 p-8 rounded-3xl text-white">
              <h4 className="font-bold text-xl mb-2 italic uppercase">Rejoignez-nous !</h4>
              <p className="text-sm text-pink-100 opacity-90">Les premiers entraînements d'essai sont gratuits toute l'année.</p>
            </div>
          </div>

          {/* Formulaire (Droite - 8 colonnes) */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-400 ml-1">Nom Complet</label>
                  <input 
                    type="text" name="nom" value={formData.nom} onChange={handleChange} required
                    className="w-full bg-gray-50 px-6 py-4 rounded-2xl border-2 border-transparent focus:border-pink-600 focus:bg-white outline-none transition-all placeholder:text-zinc-300 text-zinc-900 font-semibold"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-400 ml-1">Email Professionnel</label>
                  <input 
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full bg-gray-50 px-6 py-4 rounded-2xl border-2 border-transparent focus:border-pink-600 focus:bg-white outline-none transition-all placeholder:text-zinc-300 text-zinc-900 font-semibold"
                    placeholder="jean@exemple.fr"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-400 ml-1">Sujet de votre demande</label>
                <select 
                  name="sujet" value={formData.sujet} onChange={handleChange}
                  className="w-full bg-gray-50 px-6 py-4 rounded-2xl border-2 border-transparent focus:border-pink-600 focus:bg-white outline-none transition-all font-semibold text-zinc-900 appearance-none cursor-pointer"
                >
                  <option value="General">Renseignements généraux</option>
                  <option value="Inscriptions">Inscriptions / Licences</option>
                  <option value="Boutique">Boutique / Merch</option>
                  <option value="Partenariat">Devenir Partenaire</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-400 ml-1">Message</label>
                <textarea 
                  name="message" rows="6" value={formData.message} onChange={handleChange} required
                  className="w-full bg-gray-50 px-6 py-4 rounded-2xl border-2 border-transparent focus:border-pink-600 focus:bg-white outline-none transition-all placeholder:text-zinc-300 text-zinc-900 font-semibold resize-none"
                  placeholder="Dites-nous tout..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="group relative w-full inline-flex items-center justify-center px-8 py-5 font-black text-white bg-zinc-900 rounded-2xl overflow-hidden transition-all hover:bg-pink-600 active:scale-[0.98]"
              >
                <span className="relative uppercase tracking-widest text-sm">Envoyer ma demande</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}