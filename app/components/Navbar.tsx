"use client";

import { useState } from "react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Work", id: "work" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <button
          className="navbar-logo"
          onClick={() => scrollToSection("home")}
        >
          AG<span>.</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}