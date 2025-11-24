import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Liste des locales supportées
export const locales = ['fr', 'en', 'es'];

export default getRequestConfig(async ({ locale }) => {
  // Valider que la locale entrante est valide
  if (!locales.includes(locale)) {
    notFound();
  }

  return {
    locale,  // ✅ IMPORTANT : Retourner la locale
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});