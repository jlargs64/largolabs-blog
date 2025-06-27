import { getAllPosts } from './blog/utils';
import { getAllExhibits } from './portfolio/utils';

export const baseUrl = 'https://largolabs.dev';

export default async function sitemap() {
  const blogs = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const exhibits = getAllExhibits().map((exhibit) => ({
    url: `${baseUrl}/portfolio/${exhibit.slug}`,
    lastModified: exhibit.exhibitDate,
  }));

  const routes = ['', '/blog', '/portfolio', '/about', '/contact', '/resume', '/search'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs, ...exhibits];
}
