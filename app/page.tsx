"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Footer />
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: "🍽️",
      title: "Cucina Autentica",
      description: "Ingredienti freschi e locali, preparati con passione tradizionale."
    },
    {
      icon: "⭐",
      title: "Esperienza Premium",
      description: "Servizio impeccabile in un ambiente elegante e raffinato."
    },
    {
      icon: "🌿",
      title: "Menu Stagionale",
      description: "Piatti che cambiano con le stagioni, sempre freschi e innovativi."
    },
    {
      icon: "🏆",
      title: "Chef Stellato",
      description: "Guidati da un maestro della cucina italiana contemporanea."
    }
  ];

  return (
    <section className="section-padding bg-[#141414] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#e50914] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e50914] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-bold text-4xl md:text-5xl text-white mb-4">
            Perché Scegliere <span className="text-[#e50914]">Aurelia</span>
          </h2>
          <p className="text-lg text-[#e5e5e5] max-w-2xl mx-auto leading-relaxed">
            Un'esperienza culinaria che va oltre il semplice pasto
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card relative group cursor-pointer zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl text-white mb-3 group-hover:text-[#e50914] transition-colors leading-tight">
                {feature.title}
              </h3>
              <p className="text-[#e5e5e5] text-base leading-relaxed">{feature.description}</p>
              <div className="absolute inset-0 bg-gradient-to-t from-[#e50914]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-md pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ years: 0, dishes: 0, clients: 0, reviews: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateCount = (target: number, key: keyof typeof counts) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounts(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, 30);
    };

    animateCount(5, 'years');
    animateCount(120, 'dishes');
    animateCount(15000, 'clients');
    animateCount(98, 'reviews');
  }, [isVisible]);

  const stats = [
    { label: "Anni di Esperienza", value: counts.years, suffix: "+" },
    { label: "Piatti nel Menu", value: counts.dishes, suffix: "+" },
    { label: "Clienti Soddisfatti", value: counts.clients, suffix: "+" },
    { label: "Recensioni 5 Stelle", value: counts.reviews, suffix: "%" }
  ];

  return (
    <section id="stats-section" className="section-padding bg-[#0c0c0c] text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center zoom-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="font-black text-5xl text-[#e50914] mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-[#cccccc] text-sm font-bold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
