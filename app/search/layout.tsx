import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Largo Labs → Search Interface',
  description: 'Search through lab notes, exhibits, and research documentation.',
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}