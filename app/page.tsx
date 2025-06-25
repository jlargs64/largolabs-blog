import type { Metadata } from 'next';
import Layout from './layout';

export const metadata: Metadata = {
  title: 'Largo Labs → Lobby',
  description: "Justin Largo's personal website, portfolio, and blog.",
};

export default function Home() {
  return (
    <Layout>
      <h1>Lobby</h1>
    </Layout>
  );
}
