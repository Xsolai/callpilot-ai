import type { Metadata } from 'next';
import './globals.css';
import { DemoProvider } from '@/lib/store';

const site = 'https://callpilot-ai-brown.vercel.app';
const company = 'https://xsolai.com';

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: 'CallPilot AI | AI Calling Agent Operations Platform',
    template: '%s | CallPilot AI',
  },
  description:
    'Explore an AI calling agent SaaS for campaigns, live call orchestration, qualification, analytics, and human-supervised operations.',
  applicationName: 'CallPilot AI',
  authors: [{ name: 'Ahsan Inam', url: company }],
  creator: 'Ahsan Inam',
  publisher: 'XsolAI',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'CallPilot AI',
    description: 'AI calling operations, managed end to end.',
    url: site,
    siteName: 'CallPilot AI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/reference/callpilot-dashboard.png',
        width: 1600,
        height: 1000,
        alt: 'CallPilot AI mission control dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CallPilot AI',
    description: 'AI calling operations, managed end to end.',
    images: ['/reference/callpilot-dashboard.png'],
  },
  robots: { index: true, follow: true },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'XsolAI',
    url: company,
    founder: { '@type': 'Person', name: 'Ahsan Inam' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'CallPilot AI',
    url: site,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'A cloud-based AI calling operations platform.',
    creator: { '@type': 'Organization', name: 'XsolAI', url: company },
    offers: { '@type': 'Offer', price: '49', priceCurrency: 'USD' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'CallPilot AI',
    url: site,
    brand: { '@type': 'Brand', name: 'XsolAI' },
    description: 'AI calling agent operations software.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does CallPilot AI handle outbound calls?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CallPilot AI coordinates outbound call workflows and integrations from one workspace.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who created CallPilot AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ahsan Inam created CallPilot AI for XsolAI.',
        },
      },
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DemoProvider>{children}</DemoProvider>
        {jsonLd.map((item, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
      </body>
    </html>
  );
}
