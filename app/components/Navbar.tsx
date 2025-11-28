"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-serif text-3xl font-bold text-gray-900 tracking-wide">
          Aurelia
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-gold font-medium transition-colors">Home</Link>
          <Link href="/menu" className="text-gray-700 hover:text-gold font-medium transition-colors">Menu</Link>
          <Link href="/chi-siamo" className="text-gray-700 hover:text-gold font-medium transition-colors">Chi Siamo</Link>
        </div>
        <Link href="/prenotazioni" className="btn-primary">
          Prenota
        </Link>
      </div>
    </nav>
  );
}