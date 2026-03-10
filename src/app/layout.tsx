import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ManufacturingBusinessSchema from '@/components/schema/ManufacturingBusinessSchema';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Spezialfahrzeugbau | Marko Pfaff & Co. | Bad Lausick',
    template: '%s | Marko Pfaff Spezialfahrzeugbau',
  },
  description:
    'Individuelle Spezialfahrzeuge seit 1985: Weihnachtsmarkthuetten, Wohnwagen, Uebertragungswagen, Verkaufsfahrzeuge. DIN EN 1090 zertifiziert, DEKRA-Abnahme vor Ort. Bad Lausick/Sachsen.',
  metadataBase: new URL('https://www.fahrzeugbau-pfaff.de'),
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Marko Pfaff & Co. Spezialfahrzeugbau',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.fahrzeugbau-pfaff.de',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ManufacturingBusinessSchema />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
