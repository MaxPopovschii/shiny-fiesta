"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img
          src="/hero.jpg"
          alt="Ristorante Aurelia"
          className="w-full h-full object-cover scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-[#141414]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-amber-400/60 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-orange-400/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-amber-400/55 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-orange-400/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 text-left max-w-2xl mx-auto md:ml-20 px-6">
        <div className="zoom-in">
          <h1 className="font-black text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-2xl leading-none tracking-tighter">
            AURELIA
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-[#e5e5e5] mb-8 font-normal leading-relaxed max-w-xl fade-in" style={{ animationDelay: '0.3s' }}>
          L'esperienza culinaria italiana che ridefinisce il lusso moderno. Prenota ora il tuo tavolo esclusivo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 fade-in" style={{ animationDelay: '0.6s' }}>
          <a href="/prenotazioni" className="btn-primary text-base group">
            <span className="flex items-center justify-center gap-3 relative z-10">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
              </svg>
              Prenota Ora
            </span>
          </a>
          <a href="/menu" className="btn-secondary group">
            <span className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              Più Info
            </span>
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 float">
        <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}