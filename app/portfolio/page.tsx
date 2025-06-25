import type { Metadata } from 'next';
import Layout from '../layout';

export const metadata: Metadata = {
  title: 'Largo Labs → Lab Exhibits',
};

export default function Portfolio() {
  return (
    <Layout>
      <h1>Lab Exhibits (Portfolio)</h1>
    </Layout>
  );
}
