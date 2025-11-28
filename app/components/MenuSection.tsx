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

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-serif text-5xl font-bold text-gray-900 mb-4">Il Nostro Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Scopri i nostri piatti preparati con ingredienti freschi e passione autentica
          </p>
        </div>
        {Object.entries(menu).map(([categoria, piatti]) => (
          <div key={categoria} className="mb-16 fade-in">
            <h3 className="font-serif text-3xl font-semibold text-gold mb-8 border-b border-gray-200 pb-4">
              {categoria}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {piatti.map((piatto, idx) => (
                <div key={idx} className="card group">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-serif text-xl font-semibold text-gray-900 group-hover:text-gold transition-colors">
                      {piatto.nome}
                    </h4>
                    <span className="text-2xl font-bold text-gold">€{piatto.prezzo}</span>
                  </div>
                  <p className="text-gray-600 mb-3 leading-relaxed">{piatto.descrizione}</p>
                  {piatto.allergeni && (
                    <p className="text-sm text-gray-500 italic">
                      Allergeni: {piatto.allergeni.join(", ")}
                    </p>
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