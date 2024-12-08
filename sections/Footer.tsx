"use client";

import React from 'react'

export default function Footer() {
  const links = {
    product: [
      { name: "Features", href: "#features" },
      { name: "NFTs", href: "#nft" },
      { name: "Tokenomics", href: "#tokenomics" },
      { name: "Roadmap", href: "#roadmap" }
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" }
    ],
    legal: [
      { name: "Privacy", href: "#privacy" },
      { name: "Terms", href: "#terms" },
      { name: "License", href: "#license" }
    ],
    social: [
      { name: "Twitter", href: "https://twitter.com/fixierun" },
      { name: "Discord", href: "https://discord.gg/fixierun" },
      { name: "GitHub", href: "https://github.com/fixierun" }
    ]
  }

  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Produit</h3>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              {links.social.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p> 2024 FixieRun. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
