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
          box-shadow: 0 0 30px rgba(212, 255, 0, 0.5);
        }
        
        .text-glow {
          text-shadow: 0 0 20px rgba(212, 255, 0, 0.6);
        }
        
        .nav-blur {
          backdrop-filter: blur(20px);
          background: rgba(0, 0, 0, 0.95);
        }
        
        .smooth-scroll {
          scroll-behavior: smooth;
        }
        
        .gradient-mesh {
          background: 
            radial-gradient(circle at 20% 50%, rgba(212, 255, 0, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(212, 255, 0, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(212, 255, 0, 0.015) 0%, transparent 50%);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(212, 255, 0, 0.3); }
          50% { box-shadow: 0 0 40px rgba(212, 255, 0, 0.6); }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Floating Navigation Bar */}
      <nav
        className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled ? "top-4" : ""
        }`}
      >
        <div className="hidden md:block nav-blur border border-gray-800 rounded-full px-6 py-3 shadow-2xl">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={createPageUrl(link.path)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-[var(--accent-yellow)] text-black"
                    : "text-white hover:text-[var(--accent-yellow)]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to={createPageUrl("Contact")}
              className="ml-2 px-6 py-2 bg-[var(--accent-yellow)] text-black rounded-full font-semibold hover:glow-effect transition-all duration-200 transform hover:scale-105"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="nav-blur border border-gray-800 rounded-full p-3 shadow-2xl"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {isMobileMenuOpen && (
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-64 nav-blur border border-gray-800 rounded-2xl p-4 space-y-2 shadow-2xl">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={createPageUrl(link.path)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-[var(--accent-yellow)] text-black"
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
              <h4 className="font-semibold mb-4">Connect With</h4>
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