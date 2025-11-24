'use client';
export const dynamic = 'force-static';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  
  const images = [
    '/images/ARMOIRES/20240208_173603.jpg',
    '/images/ARMOIRES/oui.jpg',
    '/images/scada3.png',
    '/imagesV2/HDG_toma_2.jpeg',
    '/images/20201116_075131.jpg',
    '/images/20251024_162912.jpg',
    '/images/IMG-20250306-WA0004.jpg',
    '/images/HDGtoma.jpeg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change d'image toutes les 5 secondes

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Images de fond avec transitions */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`
            }}
          />
        ))}
        
        {/* Overlay dégradé sombre pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/20" />
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Logo ENCOSYST */}
          <div className="mb-8 animate-fade-in">
            <Image 
              src="/images/logo_3_COULEURS_BLANC.png"
              alt="ENCOSYST - Energy Control System"
              width={500}
              height={125}
              className="h-24 md:h-32 w-auto object-contain drop-shadow-2xl"
              priority
              style={{
                filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))',
              }}
            />
            {/* Ligne de soulignement */}
            <div className="mt-4 w-64 h-1 bg-gradient-to-r from-[#8DC63E] to-transparent rounded-full" />
          </div>

           <p className="text-2xl md:text-3xl font-semibold text-white mb-8 animate-fade-in">
            {t('title')}
          </p>

          
          {/* Sous-titre */}
          <p className="text-2xl md:text-3xl font-semibold text-white mb-8 animate-fade-in">
            {t('subtitle')}
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-5 rounded-xl font-bold flex items-center justify-center gap-3 text-lg transition-all shadow-2xl hover:shadow-orange-500/50 hover:scale-105 animate-fade-in"
            >
              {t('ctaButton')}
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/#solutions"
              className="group backdrop-blur-md bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg border-2 border-white/30 hover:border-white/50 transition-all shadow-xl hover:scale-105 animate-fade-in"
            >
              {t('cta')}
            </Link>
          </div>
        </div>
      </div>

      {/* Indicateurs de position */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImageIndex 
                ? 'w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            style={index === currentImageIndex ? { backgroundColor: '#8DC63E' } : {}}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>

      {/* Indicateur scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce animate-fade-in">
        <div className="flex flex-col items-center gap-2 text-white/80">
          <span className="text-sm font-medium">{t('cta')}</span>
          <ArrowDown size={24} />
        </div>
      </div>

      {/* Effet de vignette sur les bords */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
    </section>
  );
}