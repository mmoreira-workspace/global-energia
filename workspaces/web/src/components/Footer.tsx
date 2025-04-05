// src/components/Footer.tsx
import React from 'react';

interface FooterProps {
  logoUrl: string;
  footerText?: string;
}

export default function Footer({ logoUrl }: FooterProps) {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <img src={logoUrl} alt="Footer Logo" className="footer-logo" />
        </div>
        <div className="footer-section-3">
          <p>Todos os direitos reservados Global Energia LTDA 2025</p>
        </div>
      </div>
    </footer>
  );
}
