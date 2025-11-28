export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/hero.jpg"
        alt="Ristorante Aurelia"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
          Aurelia
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-light leading-relaxed">
          L'eleganza della cucina italiana moderna in un'esperienza culinaria indimenticabile
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/prenotazioni" className="btn-primary text-lg">
            Prenota un tavolo
          </a>
          <a href="/menu" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300">
            Scopri il Menu
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}