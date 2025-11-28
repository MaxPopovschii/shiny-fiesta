import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
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
    <section className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Perché Scegliere Aurelia</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un'esperienza culinaria che va oltre il semplice pasto
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card text-center fade-in">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
