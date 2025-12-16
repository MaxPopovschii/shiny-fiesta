"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ChiSiamo() {
  const timeline = [
    { year: "2020", event: "Apertura Aurelia" },
    { year: "2021", event: "Prima Stella Michelin" },
    { year: "2023", event: "Miglior Ristorante Italiano" },
    { year: "2025", event: "Espansione Internazionale" }
  ];

  return (
    <div>
      <Navbar />
      <section className="pt-24 pb-20 px-6 bg-[#141414]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h1 className="font-black text-5xl md:text-6xl text-white mb-4">
              Chi <span className="text-[#e50914]">Siamo</span>
            </h1>
            <p className="text-lg text-[#e5e5e5] max-w-3xl mx-auto leading-relaxed">
              Una storia di passione, tradizione e innovazione culinaria
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 slide-in-left">
              <div className="relative group">
                <img
                  src="/chef.jpg"
                  alt="Il nostro chef Marco Rossi"
                  className="w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-end p-8">
                  <div className="text-white">
                    <p className="font-serif text-2xl font-bold">Marco Rossi</p>
                    <p className="text-sm">Executive Chef</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6 slide-in-right">
              <div className="card relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#e50914]"></div>
                <h2 className="font-bold text-2xl text-white mb-4 pl-4">La Nostra Filosofia</h2>
                <p className="text-[#e5e5e5] leading-relaxed pl-4 text-base">
                  Aurelia nasce dalla visione di creare un'esperienza culinaria che unisce la tradizione italiana con l'innovazione moderna. Ogni piatto è un viaggio attraverso i sapori autentici della nostra terra, reinterpretati con tecniche contemporanee.
                </p>
              </div>
              <div className="card relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#e50914]"></div>
                <h2 className="font-bold text-2xl text-white mb-4 pl-4">Il Nostro Chef</h2>
                <p className="text-[#e5e5e5] leading-relaxed mb-4 pl-4 text-base">
                  Marco Rossi, con oltre 20 anni di esperienza nei ristoranti stellati d'Italia, guida la nostra brigata con passione e maestria. La sua cucina celebra gli ingredienti locali di stagione, creando piatti che raccontano storie di territorio e creatività.
                </p>
                <blockquote className="border-l-4 border-[#e50914] pl-6 ml-4 italic text-[#e5e5e5] text-lg font-medium">
                  "La vera cucina italiana non è solo cibo, è emozione."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20 fade-in">
            <h2 className="font-bold text-3xl md:text-4xl text-center mb-12 text-white">
              Il Nostro <span className="text-[#e50914]">Percorso</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className="text-center zoom-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <div className="w-20 h-20 mx-auto bg-[#e50914] rounded-full flex items-center justify-center mb-4 shadow-lg transform hover:scale-110 transition-transform">
                      <span className="font-black text-xl text-white">{item.year}</span>
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-1/2 w-full h-px bg-gradient-to-r from-[#e50914] to-transparent"></div>
                    )}
                  </div>
                  <p className="text-[#e5e5e5] font-medium text-base">{item.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Valori */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "❤️", title: "Passione", desc: "Amore per la cucina in ogni piatto" },
              { icon: "🌱", title: "Sostenibilità", desc: "Ingredienti locali e stagionali" },
              { icon: "✨", title: "Innovazione", desc: "Tecniche moderne, sapori tradizionali" }
            ].map((value, index) => (
              <div 
                key={index} 
                className="card text-center group cursor-pointer zoom-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {value.icon}
                </div>
                <h3 className="font-bold text-2xl text-white mb-2 group-hover:text-[#e50914] transition-colors leading-tight">
                  {value.title}
                </h3>
                <p className="text-[#e5e5e5] text-base leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}