import { MDXComponents } from '@/components/mdx-components';
import { RelatedPosts } from '@/components/related-posts';
import { SocialShare } from '@/components/social-share';
import { generateMetadata as generateOpenGraphMetadata } from '@/lib/metadata';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '../utils';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return generateOpenGraphMetadata({
      title: 'Post Not Found',
      description: 'The requested lab note could not be found.',
      path: `/blog/${slug}`,
    });
  }

  return generateOpenGraphMetadata({
    title: post.title,
    description:
      post.summary || `A research note about ${post.title.toLowerCase()}.`,
    path: `/blog/${slug}`,
    type: 'article',
    publishedTime: post.publishedAt,
    tags: ['research', 'technology', 'software engineering'],
  });
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="p-8 max-w-4xl mx-auto">
      <header className="mb-8 border-b pb-6">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          {post.title}
        </h1>
        <div className="text-sm text-muted-foreground space-y-1">
          <time>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <div className="font-mono text-xs">
            READING_TIME: {post.readingTime} MIN
          </div>
        </div>
        {post.summary && (
          <p className="text-xl text-muted-foreground mt-4 leading-7">
            {post.summary}
          </p>
        )}
      </header>
      <div className="prose-custom">
        <MDXRemote source={post.content} components={MDXComponents} />
      </div>

      {/* Social Sharing */}
      <div className="mt-12">
        <SocialShare
          url={`/blog/${post.slug}`}
          title={post.title}
          description={post.summary}
        />
      </div>

      {/* Related Posts */}
      <div className="mt-12">
        <RelatedPosts currentPost={post} />
      </div>
    </article>
  );
}
