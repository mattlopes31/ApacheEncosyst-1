'use client';

import { Shield, Check, Zap, AlertTriangle, ArrowLeft, Activity, Calculator, Settings } from 'lucide-react';
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

export default function ProtectionsPage({params}) {
  const locale = params?.locale || 'fr';
  const t = useTranslations('products.protections.page');
  
  const equipementsCritiques = t.raw('equipementsCritiques.items');
  const etudesIngenierie = t.raw('etudesIngenierie.items');
  const configurationTests = t.raw('configurationTests.items');
  const typesProtections = t.raw('typesProtections.items');
  const specifications = t.raw('specifications.items');

  const images = [
    '/imagesV2/Protetctions/relais de protection.jpg',
    '/imagesV2/Protetctions/protection relay calculation.jpg',
    '/imagesV2/Protetctions/Armoire protection.jpg'
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
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Shield className="text-white" size={40} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                {t('mainTitle')}
              </h1>
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

      {/* Notre savoir-faire */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl border-2 border-cyan-200 p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('equipementsCritiques.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {equipementsCritiques.map((equip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">{equip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 1. Études d'Ingénierie */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-12 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Calculator size={40} className="text-cyan-600" />
              <h2 className="text-3xl font-bold text-gray-900">
                {t('etudesIngenierie.title')}
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('etudesIngenierie.intro')}
            </p>
            <div className="space-y-6">
              {etudesIngenierie.map((etude, index) => (
                <div key={index} className="bg-cyan-50 rounded-xl p-6 border-2 border-cyan-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{etude.titre}</h3>
                      <p className="text-gray-700">{etude.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Configuration, Tests et Mise en Service */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-12 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Settings size={40} className="text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">
                {t('configurationTests.title')}
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('configurationTests.intro')}
            </p>
            <div className="space-y-6">
              {configurationTests.map((config, index) => (
                <div key={index} className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{config.titre}</h3>
                      <p className="text-gray-700">{config.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Types de protections */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('typesProtections.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {typesProtections.map((protection, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-cyan-500 transition-all shadow-lg hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {protection.type}
                </h3>
                <p className="text-gray-600 mb-3">
                  {protection.description}
                </p>
                <div className="text-sm text-cyan-600 font-semibold bg-cyan-50 px-3 py-2 rounded-lg">
                  {protection.fonctions}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spécifications */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl border-2 border-cyan-200 p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Activity size={32} className="text-cyan-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                {t('specifications.title')}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {specifications.map((spec, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-cyan-50 mb-8">
              {t('cta.subtitle')}
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
            >
              {t('cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}