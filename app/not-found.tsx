import Link from 'next/link';
import { AlertTriangle, ArrowLeft, Code, Coffee, Wrench } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Error Code Display */}
        <div className="relative">
          <div className="text-9xl font-mono font-bold text-muted-foreground/20 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <AlertTriangle className="h-16 w-16 text-yellow-500" />
          </div>
        </div>

        {/* Main Error Message */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Null Pointer Exception in Reality
          </h1>
          <p className="text-xl text-muted-foreground">
            Looks like this page got lost in the microservices migration...
          </p>
        </div>

        {/* Technical Humor */}
        <div className="bg-muted rounded-lg p-6 text-left font-mono text-sm">
          <div className="text-red-500 mb-2">ERROR: PageNotFoundException</div>
          <div className="text-muted-foreground">
            <div>├── Checked the Java monolith: <span className="text-red-500">DEPRECATED</span></div>
            <div>├── Searched Python microservices: <span className="text-yellow-500">IN_PROGRESS</span></div>
            <div>├── Asked Watsonx Assistant: <span className="text-blue-500">&quot;Have you tried turning it off and on again?&quot;</span></div>
            <div>├── Ran automated regression tests: <span className="text-green-500">88% efficient, still no page</span></div>
            <div>└── Status: <span className="text-orange-500">Needs more cowbell... I mean, more caching</span></div>
          </div>
        </div>

        {/* Fun Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center justify-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
            <Code className="h-4 w-4" />
            <span>Blame the intern</span>
          </div>
          <div className="flex items-center justify-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
            <Coffee className="h-4 w-4" />
            <span>Need more coffee</span>
          </div>
          <div className="flex items-center justify-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
            <Wrench className="h-4 w-4" />
            <span>Works on my machine™</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <p className="text-muted-foreground">
            While I debug this issue, how about we navigate somewhere that actually exists?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to Lobby
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 border border-input bg-background px-6 py-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Code className="h-4 w-4" />
              Read About Spaces vs Tabs
            </Link>
          </div>
        </div>

        {/* Footer Joke */}
        <div className="text-xs text-muted-foreground border-t pt-4">
          <p>
            P.S. This 404 page was built with 0% AI assistance and 100% coffee-fueled debugging sessions.
            <br />
            <span className="italic">No z/TPF systems were harmed in the making of this error.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
