import { notFound } from 'next/navigation';
import { getAllExhibits, getExhibitBySlug, getStatusBadgeColor, getStatusText } from '../utils';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { MDXComponents } from '@/components/mdx-components';
import { ArrowLeft, ExternalLink, FlaskConical, Shield } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  const exhibits = getAllExhibits();
  return exhibits.map((exhibit) => ({
    slug: exhibit.slug,
  }));
}

export default async function ExhibitPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exhibit = getExhibitBySlug(slug);

  if (!exhibit) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header with Lab Branding */}
      <div className="border-b border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FlaskConical className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">EXHIBIT ANALYSIS</h1>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">Detailed Project Documentation</p>
              </div>
            </div>
            
            <Link
              href="/portfolio"
              className="inline-flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Return to Exhibits</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Exhibit Header */}
        <section className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                {exhibit.title}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                {exhibit.description}
              </p>
            </div>
            <span className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-medium font-mono ml-4 ${getStatusBadgeColor(exhibit.status)}`}>
              {getStatusText(exhibit.status)}
            </span>
          </div>

          {/* Exhibit Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-mono text-sm text-slate-600 dark:text-slate-400 mb-2">TECHNICAL_STACK:</h4>
              <div className="flex flex-wrap gap-2">
                {exhibit.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2 py-1 rounded-md text-sm bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-mono text-sm text-slate-600 dark:text-slate-400 mb-2">EXHIBIT_METADATA:</h4>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded p-3 font-mono text-sm">
                <div className="text-slate-600 dark:text-slate-400">
                  Date: <span className="text-slate-900 dark:text-slate-100">
                    {new Date(exhibit.exhibitDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div className="text-slate-600 dark:text-slate-400">
                  Status: <span className="text-slate-900 dark:text-slate-100">{getStatusText(exhibit.status)}</span>
                </div>
                <div className="text-slate-600 dark:text-slate-400">
                  Access: <span className="text-slate-900 dark:text-slate-100">
                    {exhibit.url ? 'EXTERNAL_LINK_AVAILABLE' : 'DOCUMENTATION_ONLY'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* External Access Button */}
          {exhibit.url && (
            <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                    External System Access
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Access the live research demonstration or external repository.
                  </p>
                </div>
                <a
                  href={exhibit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Access External System</span>
                </a>
              </div>
            </div>
          )}
        </section>

        {/* Exhibit Documentation */}
        <section className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
          <div className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50 px-6 py-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Technical Documentation</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Comprehensive research findings, implementation details, and project analysis.
            </p>
          </div>
          
          <div className="p-8">
            <div className="prose-custom">
              <MDXRemote source={exhibit.content} components={MDXComponents} />
            </div>
          </div>
        </section>

        {/* Security Notice */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div className="text-sm">
              <p className="text-blue-800 dark:text-blue-200 font-medium mb-1">
                External Access Protocol
              </p>
              <p className="text-blue-700 dark:text-blue-300">
                All external system access is logged for security purposes. 
                Projects may require additional authentication or have usage limitations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}