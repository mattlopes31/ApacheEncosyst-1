'use client';

import { Brain, Check, Zap, Settings, ArrowLeft, Wrench } from 'lucide-react';
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
                index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ArmoiresPage({ params }) {
  const locale = params?.locale || 'fr';
  const t = useTranslations('products.automatisme.page');

  const specifications = t.raw('specifications.items'); // array
  const features = t.raw('features.items');            // array

  const modernization = {
    intro1: t('modernization.intro1'),
    intro2: t('modernization.intro2'),
    benefits: t.raw('modernization.benefits.items'),
    reasons: t.raw('modernization.reasons.items'),
    steps: [
      {
        title: t('modernization.steps.step1.title'),
        description: t('modernization.steps.step1.description'),
      },
      {
        title: t('modernization.steps.step2.title'),
        description: t('modernization.steps.step2.description'),
      },
      {
        title: t('modernization.steps.step3.title'),
        description: t('modernization.steps.step3.description'),
      },
    ],
  };

  const newProjects = {
    p1: t('newProjects.p1'),
    p2: t('newProjects.p2'),
    p3: t('newProjects.p3'),
  };

  const images = [
    '/imagesV2/Armoires/Armoire_de_controle_comande_4.png',
    '/imagesV2/Armoires/3 Panel de control central hidroeléctricaplanta .jpg',
    '/imagesV2/Armoires/4 Armoire de controle comande 2.jpg'
  ];

  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
      
      {/* Back button */}
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
        <div className="max-w-6xl mx-auto flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
            <Brain className="text-white" size={40} />
          </div>
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              {t('mainTitle')}
            </h1>
            <p className="text-xl text-gray-600 mt-2">
              {useTranslations('products.automatisme')('subtitle')}

            </p>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <ImageCarousel images={images} alt="Control cabinet images" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl border-2 border-gray-200 p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t('mainTitle')}
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>{t('intro.p1')}</p>
            <p>{t('intro.p2')}</p>
          </div>
        </div>
      </section>

      {/* Specs & Features */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Specs */}
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl border-2 border-orange-200 p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="text-orange-600" size={32} />
              <h2 className="text-2xl font-bold text-gray-900">
                {t('specifications.title')}
              </h2>
            </div>

            <ul className="space-y-3">
              {specifications.map((spec, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="text-green-600 mt-1" size={20} />
                  <span className="text-gray-700">{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-200 p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="text-blue-600" size={32} />
              <h2 className="text-2xl font-bold text-gray-900">
                {t('features.title')}
              </h2>
            </div>

            <ul className="space-y-3">
              {features.map((f, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="text-orange-600 mt-1" size={20} />
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Modernization */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-green-50 to-white rounded-2xl border-2 border-green-200 p-12 shadow-lg">

          <div className="flex items-center gap-3 mb-8">
            <Wrench className="text-green-600" size={40} />
            <h2 className="text-4xl font-bold text-gray-900">
              {t('modernization.title')}
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>{modernization.intro1}</p>
            <p>{modernization.intro2}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Benefits */}
            <div>
              <h3 className="text-xl font-bold mb-4">{t('modernization.benefits.title')}</h3>
              <ul className="space-y-3">
                {modernization.benefits.map((b, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-green-600 mt-1" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reasons */}
            <div>
              <h3 className="text-xl font-bold mb-4">{t('modernization.reasons.title')}</h3>
              <ul className="space-y-3">
                {modernization.reasons.map((r, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-orange-600 mt-1" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Steps */}
          <h3 className="text-2xl font-bold mt-12 mb-6">
            {t('modernization.steps.title')}
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {modernization.steps.map((s, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border-2 border-green-300 p-6 hover:border-green-500 transition-all shadow-md"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold mb-4">
                  {index + 1}
                </div>

                <h4 className="text-lg font-bold mb-2">{s.title}</h4>
                <p className="text-gray-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Projects */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl border-2 border-gray-200 p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t('newProjects.title')}
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>{newProjects.p1}</p>
            <p>{newProjects.p2}</p>
            <p>{newProjects.p3}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-orange-50 mb-8">
              {t('cta.subtitle')}
            </p>

            <Link 
              href="/contact"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
            >
              {t('cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
