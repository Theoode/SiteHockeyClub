import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import api from '../api/client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const [matchsAvenir, setMatchsAvenir] = useState([]);
  const LOCAL_SLIDES = [
    { id: 1, image: "/banner1.jpg", titre: "Saison 2025-2026" },
    { id: 2, image: "/banner2.jpg", titre: "Rejoignez le club" }
  ];

  useEffect(() => {
    api.get('/matches?populate=*')
      .then(res => setMatchsAvenir(res.data.data))
      .catch(err => console.error("Erreur Matchs:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* --- CARROUSEL --- */}
      <div className="h-125 w-full overflow-hidden border-b border-gray-200">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="h-full"
        >
          {LOCAL_SLIDES.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full flex items-center justify-center">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
                <div className="relative z-10 text-center px-4">
                  <h2 className="text-white text-5xl font-bold uppercase tracking-tight drop-shadow-lg">
                    {slide.titre}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* --- SECTION PRINCIPALE (CONTENU) --- */}
      <main className="max-w-7xl mx-auto py-16 px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* COLONNE MATCHS */}
          <section className="flex-1">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-8 w-1.5 bg-pink-600"></div>
              <h2 className="text-3xl font-bold text-zinc-800 uppercase tracking-tight">
                Prochaines Rencontres
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {matchsAvenir && matchsAvenir.length > 0 ? (
                matchsAvenir.map(match => {
                  const m = match.attributes || match;
                  return (
                    <div key={match.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md">
                      <div className="bg-gray-50 border-b border-gray-100 py-3 text-center">
                        <span className="text-zinc-600 font-semibold text-xs uppercase tracking-widest">
                          {new Date(m.Date).toLocaleDateString('fr-FR', {
                            weekday: 'short', day: 'numeric', month: 'long'
                          })}
                        </span>
                      </div>
                      <div className="p-8 flex flex-col items-center">
                        <div className="flex items-center justify-center gap-6 mb-6 w-full">
                          <span className="flex-1 text-right font-bold text-zinc-800 text-lg uppercase">Flixecourt</span>
                          <div className="w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 font-bold text-[10px] border border-gray-200">VS</div>
                          <span className="flex-1 text-left font-bold text-pink-600 text-lg uppercase">{m.Adversaire}</span>
                        </div>
                        <div className="text-zinc-500 text-sm font-medium flex items-center justify-center gap-2">
                          <span>{new Date(m.Date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</span>
                          <span className="text-gray-300">|</span>
                          <span className="uppercase tracking-wide">{m.Lieu}</span>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="col-span-full py-16 text-center border border-dashed border-gray-300 rounded-xl bg-white">
                  <p className="text-gray-400 font-medium text-lg">Aucun match programmé</p>
                </div>
              )}
            </div>
          </section>

          {/* COLONNE FACEBOOK */}
          <aside className="w-full lg:w-[320px]">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-8 w-1.5 bg-zinc-800"></div>
              <h2 className="text-3xl font-bold text-zinc-800 uppercase tracking-tight">Actualités</h2>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHockeyClubFlixecourt&tabs=timeline&width=320&height=800&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false"
                width="320" height="800" style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no" allowFullScreen={true} title="Facebook Feed"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </aside>
        </div>
      </main>

      {/* --- SECTION PARTENAIRES (SORTIE DU MAIN POUR ÊTRE AU DESSUS DU FOOTER) --- */}
      <section className="bg-white py-20 border-t border-gray-100 w-full">
        <div className="max-w-400 mx-auto px-6"> {/* Largeur augmentée à 1600px au lieu de 7xl */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-8 w-1.5 bg-pink-600"></div>
            <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tighter">
              Nos Sponsors
            </h2>
          </div>

          {/* gap-2 pour rapprocher les logos, et plus de colonnes (lg:grid-cols-8) */}
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 items-center">
            
            <div className="group p-2 grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl flex items-center justify-center h-28">
              <img src="/axians.png" alt="Axians" className="max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform" />
            </div>

            <div className="group p-2 grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl flex items-center justify-center h-28">
              <img src="/engie.png" alt="Engie" className="max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform" />
            </div>

            <div className="group p-2 grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl flex items-center justify-center h-28">
              <img src="/ambulance.jpg" alt="Ambulance" className="max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform" />
            </div>

            <div className="group p-2 grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl flex items-center justify-center h-28">
              <img src="/kiosque.jpg" alt="Kiosque" className="max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform" />
            </div>

            <div className="group p-2 grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl flex items-center justify-center h-28">
              <img src="/flixecourt.png" alt="Flixecourt" className="max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform" />
            </div>

            <div className="group p-2 grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl flex items-center justify-center h-28">
              <img src="/nievre.jpg" alt="Nievre" className="max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform" />
            </div>

            <div className="group p-2 grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl flex items-center justify-center h-28">
              <img src="/vision.png" alt="Vision" className="max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}