import PdfViewer from '@/components/pdf-viewer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Largo Labs → CV Lab Report',
};

export default function Resume() {
  return (
    <div className="mx-8 my-2 p-4 ">
      <PdfViewer path="/Justin Largo Resume 2025 Anonymized.pdf" />
    </div>
  );
}
