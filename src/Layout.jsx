import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Linkedin, Mail, Github } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "Home" },
    { name: "About", path: "AboutMe" },
    { name: "Services", path: "Services" },
    { name: "Portfolio", path: "Portfolio" },
    { name: "ROI", path: "Tools" },
  ];

  const isActive = (pageName) => {
    return location.pathname === createPageUrl(pageName);
  };

  const handleNavClick = (path) => {
    navigate(createPageUrl(path));
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#F5F5F5]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .smooth-scroll {
          scroll-behavior: smooth;
        }
        
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .button-hover {
          transition: filter 0.2s ease;
        }
        
        .button-hover:hover {
          filter: brightness(1.1);
        }
        
        .fade-in {
          animation: fadeIn 0.6s ease-in;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#111111]/95 backdrop-blur-sm border-b border-[#333333]" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to={createPageUrl("Home")}
              onClick={() => window.scrollTo(0, 0)}
              className="text-xl font-bold tracking-tight text-[#F5F5F5] hover:text-[#CCFF00] transition-colors"
            >
              이수연<span className="text-[#CCFF00]">.</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-[#F5F5F5]"
                      : "text-[#A0A0A0] hover:text-[#F5F5F5]"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("ConsultationBooking")}
                className="px-6 py-2.5 bg-[#CCFF00] text-black rounded font-semibold button-hover"
              >
                무료 상담 예약
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded hover:bg-[#1A1A1A] transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t border-[#333333]">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  className={`block w-full text-left px-4 py-2 rounded text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-[#1A1A1A] text-[#F5F5F5]"
                      : "text-[#A0A0A0] hover:bg-[#1A1A1A]"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("ConsultationBooking")}
                className="block w-full px-4 py-2.5 bg-[#CCFF00] text-black rounded font-semibold text-center mx-4"
              >
                무료 상담 예약
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="smooth-scroll">{children}</main>

      {/* Footer */}
      <footer className="border-t border-[#333333] mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">이수연<span className="text-[#CCFF00]">.</span></h3>
              <p className="text-[#A0A0A0] text-sm leading-relaxed">
                AI 시스템 자동화 | 부동산 | 커뮤니티 | 삶의 본질에서 연결과 커뮤니티 생태계 선기능의 가치를 사람합니다.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#F5F5F5]">Quick Links</h4>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={createPageUrl(link.path)}
                    onClick={() => window.scrollTo(0, 0)}
                    className="block text-sm text-[#A0A0A0] hover:text-[#CCFF00] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#F5F5F5]">Let's Connect</h4>
              <div className="flex items-center justify-center gap-4 mb-6">
                <a
                   href="https://www.linkedin.com/in/syceline/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-[#A0A0A0] hover:text-[#CCFF00] transition-colors"
                 >
                   <Linkedin size={24} />
                 </a>
                <a
                  href="mailto:ehmar07@gmail.com"
                  className="text-[#A0A0A0] hover:text-[#CCFF00] transition-colors"
                >
                  <Mail size={24} />
                </a>
                <a
                   href="https://github.com/Celine96/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-[#A0A0A0] hover:text-[#CCFF00] transition-colors"
                 >
                   <Github size={24} />
                 </a>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => handleNavClick("ConsultationBooking")}
                  className="px-6 py-2 bg-[#CCFF00] text-black rounded font-semibold button-hover"
                >
                  무료 상담 예약
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#333333] text-center text-sm text-[#A0A0A0]">
            © {new Date().getFullYear()} 이수연. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}