import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Planning from './pages/Planning';
import Equipe from './pages/Equipe';
import Infos from './pages/Infos';
import Contact from './pages/Contact';
import Partenaires from './pages/Partenaires';
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* --- NAVBAR --- */}
        <nav className="sticky top-0 z-50 bg-blue-900 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              
              {/* Logo ou Nom du Club */}
              <div className="flex-shrink-0 flex items-center">
                
              </div>

              {/* Liens de navigation */}
              <div className="hidden md:flex space-x-8 uppercase text-sm font-bold tracking-wide">
                <Link to="/" className="hover:text-red-500 transition-colors py-2 border-b-2 border-transparent hover:border-red-500">
                  Le club
                </Link>
                <Link to="/planning" className="hover:text-red-500 transition-colors py-2 border-b-2 border-transparent hover:border-red-500">
                  Planning
                </Link>
                <Link to="/equipe" className="hover:text-red-500 transition-colors py-2 border-b-2 border-transparent hover:border-red-500">
                  Les Équipes
                </Link>
                <Link to="/infos" className="hover:text-red-500 transition-colors py-2 border-b-2 border-transparent hover:border-red-500">
                  Informations
                </Link>
                <Link to="/partenaire" className="hover:text-red-500 transition-colors py-2 border-b-2 border-transparent hover:border-red-500">
                  Partenariat
                </Link>
                <Link to="/contact" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-all">
                  Contact
                </Link>
              </div>

              {/* Menu Mobile (Simplifié ici) */}
              <div className="md:hidden flex items-center">
                <button className="text-white focus:outline-none">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </div>

            </div>
          </div>
        </nav>

        {/* --- CONTENU DES PAGES --- */}
        <main className="pb-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planning" element={<Planning />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/infos" element={<Infos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* --- FOOTER SIMPLE --- */}
        <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
          <p>© 2026 Hockey Club - Tous droits réservés.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;