import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Feira Alternativa // Montes Claros — MG',
  description:
    'Uma proposta de encontro para arte, música, moda, cultura geek e esporte urbano em Montes Claros.',
  metadataBase: new URL('https://feira-alternativa-montes-claros.vercel.app'),
  openGraph: {
    title: 'Feira Alternativa // Montes Claros — MG',
    description: 'O underground tem endereço. A cultura tem espaço.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
