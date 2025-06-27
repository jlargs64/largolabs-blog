import type { Metadata } from 'next';
import Link from 'next/link';
import { Activity, Beaker, Brain, Code, FileText, Monitor, Users } from 'lucide-react';

import { generateMetadata as generateOpenGraphMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateOpenGraphMetadata({
  title: 'Largo Labs → Lobby',
  description: "Welcome to Largo Labs - Justin Largo's research facility featuring software engineering projects, technical blog posts, and professional portfolio.",
  path: '/',
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header with Lab Branding */}
      <div className="border-b border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-3">
            <Beaker className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">LARGO LABS</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">Research & Development Facility</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Main Introduction Panel */}
        <section className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
          <div className="flex items-start space-x-4 mb-6">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
              <Monitor className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                Subject: Justin Largo
              </h2>
              <p className="text-slate-600 dark:text-slate-400 font-mono text-sm mb-4">
                CLASSIFICATION: Software Engineer, Architect, Tester, and Inventor
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Welcome to the research facility. Current focus areas include automated systems, 
                AI integration, and microservice architectures. All experiments are conducted 
                within safe parameters.
              </p>
            </div>
          </div>
        </section>

        {/* Lab Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Research Projects Module */}
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded">
                <Brain className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Research Projects</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Current experiments in automation, AI, and distributed systems.
            </p>
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded p-3 font-mono text-sm text-slate-600 dark:text-slate-400">
              STATUS: Development in progress...<br />
              NEXT: Project documentation upload
            </div>
          </div>

          {/* Lab Notes Module */}
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded">
                <FileText className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Lab Notes</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Research findings, technical discussions, and experiment logs.
            </p>
            <Link 
              href="/blog"
              className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
            >
              <Code className="h-4 w-4" />
              <span>Access Lab Notes</span>
            </Link>
          </div>
        </div>

        {/* System Status Panel */}
        <section className="bg-slate-900 dark:bg-slate-800 text-white rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Activity className="h-5 w-5 text-green-400" />
            <h3 className="text-lg font-semibold">System Status</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-sm">
            <div className="bg-slate-800 dark:bg-slate-700 rounded p-3">
              <div className="text-green-400 mb-1">● OPERATIONAL</div>
              <div className="text-slate-300">Core Systems</div>
            </div>
            <div className="bg-slate-800 dark:bg-slate-700 rounded p-3">
              <div className="text-blue-400 mb-1">● ACTIVE</div>
              <div className="text-slate-300">Research Mode</div>
            </div>
            <div className="bg-slate-800 dark:bg-slate-700 rounded p-3">
              <div className="text-yellow-400 mb-1">● STANDBY</div>
              <div className="text-slate-300">Collaboration Queue</div>
            </div>
          </div>
        </section>

        {/* Access Controls */}
        <section className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-5 w-5 text-slate-600 dark:text-slate-400" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Collaboration Access</h3>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Interested in joint research or have a project proposal? 
            Access the collaboration terminal below.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Initiate Contact Protocol
          </Link>
        </section>
      </div>
    </div>
  );
}
