import React, { useState } from 'react';

interface HeaderProps {
  logoUrl: string;
  buttons: {
    buttonText: string;
    buttonUrl: string;
  }[];
}

export default function Header({ logoUrl, buttons }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <div className="header-container">
        <img src={logoUrl} alt="Logo" className="header-logo" />
        <nav className="header-nav">
          <button
            className="hamburger-button"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          />
          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            {buttons.map((button, index) => (
              <li key={index} className="nav-item">
                <a href={button.buttonUrl} className="nav-link">
                  {button.buttonText}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
