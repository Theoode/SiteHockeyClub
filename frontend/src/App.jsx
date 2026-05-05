import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Planning from './pages/Planning';
import Equipe from './pages/Equipe';
import Infos from './pages/Infos';
import Contact from './pages/Contact';
import Partenaires from './pages/Partenaires';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* --- NAVBAR --- */}
        <nav className="sticky top-0 z-50 bg-zinc-900 text-white shadow-xl border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center h-24">
              
              {/* Logo stylisé */}
              <Link to="/" className="flex items-center gap-3 group">
                {/* Le Logo */}
                <img 
                  src="/logo.png" 
                  alt="Logo HC Flixecourt" 
                  className="h-12 w-auto object-contain transform group-hover:scale-105 transition-transform" 
                />

                {/* Le Texte */}
                <div className="flex flex-col leading-none">
                  <span className="text-2xl font-black tracking-tighter uppercase group-hover:text-pink-500 transition-colors">
                    HC Flixecourt
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-pink-600 font-bold">
                    Hockey Club
                  </span>
                </div>
              </Link>

              {/* Liens de navigation */}
              <div className="hidden md:flex items-center space-x-1 uppercase text-xs font-bold tracking-widest">
                <Link to="/" className="px-4 py-2 hover:text-pink-500 transition-colors">
                  Accueil
                </Link>
                <Link to="/infos" className="px-4 py-2 hover:text-pink-500 transition-colors">
                  Le club
                </Link>
                <Link to="/equipe" className="px-4 py-2 hover:text-pink-500 transition-colors">
                  Les Équipes
                </Link>
                <Link to="/planning" className="px-4 py-2 hover:text-pink-500 transition-colors">
                  Planning
                </Link>
                 <Link to="/rejoindre" className="px-4 py-2 hover:text-pink-500 transition-colors">
                  Nous rejoindre
                </Link>
                <Link to="/partenaires" className="px-4 py-2 hover:text-pink-500 transition-colors">
                  Partenaires
                </Link>
                <div className="pl-4">
                  <Link 
                    to="/contact" 
                    className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full transition-all shadow-lg shadow-pink-900/20 active:scale-95"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Menu Mobile Button */}
              <div className="md:hidden flex items-center">
                <button className="p-2 text-white hover:bg-zinc-800 rounded-lg transition-colors">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </div>

            </div>
          </div>
        </nav>

        {/* --- CONTENU DES PAGES --- */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planning" element={<Planning />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/infos" element={<Infos />} />
            <Route path="/partenaires" element={<Partenaires />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* --- FOOTER --- */}
        <footer className="bg-zinc-950 text-zinc-500 py-12 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-bold text-zinc-300 uppercase tracking-tight">HC Flixecourt</p>
              <p className="text-xs uppercase tracking-widest mt-1">Saison 2025-2026</p>
            </div>
            <p className="text-[11px] uppercase tracking-widest text-zinc-600">
              © {new Date().getFullYear()} - Tous droits réservés.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;