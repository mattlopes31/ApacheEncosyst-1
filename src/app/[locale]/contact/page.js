'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import emailjs from '@emailjs/browser';

export default function Contact({ params }) {
  const locale = params?.locale || 'fr';
  const t = useTranslations('Contact');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const result = await emailjs.send(
        'service_w13wd0i',           // Votre Service ID
        'template_a53ktn8',          // Votre Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'vuajeQJnXzrbBhneP'          // Votre Public Key
      );
      
      console.log('✅ Email envoyé avec succès:', result);
      
      setStatus({
        type: 'success',
        message: 'Message envoyé avec succès ! Nous vous recontacterons bientôt.'
      });
      
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi:', error);
      
      setStatus({
        type: 'error',
        message: 'Erreur lors de l\'envoi. Veuillez réessayer ou nous contacter directement.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-4 text-center text-gray-900">
          Contactez-nous
        </h1>
      <p className="text-center text-gray-600 mb-12 text-lg">
        Une question ? Un projet ? N&apos;hésitez pas à nous écrire !
      </p>
        
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
              Nom complet *
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Jean Dupont"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
              Adresse email *
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="jean.dupont@example.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">
              Votre message *
            </label>
            <textarea
              id="message"
              rows="6"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
              placeholder="Décrivez votre demande en détail..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 transform hover:scale-[1.02] transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Envoi en cours...
              </span>
            ) : (
              '📧 Envoyer le message'
            )}
          </button>

          {status.message && (
            <div className={`mt-6 p-4 rounded-lg border-l-4 ${
              status.type === 'success' 
                ? 'bg-green-50 border-green-500 text-green-800' 
                : 'bg-red-50 border-red-500 text-red-800'
            }`}>
              <p className="font-medium flex items-center">
                {status.type === 'success' ? '✅' : '❌'} {status.message}
              </p>
            </div>
          )}
        </form>

        <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Autres moyens de nous contacter
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 hover:bg-gray-50 rounded-lg transition">
              <div className="text-4xl mb-2">📧</div>
              <p className="font-semibold text-gray-700 mb-1">Email</p>
              <a href="mailto:l.lopes@encosyst.fr" className="text-blue-600 hover:underline">
                l.lopes@encosyst.fr
              </a>
            </div>
            <div className="p-4 hover:bg-gray-50 rounded-lg transition">
              <div className="text-4xl mb-2">📞</div>
              <p className="font-semibold text-gray-700 mb-1">Téléphone</p>
              <a href="tel:0561953342" className="text-gray-600 hover:text-blue-600">
                05 61 95 33 42
              </a>
            </div>
            <div className="p-4 hover:bg-gray-50 rounded-lg transition">
              <div className="text-4xl mb-2">📱</div>
              <p className="font-semibold text-gray-700 mb-1">Portable</p>
              <a href="tel:0601260232" className="text-gray-600 hover:text-blue-600">
                06 01 26 02 32
              </a>
            </div>
          </div>
          <div className="mt-6 text-center pt-6 border-t border-gray-200">
            <a href="https://www.encosyst.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium text-lg">
              🌐 www.encosyst.fr
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}