"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-[#141414] shadow-2xl" 
        : "bg-gradient-to-b from-black/90 to-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="font-serif text-3xl font-bold text-[#e50914] tracking-wide hover:scale-105 transition-transform">
          AURELIA
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link 
            href="/" 
            className={`font-semibold transition-colors ${
              pathname === "/" ? "text-white" : "text-[#e5e5e5] hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link 
            href="/menu" 
            className={`font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#e50914] focus:ring-offset-2 focus:ring-offset-black rounded-sm px-1 ${
              pathname === "/menu" ? "text-white" : "text-[#e5e5e5] hover:text-white"
            }`}
          >
            Menu
          </Link>
          <Link 
            href="/chi-siamo" 
            className={`font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#e50914] focus:ring-offset-2 focus:ring-offset-black rounded-sm px-1 ${
              pathname === "/chi-siamo" ? "text-white" : "text-[#e5e5e5] hover:text-white"
            }`}
          >
            Chi Siamo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-[#e50914] transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <Link href="/prenotazioni" className="hidden md:block btn-primary px-6 py-3 text-sm">
          Prenota
        </Link>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#141414] border-t border-gray-800 slide-in-left">
          <div className="px-6 py-4 space-y-4">
            <Link href="/" className="block text-white hover:text-[#e50914] font-semibold transition-colors">Home</Link>
            <Link href="/menu" className="block text-white hover:text-[#e50914] font-semibold transition-colors">Menu</Link>
            <Link href="/chi-siamo" className="block text-white hover:text-[#e50914] font-semibold transition-colors">Chi Siamo</Link>
            <Link href="/prenotazioni" className="block btn-primary text-center">Prenota</Link>
          </div>
        </div>
      )}
    </nav>
  );
}