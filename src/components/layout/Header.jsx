import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            if (window.location.pathname !== "/") {
              navigate("/", { state: { scrollTo: "#hero" } });
            }
            scrollToSection("#hero");
          }}
          className="text-xl font-semibold tracking-tight hover:text-cyan-400 transition-colors duration-300"
        >
          <span className="text-cyan-400">&lt;</span>
          SS
          <span className="text-cyan-400">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                if (window.location.pathname !== "/") {
                  navigate("/", { state: { scrollTo: item.href } });
                }
                scrollToSection(item.href);
              }}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Button
            onClick={() => {
              if (window.location.pathname !== "/") {
                navigate("/", { state: { scrollTo: "#contact" } });
              }
              scrollToSection("#contact");
            }}
            className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-medium px-5 py-2 text-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Get in Touch
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-4 mx-6 rounded-lg p-6 animate-fade-in-up">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== "/") {
                    navigate("/", { state: { scrollTo: item.href } });
                  }
                  scrollToSection(item.href);
                }}
                className="text-gray-400 hover:text-white transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={() => {
                if (window.location.pathname !== "/") {
                  navigate("/", { state: { scrollTo: "#contact" } });
                }
                scrollToSection("#contact");
              }}
              className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-medium mt-2 w-full"
            >
              Get in Touch
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
