import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ProjectExhibit {
  slug: string;
  title: string;
  description: string;
  url: string;
  technologies: string[];
  status: 'active' | 'archived' | 'development' | 'prototype';
  exhibitDate: string;
  content: string;
  images?: string[];
  featured_image?: string;
}

const exhibitsDirectory = path.join(process.cwd(), 'app/portfolio/exhibits');

export function getAllExhibits(): ProjectExhibit[] {
  if (!fs.existsSync(exhibitsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(exhibitsDirectory);
  const allExhibitsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(exhibitsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        description: data.description || '',
        url: data.url || '',
        technologies: data.technologies || [],
        status: data.status || 'active',
        exhibitDate: data.exhibitDate || '',
        content,
        images: data.images || [],
        featured_image: data.featured_image || '',
      } as ProjectExhibit;
    });

  return allExhibitsData.sort((a, b) => {
    if (a.exhibitDate < b.exhibitDate) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getExhibitBySlug(slug: string): ProjectExhibit | null {
  try {
    const fullPath = path.join(exhibitsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      url: data.url || '',
      technologies: data.technologies || [],
      status: data.status || 'active',
      exhibitDate: data.exhibitDate || '',
      content,
      images: data.images || [],
      featured_image: data.featured_image || '',
    };
  } catch {
    return null;
  }
}

export function getStatusBadgeColor(status: ProjectExhibit['status']): string {
  switch (status) {
    case 'active':
      return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400';
    case 'development':
      return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400';
    case 'prototype':
      return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400';
    case 'archived':
      return 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-400';
    default:
      return 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-400';
  }
}

export function getStatusText(status: ProjectExhibit['status']): string {
  switch (status) {
    case 'active':
      return 'OPERATIONAL';
    case 'development':
      return 'IN_DEVELOPMENT';
    case 'prototype':
      return 'PROTOTYPE';
    case 'archived':
      return 'ARCHIVED';
    default:
      return 'UNKNOWN';
  }
}