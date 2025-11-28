import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ChiSiamo() {
  return (
    <div>
      <Navbar />
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl font-bold text-gray-900 mb-4">Chi Siamo</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una storia di passione, tradizione e innovazione culinaria
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/chef.jpg"
                alt="Il nostro chef Marco Rossi"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="card">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">La Nostra Filosofia</h2>
                <p className="text-gray-600 leading-relaxed">
                  Aurelia nasce dalla visione di creare un'esperienza culinaria che unisce la tradizione italiana con l'innovazione moderna. Ogni piatto è un viaggio attraverso i sapori autentici della nostra terra, reinterpretati con tecniche contemporanee.
                </p>
              </div>
              <div className="card">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Il Nostro Chef</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Marco Rossi, con oltre 20 anni di esperienza nei ristoranti stellati d'Italia, guida la nostra brigata con passione e maestria. La sua cucina celebra gli ingredienti locali di stagione, creando piatti che raccontano storie di territorio e creatività.
                </p>
                <blockquote className="border-l-4 border-gold pl-4 italic text-gray-700">
                  "La vera cucina italiana non è solo cibo, è emozione."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}