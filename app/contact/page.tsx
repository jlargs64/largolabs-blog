import { Github, Linkedin, Radio, Shield, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Largo Labs → Collaboration Terminal',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header with Lab Branding */}
      <div className="border-b border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-3">
            <Radio className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">COLLABORATION TERMINAL</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">External Communication Interface</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Main Terminal Interface */}
        <section className="max-w-2xl mx-auto">
          {/* Status Panel */}
          <div className="bg-slate-900 dark:bg-slate-800 text-white rounded-lg p-6 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-mono text-sm">COMMUNICATION_STATUS: ONLINE</span>
            </div>
            <div className="font-mono text-xs text-slate-400 space-y-1">
              <div>├── Collaboration Queue: <span className="text-yellow-400">OPEN</span></div>
              <div>├── Response Time: <span className="text-green-400">~24 HOURS</span></div>
              <div>└── Security Level: <span className="text-blue-400">PUBLIC_CHANNELS</span></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  Initiate Collaboration Protocol
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Research partnerships and project collaborations welcome. 
                  Please utilize the secure communication channels below to establish contact.
                </p>
              </div>
            </div>

            {/* Communication Channels */}
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 flex items-center space-x-2">
                <Shield className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                <span>Authorized Communication Channels</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://github.com/jlargs64"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg p-4 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <Github className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                    <span className="font-medium text-slate-900 dark:text-slate-100">GitHub Terminal</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">
                    ENDPOINT: github.com/jlargs64
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
                    Repository access, code collaboration, issue tracking
                  </p>
                </a>

                <a
                  href="https://www.linkedin.com/in/justin-largo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg p-4 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <Linkedin className="h-6 w-6 text-blue-600" />
                    <span className="font-medium text-slate-900 dark:text-slate-100">Professional Network</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">
                    ENDPOINT: linkedin.com/in/justin-largo
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
                    Business partnerships, career opportunities, networking
                  </p>
                </a>
              </div>
            </div>

            {/* Research Areas */}
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-6">
              <h4 className="font-mono text-sm text-slate-600 dark:text-slate-400 mb-3">
                ACTIVE_RESEARCH_AREAS:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="space-y-2">
                  <div className="font-mono text-blue-600 dark:text-blue-400">• Automation Systems</div>
                  <div className="font-mono text-purple-600 dark:text-purple-400">• AI Integration</div>
                  <div className="font-mono text-green-600 dark:text-green-400">• Microservice Architecture</div>
                </div>
                <div className="space-y-2">
                  <div className="font-mono text-yellow-600 dark:text-yellow-400">• Full-Stack Development</div>
                  <div className="font-mono text-red-600 dark:text-red-400">• Cloud Infrastructure</div>
                  <div className="font-mono text-indigo-600 dark:text-indigo-400">• Developer Tooling</div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
              <div className="text-sm">
                <p className="text-yellow-800 dark:text-yellow-200 font-medium mb-1">
                  Security Protocol Notice
                </p>
                <p className="text-yellow-700 dark:text-yellow-300">
                  All communications are logged for research purposes. Please follow standard 
                  collaboration protocols when sharing proprietary or sensitive information.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}