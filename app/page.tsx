import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Largo Labs → Lobby',
  description: "Justin Largo's personal website, portfolio, and blog.",
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Justin Largo
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Software Engineer, Architect, Tester, and Inventor.
        </p>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          I build tools, write code, and experiences for everyone.
        </p>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
        <div className="space-y-4">Coming soon! Stay tuned for projects.</div>
      </section>

      {/* Blog Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Recent Blog Posts</h2>
        <div className="space-y-4">Coming soon! Stay tuned for articles.</div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <p className="text-muted-foreground mb-4">
          Want to collaborate or say hello?
        </p>
        <Link
          href="/contact"
          className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
