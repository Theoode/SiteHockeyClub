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
    // Ici tu pourras ajouter la logique d'envoi (EmailJS, API, etc.)
    console.log("Formulaire envoyé :", formData);
    alert("Merci ! Votre message a été envoyé (simulation).");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* En-tête */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-10 w-3 bg-pink-500"></div>
          <h1 className="text-4xl font-black text-black uppercase italic">Contactez le Club</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Section Informations */}
          <div className="bg-black text-white p-10 rounded-2xl shadow-2xl border-l-8 border-pink-500">
            <h2 className="text-2xl font-black uppercase mb-6 text-pink-500">Nos Coordonnées</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-bold text-lg">Patinoire Municipale</p>
                  <p className="text-gray-400">123 Avenue de la Glace, 75000 Ville</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-bold text-lg">Email Secrétariat</p>
                  <p className="text-gray-400 text-pink-500 font-medium">contact@hockeyclub.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-bold text-lg">Téléphone</p>
                  <p className="text-gray-400">01 23 45 67 89</p>
                </div>
              </div>
            </div>

            {/* Réseaux Sociaux Rapides */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <p className="uppercase font-black text-sm mb-4 tracking-widest text-gray-500">Suivez l'aventure</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-pink-500 transition-colors">Instagram</a>
                <a href="#" className="hover:text-pink-500 transition-colors">Facebook</a>
                <a href="#" className="hover:text-pink-500 transition-colors">TikTok</a>
              </div>
            </div>
          </div>

          {/* Formulaire de Contact */}
          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black uppercase mb-2 text-black">Nom complet</label>
                  <input 
                    type="text" 
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-black rounded-lg focus:ring-2 focus:ring-pink-500 outline-none transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-black uppercase mb-2 text-black">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-black rounded-lg focus:ring-2 focus:ring-pink-500 outline-none transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-black uppercase mb-2 text-black">Sujet</label>
                <select 
                  name="sujet"
                  value={formData.sujet}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-black rounded-lg focus:ring-2 focus:ring-pink-500 outline-none transition-all font-bold"
                >
                  <option value="General">Renseignements généraux</option>
                  <option value="Inscriptions">Inscriptions / Licences</option>
                  <option value="Boutique">Boutique / Merch</option>
                  <option value="Partenariat">Devenir Partenaire</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-black uppercase mb-2 text-black">Message</label>
                <textarea 
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-black rounded-lg focus:ring-2 focus:ring-pink-500 outline-none transition-all"
                  placeholder="Comment pouvons-nous vous aider ?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-black text-white font-black uppercase italic tracking-wider rounded-lg hover:bg-pink-500 transition-colors shadow-lg"
              >
                Envoyer le message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}