import PdfViewer from '@/components/pdf-viewer';
import { Download, FileText, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Largo Labs → CV Lab Report',
};

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header with Lab Branding */}
      <div className="border-b border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  CV LAB REPORT
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">
                  Subject Qualification Documentation
                </p>
              </div>
            </div>

            {/* Download Button */}
            <a
              href="/Justin Largo Resume 2025.pdf"
              download
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Document Status */}
        <div className="mb-6 bg-slate-900 dark:bg-slate-800 text-white rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="font-mono text-sm">DOCUMENT_STATUS: ACTIVE</span>
          </div>
          <div className="font-mono text-xs text-slate-400 space-y-1">
            <div>
              ├── Version: <span className="text-blue-400">2025.1</span>
            </div>
            <div>
              ├── Classification: <span className="text-green-400">PUBLIC</span>
            </div>
            <div>
              ├── Last Updated:{' '}
              <span className="text-yellow-400">JUNE_2025</span>
            </div>
            <div>
              └── Format:{' '}
              <span className="text-purple-400">PDF_PORTABLE_DOCUMENT</span>
            </div>
          </div>
        </div>

        {/* Main CV Viewer */}
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
          <div className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50 px-6 py-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Research Subject Credentials
              </h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Comprehensive documentation of research experience, technical
              qualifications, and project contributions.
            </p>
          </div>

          <div className="p-6">
            <PdfViewer path="/Justin Largo Resume 2025.pdf" />
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div className="text-sm">
              <p className="text-blue-800 dark:text-blue-200 font-medium mb-1">
                Document Authenticity Notice
              </p>
              <p className="text-blue-700 dark:text-blue-300">
                This CV contains verified employment history and qualifications.
                For reference verification, please contact previous employers
                directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
