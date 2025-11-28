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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Prenotazione ricevuta:", formData);
    setShowToast(true);
    setFormData({
      nome: "",
      email: "",
      telefono: "",
      data: "",
      ora: "",
      persone: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar />
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-5xl font-bold text-gray-900 mb-4">Prenota un Tavolo</h1>
            <p className="text-xl text-gray-600">
              Riservate il vostro posto per un'esperienza culinaria indimenticabile
            </p>
          </div>
          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="Il vostro nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="email@esempio.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                  placeholder="+39 123 456 7890"
                />
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="data" className="block text-sm font-medium text-gray-700 mb-2">
                    Data
                  </label>
                  <input
                    type="date"
                    id="data"
                    name="data"
                    value={formData.data}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="ora" className="block text-sm font-medium text-gray-700 mb-2">
                    Ora
                  </label>
                  <input
                    type="time"
                    id="ora"
                    name="ora"
                    value={formData.ora}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="persone" className="block text-sm font-medium text-gray-700 mb-2">
                    Numero Persone
                  </label>
                  <select
                    id="persone"
                    name="persone"
                    value={formData.persone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
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
              <button type="submit" className="w-full btn-primary text-lg">
                Conferma Prenotazione
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
      <Toast
        message="Prenotazione ricevuta! Vi contatteremo presto per confermare."
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}