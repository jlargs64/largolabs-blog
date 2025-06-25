import type { Metadata } from 'next';
import Layout from '../layout';

export const metadata: Metadata = {
  title: 'Largo Labs → Notebook',
};

export default function Notebook() {
  return (
    <Layout>
      <h1>Notebook</h1>
    </Layout>
  );
}
