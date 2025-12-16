"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Toast from "../components/Toast";
import Footer from "../components/Footer";

export default function Prenotazioni() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    data: "",
    ora: "",
    persone: ""
  });
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors };
    
    switch (name) {
      case "email":
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = "Email non valida";
        } else {
          delete newErrors.email;
        }
        break;
      case "telefono":
        if (value && !/^[+]?[0-9\s-]{8,}$/.test(value)) {
          newErrors.telefono = "Telefono non valido";
        } else {
          delete newErrors.telefono;
        }
        break;
    }
    
    setErrors(newErrors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simula una chiamata API
    setTimeout(() => {
      console.log("Prenotazione ricevuta:", formData);
      setShowToast(true);
      setLoading(false);
      setFormData({
        nome: "",
        email: "",
        telefono: "",
        data: "",
        ora: "",
        persone: ""
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const isFormValid = Object.keys(formData).every(key => formData[key as keyof typeof formData]) && Object.keys(errors).length === 0;

  return (
    <div>
      <Navbar />
      <section className="pt-24 pb-20 px-6 bg-[#141414]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h1 className="font-black text-5xl md:text-6xl text-white mb-4">
              Prenota un <span className="text-[#e50914]">Tavolo</span>
            </h1>
            <p className="text-lg text-[#e5e5e5] leading-relaxed">
              Riservate il vostro posto per un'esperienza culinaria indimenticabile
            </p>
          </div>
          <div className="card zoom-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-bold text-white mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all hover:border-gold"
                    placeholder="Il vostro nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border bg-[#2f2f2f] text-white rounded-sm focus:ring-2 focus:ring-[#e50914] focus:border-[#e50914] transition-all ${
                      errors.email ? "border-red-500" : "border-gray-700"
                    }`}
                    placeholder="email@esempio.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-bold text-white mb-2">
                  Telefono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border bg-[#2f2f2f] text-white rounded-sm focus:ring-2 focus:ring-[#e50914] focus:border-[#e50914] transition-all ${
                    errors.telefono ? "border-red-500" : "border-gray-700"
                  }`}
                  placeholder="+39 123 456 7890"
                />
                {errors.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono}</p>}
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="data" className="block text-sm font-bold text-white mb-2">
                    Data *
                  </label>
                  <input
                    type="date"
                    id="data"
                    name="data"
                    value={formData.data}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-700 bg-[#2f2f2f] text-white rounded-sm focus:ring-2 focus:ring-[#e50914] focus:border-[#e50914] transition-all hover:border-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="ora" className="block text-sm font-bold text-white mb-2">
                    Ora *
                  </label>
                  <input
                    type="time"
                    id="ora"
                    name="ora"
                    value={formData.ora}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-700 bg-[#2f2f2f] text-white rounded-sm focus:ring-2 focus:ring-[#e50914] focus:border-[#e50914] transition-all hover:border-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="persone" className="block text-sm font-bold text-white mb-2">
                    Persone *
                  </label>
                  <select
                    id="persone"
                    name="persone"
                    value={formData.persone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-700 bg-[#2f2f2f] text-white rounded-sm focus:ring-2 focus:ring-[#e50914] focus:border-[#e50914] transition-all hover:border-gray-600"
                  >
                    <option value="">Seleziona</option>
                    <option value="1">1 persona</option>
                    <option value="2">2 persone</option>
                    <option value="3">3 persone</option>
                    <option value="4">4 persone</option>
                    <option value="5">5 persone</option>
                    <option value="6+">6+ persone</option>
                  </select>
                </div>
              </div>
              
              {/* Progress indicator */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-[#e5e5e5] font-medium">
                  <span>Completa il form</span>
                  <span>{Math.round((Object.values(formData).filter(v => v).length / 6) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-amber-600 to-orange-500 h-full transition-all duration-500"
                    style={{ width: `${(Object.values(formData).filter(v => v).length / 6) * 100}%` }}
                  ></div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={!isFormValid || loading}
                className="w-full btn-primary text-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Elaborazione...
                  </span>
                ) : (
                  "Conferma Prenotazione"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
      <Toast
        message="✅ Prenotazione ricevuta! Vi contatteremo presto per confermare."
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}