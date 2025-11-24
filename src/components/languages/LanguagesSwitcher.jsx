'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { routing } from '../../i18n/routing';
import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const localeLabels = {
  fr: 'Français',
  en: 'English',
  es: 'Español'
};

const localeFlags = {
  fr: '🇫🇷',
  en: '🇬🇧',
  es: '🇪🇸'
};

export default function LanguagesSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const locale = pathname.split('/')[1] || 'fr';

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLocale = (newLocale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Changer de langue"
      >
        <Globe size={20} className="text-gray-600" />
        <span className="text-2xl">{localeFlags[locale]}</span>
        <span className="font-medium text-gray-700 hidden sm:inline">
          {localeLabels[locale]}
        </span>
        <ChevronDown 
          size={16} 
          className={`text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border-2 border-gray-200 overflow-hidden z-50">
          {routing.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors ${
                locale === loc ? 'bg-orange-50 border-l-4 border-orange-500' : ''
              }`}
            >
              <span className="text-2xl">{localeFlags[loc]}</span>
              <span className={`font-medium ${locale === loc ? 'text-orange-600' : 'text-gray-700'}`}>
                {localeLabels[loc]}
              </span>
              {locale === loc && (
                <span className="ml-auto text-orange-500">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}