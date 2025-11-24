'use client';
export const dynamic = 'force-static';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import LanguagesSwitcher from '@/components/languages/LanguagesSwitcher';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('nav');

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('expertise'), href: '/#solutions' },
    { name: t('references'), href: '/references' },
    { name: t('contact'), href: '/contact' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 fixed w-full top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo 3000DPI.png"
              alt="ENCOSYST - Energy Control System"
              width={200}
              height={50}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>
          
          {/* Desktop Navigation + Language Switcher */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-5 py-2 rounded-lg transition-all font-medium text-gray-600 hover:bg-gray-50 hover:text-orange-500"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Séparateur vertical */}
            <div className="h-8 w-px bg-gray-300 mx-2" />
            
            {/* Sélecteur de langue */}
            <LanguagesSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguagesSwitcher />
            <button
              className="text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-lg mb-2 font-medium text-gray-600 hover:bg-gray-50 hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}