import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import './globals.css';

export const metadata = {
  title: 'ENCOSYST - Control Systems for Hydroelectric Power Plants',
  description: 'Specialist in control and command systems for hydroelectric power plants since 2011.',
};

const locales = ['fr', 'en', 'es'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  // ✅ CHANGEMENT ICI : Accès direct sans await
  const { locale } = params;
  
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}