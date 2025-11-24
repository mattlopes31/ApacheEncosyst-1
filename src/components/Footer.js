'use client';
export const dynamic = 'force-static';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tProducts = useTranslations('products');

  const navigation = [
    { name: tNav('home'), href: '/' },
    { name: tNav('expertise'), href: '/#solutions' },
    { name: tNav('references'), href: '/references' },
    { name: tNav('contact'), href: '/contact' }
  ];

  const services = [
    tProducts('automatisme.title'),
    tProducts('ingenierie.title'),
    tProducts('scada.title'),
    tProducts('vitesse.title'),
    tProducts('tension.title'),
    tProducts('protections.title'),
    tProducts('instrumentation.title')
  ];

  return (
    <footer className="bg-gray-50 border-t-2 border-gray-200 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo et description */}
          <div>
            <div className="mb-6">
              <Image 
                src="/images/logo 3000DPI.png"
                alt="ENCOSYST - Energy Control System"
                width={200}
                height={50}
                className="h-12 w-auto object-contain"
                priority
              />
            </div>
            <p className="text-gray-600 text-sm mb-4">
              {t('description')}
            </p>
            <div className="flex gap-2">
              <span className="text-2xl">🇫🇷</span>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-900">{t('navigation')}</h4>
            <ul className="space-y-3 text-sm">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-orange-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-900">{t('expertise')}</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-900">{t('contact')}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2 text-gray-600">
                <MapPin size={16} className="text-[#8DC63E] mt-1 flex-shrink-0" />
                <div>
                  <div>13 Impasse Perbost</div>
                  <div>31800 Labarthe Inard</div>
                  <div>France</div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-orange-500 flex-shrink-0" />
                <a href="tel:+33561953342" className="text-gray-600 hover:text-orange-500 transition-colors">
                  +33 (0) 5 61 95 33 42
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#8DC63E] flex-shrink-0" />
                <a href="mailto:contact@encosyst.fr" className="text-[#8DC63E] hover:text-[#7AB62F] transition-colors font-medium">
                  contact@encosyst.fr
                </a>
              </li>
            </ul>
            
            {/* Logo LinkedIn */}
            <div className="mt-6">
              <a 
                href="https://www.linkedin.com/company/encosyst/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/imagesV2/logolinkendin.png"
                  alt="Suivez-nous sur LinkedIn"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t-2 border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              &copy; 2025 ENCOSYST - SASU - RCS TOULOUSE B 529 905 697
            </p>
            <div className="flex gap-6 text-sm text-gray-600">
              <span>{t('director')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}