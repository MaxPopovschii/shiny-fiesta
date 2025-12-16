import fs from "fs";
import path from "path";

type MenuData = {
  [categoria: string]: Array<{
    nome: string;
    descrizione: string;
    prezzo: number;
    allergeni?: string[];
  }>;
};

export default function MenuSection() {
  const filePath = path.join(process.cwd(), "data", "menu.json");
  const menu: MenuData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const categorieIcons: Record<string, string> = {
    "Antipasti": "🥗",
    "Primi": "🍝",
    "Secondi": "🥩"
  };

  return (
    <section className="py-20 px-6 bg-[#141414]">
      <div className="max-w-7xl mx-auto">
        {Object.entries(menu).map(([categoria, piatti], catIdx) => (
          <div key={categoria} className="mb-24 last:mb-0">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-12 fade-in" style={{ animationDelay: `${catIdx * 0.1}s` }}>
              <span className="text-5xl">{categorieIcons[categoria]}</span>
              <div className="flex-1">
                <h2 className="font-black text-4xl md:text-5xl text-white mb-2 tracking-tight">
                  {categoria}
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-[#e50914] to-transparent rounded-full"></div>
              </div>
            </div>
            {/* Dishes Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {piatti.map((piatto, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-[#1f1f1f] rounded-lg p-6 border border-gray-800 hover:border-[#e50914] transition-all duration-300 hover:shadow-2xl hover:shadow-[#e50914]/10 hover:-translate-y-1 zoom-in"
                  style={{ animationDelay: `${catIdx * 0.1 + idx * 0.05}s` }}
                >
                  {/* Popular Badge */}
                  {idx === 0 && (
                    <div className="absolute -top-3 -right-3 bg-[#e50914] text-white text-xs font-black px-4 py-1.5 rounded-sm shadow-lg uppercase tracking-wide">
                      Popolare
                    </div>
                  )}
                  
                  {/* Dish Header */}
                  <div className="mb-4">
                    <div className="flex justify-between items-start gap-3 mb-3">
                      <h3 className="font-bold text-xl text-white group-hover:text-[#e50914] transition-colors leading-tight flex-1">
                        {piatto.nome}
                      </h3>
                      <span className="text-2xl font-black text-[#e50914] group-hover:scale-110 transition-transform flex-shrink-0">
                        €{piatto.prezzo}
                      </span>
                    </div>
                    <p className="text-[#b3b3b3] leading-relaxed text-base">{piatto.descrizione}</p>
                  </div>
                  {/* Allergeni */}
                  {piatto.allergeni && piatto.allergeni.length > 0 && (
                    <div className="pt-4 border-t border-gray-800">
                      <div className="text-xs text-[#808080] mb-2 uppercase tracking-wider font-semibold">Allergeni</div>
                      <div className="flex flex-wrap gap-2">
                        {piatto.allergeni.map((allergene, i) => (
                          <span 
                            key={i} 
                            className="text-xs bg-[#2f2f2f] text-[#e5e5e5] px-3 py-1.5 rounded-full border border-gray-700 hover:border-[#e50914] hover:bg-[#e50914] hover:text-white transition-all font-medium capitalize"
                          >
                            {allergene}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}