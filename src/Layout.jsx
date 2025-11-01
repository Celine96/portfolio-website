import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "Home" },
    { name: "About Me", path: "AboutMe" },
    { name: "Portfolio", path: "Portfolio" },
    { name: "Services", path: "Services" },
    { name: "ROI Calculator", path: "Tools" },
  ];

  const isActive = (pageName) => {
    return location.pathname === createPageUrl(pageName);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        :root {
          --accent-yellow: #D4FF00;
          --bg-dark: #000000;
          --bg-card: #0A0A0A;
          --text-primary: #FFFFFF;
          --text-secondary: #A0A0A0;
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .glow-effect {
          box-shadow: 0 0 20px rgba(212, 255, 0, 0.4);
        }
        
        .text-glow {
          text-shadow: 0 0 30px rgba(212, 255, 0, 0.5);
        }
        
        .nav-blur {
          backdrop-filter: blur(10px);
          background: rgba(0, 0, 0, 0.9);
        }
        
        .smooth-scroll {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "nav-blur border-b border-gray-900" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to={createPageUrl("Home")}
              className="text-2xl font-bold tracking-tight hover:text-[var(--accent-yellow)] transition-colors"
            >
              AHMER<span className="text-[var(--accent-yellow)]">.</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={createPageUrl(link.path)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? "text-[var(--accent-yellow)]"
                      : "text-white hover:text-[var(--accent-yellow)]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to={createPageUrl("Contact")}
                className="ml-4 px-6 py-2.5 bg-[var(--accent-yellow)] text-black rounded-lg font-semibold hover:glow-effect transition-all duration-200 transform hover:scale-105"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-900 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t border-gray-900">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={createPageUrl(link.path)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-gray-900 text-[var(--accent-yellow)]"
                      : "hover:bg-gray-900"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to={createPageUrl("Contact")}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 bg-[var(--accent-yellow)] text-black rounded-lg font-semibold text-center"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="smooth-scroll">{children}</main>

      {/* Footer */}
      <footer className="border-t border-gray-900 mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                AHMER<span className="text-[var(--accent-yellow)]">.</span>
              </h3>
              <p className="text-gray-400 text-sm">
                AI Automation Expert crafting intelligent workflows that redefine productivity.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={createPageUrl(link.path)}
                    className="block text-sm text-gray-400 hover:text-[var(--accent-yellow)] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Let's Connect</h4>
              <Link
                to={createPageUrl("Contact")}
                className="inline-block px-6 py-2 bg-[var(--accent-yellow)] text-black rounded-lg font-semibold hover:glow-effect transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-900 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Ahmer. All rights reserved. Powered by AI & Innovation.
          </div>
        </div>
      </footer>
    </div>
  );
}