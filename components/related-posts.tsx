import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import { getAllPosts, type BlogPost } from '@/app/blog/utils';

interface RelatedPostsProps {
  currentPost: BlogPost;
  maxPosts?: number;
}

function calculateSimilarity(post1: BlogPost, post2: BlogPost): number {
  // Don't suggest the same post
  if (post1.slug === post2.slug) return 0;

  let score = 0;
  
  // Normalize text for comparison
  const normalizeText = (text: string) => 
    text.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 3); // Filter out short words

  const post1Words = new Set([
    ...normalizeText(post1.title),
    ...normalizeText(post1.summary),
    ...normalizeText(post1.content.substring(0, 500)), // First 500 chars for performance
  ]);

  const post2Words = new Set([
    ...normalizeText(post2.title),
    ...normalizeText(post2.summary),
    ...normalizeText(post2.content.substring(0, 500)),
  ]);

  // Calculate Jaccard similarity (intersection / union)
  const intersection = new Set([...post1Words].filter(word => post2Words.has(word)));
  const union = new Set([...post1Words, ...post2Words]);
  
  if (union.size > 0) {
    score = intersection.size / union.size;
  }

  // Boost score for title word matches
  const titleWords1 = new Set(normalizeText(post1.title));
  const titleWords2 = new Set(normalizeText(post2.title));
  const titleIntersection = new Set([...titleWords1].filter(word => titleWords2.has(word)));
  
  if (titleIntersection.size > 0) {
    score += titleIntersection.size * 0.1; // Title matches get extra weight
  }

  return score;
}

export function RelatedPosts({ currentPost, maxPosts = 3 }: RelatedPostsProps) {
  const allPosts = getAllPosts();
  
  // Calculate similarity scores and sort
  const relatedPosts = allPosts
    .map(post => ({
      post,
      similarity: calculateSimilarity(currentPost, post),
    }))
    .filter(({ similarity }) => similarity > 0.05) // Minimum similarity threshold
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, maxPosts)
    .map(({ post }) => post);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
      <div className="flex items-center space-x-3 mb-6">
        <FileText className="h-5 w-5 text-slate-600 dark:text-slate-400" />
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Related Research Notes</h3>
      </div>
      
      <div className="space-y-4">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block p-4 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                  {post.title}
                </h4>
                {post.summary && (
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                    {post.summary}
                  </p>
                )}
                <div className="flex items-center space-x-4 mt-2 text-xs text-slate-500 dark:text-slate-500 font-mono">
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit',
                    }).toUpperCase()}
                  </span>
                  <span>
                    {post.readingTime} MIN READ
                  </span>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0 ml-4" />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-600">
        <div className="text-xs font-mono text-slate-500 dark:text-slate-500">
          RECOMMENDATIONS: {relatedPosts.length} RELATED_NOTES_FOUND
        </div>
      </div>
    </div>
  );
}