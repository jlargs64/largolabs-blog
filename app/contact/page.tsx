import type { Metadata } from 'next';
import Layout from '../layout';

export const metadata: Metadata = {
  title: 'Largo Labs → Collaboration Station',
};

export default function Contact() {
  return (
    <Layout>
      <h1>Collaboration Station (Contact)</h1>
    </Layout>
  );
}
