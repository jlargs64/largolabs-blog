'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Activity, ArrowLeft, FileText, FlaskConical, Search as SearchIcon } from 'lucide-react';
import { searchContent, type SearchResult, type SearchResults } from './actions';

function SearchResultCard({ result }: { result: SearchResult }) {
  const typeLabel = result.type === 'blog' ? 'LAB_NOTE' : 'EXHIBIT';
  const typeColor = result.type === 'blog' ? 'text-purple-600 dark:text-purple-400' : 'text-blue-600 dark:text-blue-400';
  const typeIcon = result.type === 'blog' ? FileText : FlaskConical;
  const TypeIcon = typeIcon;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <TypeIcon className="h-4 w-4 text-slate-500 dark:text-slate-400" />
          <span className={`font-mono text-xs font-medium ${typeColor}`}>
            {typeLabel}
          </span>
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-500 font-mono">
          RELEVANCE: {result.relevanceScore.toFixed(1)}
        </div>
      </div>

      <Link href={result.url} className="group">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">
          {result.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
          {result.description}
        </p>
      </Link>

      <div className="flex items-center justify-between text-xs">
        <div className="flex flex-wrap gap-1">
          {result.matchedFields.map((field) => (
            <span
              key={field}
              className="inline-flex items-center px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-mono"
            >
              {field.toUpperCase()}
            </span>
          ))}
        </div>
        <div className="text-slate-500 dark:text-slate-500 font-mono">
          {new Date(result.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
          }).toUpperCase()}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<SearchResults>({
    results: [],
    totalResults: 0,
    query: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function performSearch() {
      if (!query) {
        setSearchResults({ results: [], totalResults: 0, query: '' });
        return;
      }

      setIsLoading(true);
      try {
        const results = await searchContent(query);
        setSearchResults(results);
      } catch (error) {
        console.error('Search error:', error);
        setSearchResults({ results: [], totalResults: 0, query });
      } finally {
        setIsLoading(false);
      }
    }

    performSearch();
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header with Lab Branding */}
      <div className="border-b border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <SearchIcon className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">SEARCH INTERFACE</h1>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">Lab Content Discovery System</p>
              </div>
            </div>
            
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Return to Lobby</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Search Query Display */}
        <section className="bg-slate-900 dark:bg-slate-800 text-white rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Activity className="h-5 w-5 text-green-400" />
            <h3 className="text-lg font-semibold">Search Query Analysis</h3>
          </div>
          <div className="font-mono text-sm space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-slate-400">QUERY:</span>
              <span className="text-blue-400 bg-slate-800 dark:bg-slate-700 px-2 py-1 rounded">
                {query || 'NO_QUERY_PROVIDED'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-slate-400">RESULTS_FOUND:</span>
              <span className="text-green-400">{searchResults.totalResults}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-slate-400">SEARCH_STATUS:</span>
              <span className="text-yellow-400">
                {isLoading ? 'ANALYZING...' : query ? 'ANALYSIS_COMPLETE' : 'AWAITING_INPUT'}
              </span>
            </div>
          </div>
        </section>

        {/* Search Results */}
        {isLoading ? (
          <section className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-12 text-center shadow-sm">
            <SearchIcon className="h-16 w-16 text-blue-400 mx-auto mb-4 animate-pulse" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Analyzing Lab Data...
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Searching through research notes and exhibits for &quot;{query}&quot;
            </p>
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 font-mono text-sm text-slate-600 dark:text-slate-400">
              PROGRESS: Scanning laboratory archives...
            </div>
          </section>
        ) : !query ? (
          <section className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-12 text-center shadow-sm">
            <SearchIcon className="h-16 w-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
              No Search Query Detected
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Please enter a search term using the search interface in the lab navigation sidebar.
            </p>
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 font-mono text-sm text-slate-600 dark:text-slate-400">
              SEARCH_SCOPE: Blog posts, Lab exhibits, Technical documentation
            </div>
          </section>
        ) : searchResults.totalResults === 0 ? (
          <section className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-12 text-center shadow-sm">
            <SearchIcon className="h-16 w-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
              No Results Found
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Your search for &quot;<span className="font-mono">{query}</span>&quot; did not match any lab documents or exhibits.
            </p>
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 font-mono text-sm text-slate-600 dark:text-slate-400">
              TIP: Try different keywords or check spelling
            </div>
          </section>
        ) : (
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Search Results
              </h2>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-mono">
                {searchResults.totalResults} result{searchResults.totalResults !== 1 ? 's' : ''} for &quot;{query}&quot;
              </div>
            </div>
            
            <div className="space-y-4">
              {searchResults.results.map((result) => (
                <SearchResultCard key={`${result.type}-${result.slug}`} result={result} />
              ))}
            </div>
          </section>
        )}

        {/* Search Tips */}
        <section className="mt-12 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
            Search Protocol Tips
          </h4>
          <div className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
            <div className="flex items-start space-x-2">
              <span className="font-mono text-blue-600 dark:text-blue-400">•</span>
              <span>Search queries scan titles, descriptions, and full content</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="font-mono text-blue-600 dark:text-blue-400">•</span>
              <span>Results are ranked by relevance and recency</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="font-mono text-blue-600 dark:text-blue-400">•</span>
              <span>Matches in titles receive higher priority than content matches</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="font-mono text-blue-600 dark:text-blue-400">•</span>
              <span>Minimum 2 characters required for search activation</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}