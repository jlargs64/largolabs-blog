import type { Metadata } from 'next';
import Link from 'next/link';
import { Activity, ExternalLink, FlaskConical, Monitor } from 'lucide-react';
import { getAllExhibits, getStatusBadgeColor, getStatusText } from './utils';

export const metadata: Metadata = {
  title: 'Largo Labs → Lab Exhibits',
};

export default function Portfolio() {
  const exhibits = getAllExhibits();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header with Lab Branding */}
      <div className="border-b border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-3">
            <FlaskConical className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">LAB EXHIBITS</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">External Research Demonstrations</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* System Status Panel */}
        <section className="bg-slate-900 dark:bg-slate-800 text-white rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Activity className="h-5 w-5 text-green-400" />
            <h3 className="text-lg font-semibold">Exhibit System Status</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-mono text-sm">
            <div className="bg-slate-800 dark:bg-slate-700 rounded p-3">
              <div className="text-blue-400 mb-1">TOTAL EXHIBITS</div>
              <div className="text-slate-300 text-xl font-bold">{exhibits.length}</div>
            </div>
            <div className="bg-slate-800 dark:bg-slate-700 rounded p-3">
              <div className="text-green-400 mb-1">OPERATIONAL</div>
              <div className="text-slate-300 text-xl font-bold">
                {exhibits.filter(e => e.status === 'active').length}
              </div>
            </div>
            <div className="bg-slate-800 dark:bg-slate-700 rounded p-3">
              <div className="text-yellow-400 mb-1">DEVELOPMENT</div>
              <div className="text-slate-300 text-xl font-bold">
                {exhibits.filter(e => e.status === 'development').length}
              </div>
            </div>
            <div className="bg-slate-800 dark:bg-slate-700 rounded p-3">
              <div className="text-purple-400 mb-1">PROTOTYPES</div>
              <div className="text-slate-300 text-xl font-bold">
                {exhibits.filter(e => e.status === 'prototype').length}
              </div>
            </div>
          </div>
        </section>

        {/* Exhibits Grid */}
        {exhibits.length === 0 ? (
          <section className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-12 text-center shadow-sm">
            <FlaskConical className="h-16 w-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
              No Exhibits Currently on Display
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Lab exhibits are under development. Check back later for project demonstrations and external research links.
            </p>
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 font-mono text-sm text-slate-600 dark:text-slate-400">
              STATUS: EXHIBIT_PREPARATION_IN_PROGRESS
            </div>
          </section>
        ) : (
          <section className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Monitor className="h-6 w-6 text-slate-600 dark:text-slate-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Active Research Exhibits</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exhibits.map((exhibit) => (
                <div
                  key={exhibit.slug}
                  className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Exhibit Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 line-clamp-2">
                      {exhibit.title}
                    </h3>
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium font-mono ${getStatusBadgeColor(exhibit.status)}`}>
                      {getStatusText(exhibit.status)}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                    {exhibit.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {exhibit.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {exhibit.technologies.length > 3 && (
                        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                          +{exhibit.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Date */}
                  <div className="text-xs text-slate-500 dark:text-slate-500 font-mono mb-4">
                    EXHIBIT_DATE: {new Date(exhibit.exhibitDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit',
                    }).toUpperCase()}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <Link
                      href={`/portfolio/${exhibit.slug}`}
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-md transition-colors"
                    >
                      View Details
                    </Link>
                    {exhibit.url && (
                      <a
                        href={exhibit.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
