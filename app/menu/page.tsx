import Navbar from "../components/Navbar";
import MenuSection from "../components/MenuSection";
import Footer from "../components/Footer";

export default function Menu() {
  return (
    <div className="bg-[#141414]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#141414] to-[#141414]"></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#e50914] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#e50914] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 text-center px-6 pt-32 pb-20">
          <h1 className="font-black text-5xl md:text-7xl text-white mb-6 tracking-tight leading-none fade-in">
            Il Nostro <span className="text-[#e50914]">Menu</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#e5e5e5] max-w-3xl mx-auto leading-relaxed fade-in" style={{ animationDelay: '0.2s' }}>
            Un viaggio attraverso i sapori autentici della tradizione italiana, reinterpretati con maestria e passione
          </p>
          <div className="mt-8 flex justify-center gap-6 fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl font-black text-[#e50914]">6</div>
              <div className="text-sm text-[#e5e5e5] uppercase tracking-wider">Piatti</div>
            </div>
            <div className="w-px bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-[#e50914]">3</div>
              <div className="text-sm text-[#e5e5e5] uppercase tracking-wider">Categorie</div>
            </div>
            <div className="w-px bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-[#e50914]">★★★</div>
              <div className="text-sm text-[#e5e5e5] uppercase tracking-wider">Qualità</div>
            </div>
          </div>
        </div>
      </section>

      <MenuSection />
      <Footer />
    </div>
  );
}