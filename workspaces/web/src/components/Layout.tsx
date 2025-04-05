import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
    logoUrl: string;
    headerButtons: {
      buttonText: string;
      buttonUrl: string;
    }[];
    footerText?: string;
    children: React.ReactNode;
  }
  

export default function Layout({ logoUrl, headerButtons, children }: LayoutProps) {
  return (
    <>
      <Header logoUrl={logoUrl} buttons={headerButtons} />
      <main>{children}</main>
      <Footer logoUrl={logoUrl} />
    </>
  );
}
