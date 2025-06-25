import type { Metadata } from 'next';
import Layout from '../layout';

export const metadata: Metadata = {
  title: 'Largo Labs → CV Lab Report',
};

export default function Resume() {
  return (
    <Layout>
      <h1>CV Lab Report (Resume)</h1>
    </Layout>
  );
}
