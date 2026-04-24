import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import api from '../api/client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const [matchsAvenir, setMatchsAvenir] = useState([]);

  useEffect(() => {
    // Appel API pour Strapi v5
    api.get('/matches?populate=*')
      .then(res => setMatchsAvenir(res.data.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* --- CARROUSEL --- */}
      <div className="h-[550px] w-full overflow-hidden border-b-8 border-pink-500">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="h-full"
        >
          <SwiperSlide>
            <div className="relative h-full w-full bg-black flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('/slide1.jpg')] bg-cover bg-center opacity-60"></div>
              <div className="relative z-10 text-center">
                <h2 className="text-white text-6xl font-black uppercase italic tracking-tighter">
                  Vitesse & <span className="text-pink-500">Puissance</span>
                </h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* --- SECTION MATCHS À VENIR --- */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-10 w-3 bg-pink-500"></div>
          <h2 className="text-4xl font-black text-black uppercase italic">
            Prochaines Rencontres
          </h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {matchsAvenir && matchsAvenir.length > 0 ? (
            matchsAvenir.map(match => (
              <div key={match.id} className="group bg-black rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden border border-gray-800">
                {/* Date Header */}
                <div className="bg-pink-500 text-black p-3 text-center font-black text-sm uppercase">
                  {new Date(match.Date).toLocaleDateString('fr-FR', {
                    weekday: 'long', day: 'numeric', month: 'long'
                  })}
                </div>

                <div className="p-8 flex flex-col items-center">
                  <div className="flex items-center justify-center gap-6 mb-6">
                    <span className="font-black text-white text-xl uppercase tracking-tighter">FLIXECOURT</span>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-black text-xs">
                      VS
                    </div>
                    <span className="font-black text-pink-500 text-xl uppercase tracking-tighter">
                      {match.Adversaire}
                    </span>
                  </div>

                  <div className="space-y-2 text-center">
                    <div className="text-gray-400 font-bold flex items-center justify-center gap-2">
                      <span>🕒 {new Date(match.Date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                    <div className="text-white font-medium bg-gray-900 px-4 py-1 rounded-full text-sm">
                      📍 {match.Lieu}
                    </div>
                  </div>
                </div>

                {/* Bouton fictif pour le style */}
                <button className="w-full py-3 bg-white text-black font-black uppercase text-sm hover:bg-pink-500 transition-colors">
                  Billetterie
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center border-2 border-dashed border-gray-200 rounded-xl">
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xl">Aucun match au calendrier</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}