/**
 * DEPRECATED: This file is now deprecated.
 * Search functionality has been moved to server actions to avoid client-side fs module issues.
 * Use app/search/actions.ts instead for all search operations.
 */

import { getAllPosts, type BlogPost } from '@/app/blog/utils';
import { getAllExhibits, type ProjectExhibit } from '@/app/portfolio/utils';

export type SearchResultType = 'blog' | 'exhibit';

export interface SearchResult {
  type: SearchResultType;
  slug: string;
  title: string;
  description: string;
  url: string;
  date: string;
  relevanceScore: number;
  matchedFields: string[];
}

export interface SearchResults {
  results: SearchResult[];
  totalResults: number;
  query: string;
}

/**
 * Calculate relevance score based on matching fields and query frequency
 */
function calculateRelevance(
  query: string,
  title: string,
  content: string,
  description: string
): { score: number; matchedFields: string[] } {
  const queryLower = query.toLowerCase();
  const titleLower = title.toLowerCase();
  const contentLower = content.toLowerCase();
  const descriptionLower = description.toLowerCase();
  
  let score = 0;
  const matchedFields: string[] = [];

  // Title matches get highest weight
  if (titleLower.includes(queryLower)) {
    score += 10;
    matchedFields.push('title');
    // Exact title match gets bonus
    if (titleLower === queryLower) {
      score += 15;
    }
  }

  // Description matches get medium weight
  if (descriptionLower.includes(queryLower)) {
    score += 5;
    matchedFields.push('description');
  }

  // Content matches get lower weight
  if (contentLower.includes(queryLower)) {
    score += 3;
    matchedFields.push('content');
  }

  // Count frequency of query terms in content
  const queryWords = queryLower.split(/\s+/).filter(word => word.length > 2);
  queryWords.forEach(word => {
    const titleMatches = (titleLower.match(new RegExp(word, 'g')) || []).length;
    const descMatches = (descriptionLower.match(new RegExp(word, 'g')) || []).length;
    const contentMatches = (contentLower.match(new RegExp(word, 'g')) || []).length;
    
    score += titleMatches * 2;
    score += descMatches * 1;
    score += contentMatches * 0.5;
  });

  return { score, matchedFields };
}

/**
 * Search across blog posts and portfolio exhibits
 */
export function searchContent(query: string): SearchResults {
  if (!query || query.trim().length < 2) {
    return {
      results: [],
      totalResults: 0,
      query: query.trim(),
    };
  }

  const queryTrimmed = query.trim();
  const results: SearchResult[] = [];

  // Search blog posts
  const blogPosts = getAllPosts();
  blogPosts.forEach((post: BlogPost) => {
    const { score, matchedFields } = calculateRelevance(
      queryTrimmed,
      post.title,
      post.content,
      post.summary
    );

    if (score > 0) {
      results.push({
        type: 'blog',
        slug: post.slug,
        title: post.title,
        description: post.summary,
        url: `/blog/${post.slug}`,
        date: post.publishedAt,
        relevanceScore: score,
        matchedFields,
      });
    }
  });

  // Search portfolio exhibits
  const exhibits = getAllExhibits();
  exhibits.forEach((exhibit: ProjectExhibit) => {
    const { score, matchedFields } = calculateRelevance(
      queryTrimmed,
      exhibit.title,
      exhibit.content,
      exhibit.description
    );

    if (score > 0) {
      results.push({
        type: 'exhibit',
        slug: exhibit.slug,
        title: exhibit.title,
        description: exhibit.description,
        url: `/portfolio/${exhibit.slug}`,
        date: exhibit.exhibitDate,
        relevanceScore: score,
        matchedFields,
      });
    }
  });

  // Sort by relevance score (descending), then by date (descending)
  results.sort((a, b) => {
    if (a.relevanceScore !== b.relevanceScore) {
      return b.relevanceScore - a.relevanceScore;
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return {
    results,
    totalResults: results.length,
    query: queryTrimmed,
  };
}

/**
 * Get search suggestions based on partial query
 */
export function getSearchSuggestions(query: string, limit: number = 5): string[] {
  if (!query || query.trim().length < 2) {
    return [];
  }

  const queryLower = query.toLowerCase();
  const suggestions = new Set<string>();

  // Get suggestions from blog post titles
  const blogPosts = getAllPosts();
  blogPosts.forEach((post: BlogPost) => {
    if (post.title.toLowerCase().includes(queryLower)) {
      suggestions.add(post.title);
    }
  });

  // Get suggestions from exhibit titles
  const exhibits = getAllExhibits();
  exhibits.forEach((exhibit: ProjectExhibit) => {
    if (exhibit.title.toLowerCase().includes(queryLower)) {
      suggestions.add(exhibit.title);
    }
  });

  return Array.from(suggestions).slice(0, limit);
}