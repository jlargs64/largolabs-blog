import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Rss } from 'lucide-react';
import { getAllPosts } from './utils';

export const metadata: Metadata = {
  title: 'Largo Labs → Notebook',
};

export default function Notebook() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header with Lab Branding */}
      <div className="border-b border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">LAB NOTES</h1>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">Research Findings & Technical Logs</p>
              </div>
            </div>
            
            {/* RSS Subscribe Button */}
            <a
              href="/feed.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              <Rss className="h-4 w-4" />
              <span>Subscribe</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {posts.length === 0 ? (
          <section className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-12 text-center shadow-sm">
            <FileText className="h-16 w-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
              No Research Notes Available
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Lab notes are currently being compiled. Check back later for research findings and technical discussions.
            </p>
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 font-mono text-sm text-slate-600 dark:text-slate-400">
              STATUS: RESEARCH_IN_PROGRESS
            </div>
          </section>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium font-mono bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400">
                      LAB_NOTE
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-500 font-mono mb-3 space-y-1">
                    <div>
                      PUBLISHED: {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit',
                      }).toUpperCase()}
                    </div>
                    <div>
                      READING_TIME: {post.readingTime} MIN
                    </div>
                  </div>
                  {post.summary && (
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {post.summary}
                    </p>
                  )}
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
