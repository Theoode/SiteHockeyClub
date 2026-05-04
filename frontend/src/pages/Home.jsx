import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import api from '../api/client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const [matchsAvenir, setMatchsAvenir] = useState([]);
  const [slides, setSlides] = useState([]);
  const LOCAL_SLIDES = [
  {
    id: 1,
    image: "/banner1.jpg" // Chemin vers le dossier public
  },
  {
    id: 2,
    image: "/banner2.jpg"
  }];
  

  useEffect(() => {
  api.get('/matches?populate=*')
    .then(res => setMatchsAvenir(res.data.data))
    .catch(err => console.error("Erreur Matchs:", err));
}, []);

  return (
    
    <div className="min-h-screen bg-gray-50">
      {/* --- CARROUSEL --- */}
      <div className="h-[500px] w-full overflow-hidden border-b border-gray-200">
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
                  <h2 className="text-white text-5xl font-bold uppercase tracking-tight">
                    {slide.titre}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* --- SECTION PRINCIPALE --- */}
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
                  // Compatibilité v4/v5 pour les matchs
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
                          <span className="flex-1 text-left font-bold text-pink-600 text-lg uppercase">
                            {m.Adversaire}
                          </span>
                        </div>

                        <div className="space-y-3 text-center w-full">
                          <div className="text-zinc-500 text-sm font-medium flex items-center justify-center gap-2">
                            <span>{new Date(m.Date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</span>
                            <span className="text-gray-300">|</span>
                            <span className="uppercase tracking-wide">{m.Lieu}</span>
                          </div>
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

          {/* COLONNE INFOS */}
          <aside className="w-full lg:w-[320px]">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-8 w-1.5 bg-zinc-800"></div>
              <h2 className="text-3xl font-bold text-zinc-800 uppercase tracking-tight">Actualités</h2>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHockeyClubFlixecourt&tabs=timeline&width=320&height=800&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                width="320"
                height="800"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Facebook Feed"
              ></iframe>
            </div>
          </aside>
          
        </div>
      </main>
    </div>
  );
}