'use client';

import { Gauge, Check, Zap, Wrench, ArrowLeft, Settings, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

function ImageCarousel({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-full w-full">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${alt} - ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-white' 
                  : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function RegulationVitessePage({params}) {
const locale = params?.locale || 'fr';
  const t = useTranslations('products.vitesse.page');
  
  const fonctionnalites = t.raw('fonctionnalites.items');
  const sequences = t.raw('sequences.items');
  const piecesReserves = t.raw('piecesReserve.items');
  const caracteristiques = t.raw('caracteristiques.items');
  const groupesHydrauliques = t.raw('groupesHydrauliques.items');

  const images = [
    '/images/Imagescontour/HPU Speed governor.png',
    '/images/20251024_162912.jpg'
  ];

  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 mb-8">
        <Link 
          href="/#solutions"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold"
        >
          <ArrowLeft size={20} />
          {t('backButton')}
        </Link>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Gauge className="text-white" size={40} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                {t('mainTitle')}
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carrousel d'images */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <ImageCarousel images={images} alt={t('mainTitle')} />
          </div>
        </div>
      </section>

      {/* Description principale */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('intro.title')}
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>{t('intro.p1')}</p>
              <p>{t('intro.p2')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Groupes hydrauliques */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('groupesHydrauliques.title')}
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
              <p>{t('groupesHydrauliques.intro')}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {groupesHydrauliques.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pièces de Réserve */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl border-2 border-orange-200 p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Wrench size={32} className="text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                {t('piecesReserve.title')}
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              {t('piecesReserve.intro')}
            </p>
            <ul className="space-y-3">
              {piecesReserves.map((piece, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{piece}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Fonctionnalités et Séquences */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Fonctionnalités */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl border-2 border-green-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Settings size={32} className="text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {t('fonctionnalites.title')}
                </h2>
              </div>
              <ul className="space-y-3">
                {fonctionnalites.map((fonc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{fonc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Séquences et essais */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle size={32} className="text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {t('sequences.title')}
                </h2>
              </div>
              <ul className="space-y-3">
                {sequences.map((seq, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{seq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Caractéristiques */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('caracteristiques.title')}
          </h2>
          <div className="bg-white rounded-xl border-2 border-gray-200 p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              {caracteristiques.map((carac, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">{carac}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-green-50 mb-8">
              {t('cta.subtitle')}
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
            >
              {t('cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}