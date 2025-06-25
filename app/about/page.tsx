import type { Metadata } from 'next';
import { ExperienceChart } from './experience-chart';

export const metadata: Metadata = {
  title: 'Largo Labs → About Me',
};

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <h2>interests in tech</h2>
      <p>
        Hey! I&apos;m Justin Largo. I&apos;m a well rounded software engineer
        with an emphasis in full stack web applications with a hint of cross
        platform deployments. My main languages are Python, Java,
        Javascript/Typescript, and Dart. I like to use either Django, FastAPI,
        Next.js, or Flutter for my applications.
      </p>
      <h2>experience</h2>
      <ExperienceChart />
      <h2>career</h2>
      <h3>research @ siena college</h3>
      <p>
        While I started learning how to program in middle school with Action
        Script and Flash Games, I formally started working as a software
        engineer in November of 2019. I was working on a research grant with my
        alma mater, Siena College on a secret AI related project for the
        Department of Defense and GE. The role had me building out user
        interfaces and other frontend related code in Java and Swing and allowed
        for me to get first hand experience in the SDLC.
      </p>
      <h3>backend developer internship @ ibm</h3>
      <p>
        After that, I started working for IBM and z/TPF as an intern in 2020
        where I helped write features for the Middleware & Security, Database,
        and Tooling squad. After that summary, they extended an offer post
        graduation to join IBM as well as work part-time throughout the school
        year on side projects for them. After graduating Siena College in May
        2021 with a degree in Computer Science and a minor in entrepreneurship,
        I joined IBM full-time as a software engineer.
      </p>
      <h3>software developer @ ibm </h3>
      <p>
        After another year with z/TPF, I was given an offer to join IBM&apos;s
        CIO organization in their network security team. This was my first
        transition to DevOps and AI as an ML Engineer on the product offering
        Virginia or AskiCDNet as it later became. The goal for Virginia was to
        use watsonx&apos;s generative ai and natural language capabilities to
        build an AI assistant that could easily fix networking issues for IBM
        Consultants. It worked out pretty well for my scaffolding DevOps
        pipelines with IBM&apos;s Cirrus CI/CD Solution that&apos;s built on
        OpenShift. I also wrote quite a bit of Java and Spring Boot REST APIs
        used to communicate with watsonx, Service Now, and Palo Alto Prisma
        APIs.
      </p>
      <h3>technical architect @ ibm </h3>
      <p>
        After a year working as a ML Engineer, a major organizational change
        occurred where my team was moved from the CIO to Consulting. A perk of
        this, was that I was named to become the Technical Architect for
        AskiCDNet which gave me lots of experience with technical leadership,
        hiring engineers, and working with cross functional teams. My biggest
        contribution as the Technical Architect was building a RAG Pipeline from
        scratch with it&apos;s own proprietary web crawler. After 2 years of
        development, we developed a solid assistant with 99% uptime and a 90%
        reduction in sev 1 incidents. But as consulting goes, our project came
        to an end which led me to another interesting role within IBM.
      </p>
      <h3>qa/test developer @ ibm</h3>
      <p>
        In October of 2024, I joined IBM Z again under the Customer Test team.
        As a member of Customer Test and z/PET (Platform Evaluation Test), my
        role is building out automated tests with Galasa and Jenkins to make
        sure all z/OS features work in a customer simulated environment.
        Additionally, I will be leveraging my generative AI experience to become
        the new z/OS AI testing focal in z/PET.
      </p>
      <h2>inventing</h2>
      <p>
        At IBM, I was involved in the patenting process and have a few to my
        name. However, only one of them is currently published. If you want to
        see my inventions as they come, you can find them{' '}
        <a
          target="_blank"
          rel="noopener"
          href="https://patents.google.com/?inventor=Justin+Paul+Largo"
        >
          here
        </a>
        .
      </p>
      <p>
        If you want a quick list of my published work (not complete due to legal
        reasons):
      </p>
      <ul>
        <li>Contextual searches in software development environments</li>
      </ul>
      <h2>hobbies</h2>
      <p>
        If you want to talk hobbies, I have a few that I gravitate to. I&apos;m
        a pretty active person, so I like to lift weights or train MMA with an
        emphasis on Brazilian Jiu Jitsu. I&apos;ve been doing that for a few
        years and I&apos;m currently a blue belt with half a dozen competitions
        under my belt.
      </p>
      <p>
        I also really like spending time with my dog and my girlfriend Nereida.
        This usually ends up walking, cooking, playing video games, building
        puzzles or legos together. Also shout out to the occasional trashy
        reality TV show (looking at you 90 day fiance).
      </p>
    </div>
  );
}
