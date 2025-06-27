import { Award, Calendar, FileUser, Heart, Monitor, Target } from 'lucide-react';
import type { Metadata } from 'next';
import { ExperienceChart } from './experience-chart';

export const metadata: Metadata = {
  title: 'Largo Labs → Subject Profile',
};

type Experience = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const experiences: Experience[] = [
  {
    title: 'QA/Test Developer @ IBM, Durham, NC (10/2024 - Present)',
    description:
      'Developed automation of previously manual regression tests using Galasa, Ansible, and Jenkins, boosting tester productivity and lowering testing costs by 88%. Engineered a Django + HTMX + Tailwind dashboard to aggregate and visualize z/OSMF API data. Authored an inner-sourced Python wrapper for IBM\'s z Workload Scheduler. Promoted enterprise-wide AI adoption by creating use cases for Watsonx Code Assistant.',
    icon: Award,
  },
  {
    title: 'Technical Architect @ IBM, Durham, NC (12/2023 - 10/2024)',
    description:
      'Spearheaded development and integration of AskiCDNet for IBM Client Delivery Network (iCDNet). Implemented generative LLM-powered RAG Q&A features using Langchain, Milvus, watsonx.data, and watsonx.ai. Led migration from a Java monolith to Python-based microservices, enhancing scalability and maintainability. Designed secure, scalable IBM Cloud architectures for digital workers. Mentored peers in best practices and ensured compliance with IBM security standards.',
    icon: Award,
  },
  {
    title: 'ML Engineer @ IBM, Raleigh, NC (12/2022 - 12/2023)',
    description:
      'Designed and implemented CI/CD pipelines for AskiCDNet, a digital worker for iCDNet, leveraging Watsonx Assistant. Developed and maintained a Java Spring Boot REST API middleware for customer support tasks, integrating Watsonx Assistant, ServiceNow, and other third-party APIs. Improved request latency by 40% through strategic caching and optimized ServiceNow query performance.',
    icon: Award,
  },
  {
    title: 'Software Developer @ IBM Z Software (7/2021 - 12/2022)',
    description:
      'Designed and developed REST APIs using Node.js and Express.js, enabling seamless integration with z/TPF systems. Created a VSCode extension for the z/TPF Learning Platform, providing an innovative solution for remote z/TPF development in C/C++. Implemented unit tests and adhered to best practices to maintain high code quality, ensuring reliability and stability of the software. Facilitated team retrospectives in agile meetings, promoting a culture of continuous improvement.',
    icon: Award,
  },
  {
    title: 'Backend Dev Intern @ IBM Z Software (6/2020 - 7/2021)',
    description:
      'Helped Middleware & Security, Database, and Tooling squads. Extended post-grad offer and joined full-time after graduating in May 2021.',
    icon: Award,
  },
  {
    title: 'Research @ Siena College (11/2019 - 4/2020)',
    description:
      'Began formal software engineering in Nov 2019 on a DOD/GE AI grant—building Java/Swing UIs and learning the SDLC firsthand.',
    icon: Award,
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header with Lab Branding */}
      <div className="border-b border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-3">
            <FileUser className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">SUBJECT PROFILE</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">Biographical & Research Data</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 space-y-8">
        {/* Subject Classification */}
        <section className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
          <div className="flex items-start space-x-4 mb-6">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
              <Monitor className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                SUBJECT: Justin Largo
              </h2>
              <p className="text-slate-600 dark:text-slate-400 font-mono text-sm mb-4">
                CLASSIFICATION: Senior Research Engineer
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Well-rounded software engineer specializing in full-stack web applications and 
                cross-platform deployments. Primary research areas include automated systems, 
                AI integration, and distributed architectures. Current tech stack: Python, Java, 
                JavaScript/TypeScript with Django, FastAPI, and Next.js frameworks.
              </p>
            </div>
          </div>
        </section>

        {/* Research Timeline */}
        <section className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded">
              <Calendar className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Experience Metrics</h3>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mb-6">
            <ExperienceChart />
          </div>
        </section>

        {/* Research History */}
        <section className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded">
              <Target className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Research Timeline</h3>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, idx) => {
              return (
                <div
                  key={'experience-' + idx}
                  className="border-l-2 border-slate-200 dark:border-slate-600 pl-6 pb-6 relative"
                >
                  <div className="absolute -left-2 top-1 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                    <h4 className="font-mono text-sm text-blue-600 dark:text-blue-400 mb-2">
                      RESEARCH PERIOD #{experiences.length - idx}
                    </h4>
                    <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-3">{exp.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Patent Research */}
        <section className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded">
              <Award className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Patent Research</h3>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Research contributions documented in patent applications. View published work{' '}
              <a
                href="https://patents.google.com/?inventor=Justin+Paul+Largo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                in external database
              </a>
              .
            </p>
            <div className="space-y-2 text-sm font-mono text-slate-600 dark:text-slate-400">
              <div>• Contextual searches in software development environments</div>
              <div>• Implementing technical documentation based on technical entitlement</div>
            </div>
          </div>
        </section>

        {/* Personal Research */}
        <section className="bg-slate-900 dark:bg-slate-800 text-white rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Heart className="h-5 w-5 text-red-400" />
            <h3 className="text-lg font-semibold">Personal Research Interests</h3>
          </div>
          <div className="bg-slate-800 dark:bg-slate-700 rounded p-4 font-mono text-sm">
            <div className="text-green-400 mb-2">RECREATIONAL_ACTIVITIES:</div>
            <div className="text-slate-300 space-y-1">
              <div>├── Brazilian Jiu-Jitsu: <span className="text-blue-400">BLUE_BELT</span></div>
              <div>├── Physical Training: <span className="text-yellow-400">WEIGHTLIFTING</span></div>
              <div>├── Domestic Activities: <span className="text-purple-400">COOKING, GAMING, PUZZLES</span></div>
              <div>├── Companionship: <span className="text-pink-400">PARTNER + CANINE_UNIT</span></div>
              <div>└── Media Consumption: <span className="text-orange-400">REALITY_TV.BINGE_MODE</span></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}