/*
import React, { useState } from 'react';

// Types
export interface Project {
  id: string;
  number: string;
  title: string;
  type: string;
  url: string;
  client: string;
  location: string;
  year: string;
  role: string;
  status: string;
  bgGradient: string;
  image: string;
  description: string;
  fullOverview?: string;
  technologies: string[];
}

// Sample Data with detailed case study information
export const PROJECTS_DATA: Project[] = [
  {
    id: 'bigplay',
    number: '01',
    title: 'BIGPLAY',
    type: 'Website',
    url: 'Bigplay.gg',
    client: 'Bigplay.gg · Kazakhstan',
    location: 'Kazakhstan',
    year: '2024 — H.B.',
    role: 'Frontend developer @ Bigplay.gg',
    status: 'production',
    bgGradient: 'from-[#1a2d6d] via-[#1f3a8a] to-[#2563eb]',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    description:
      'An esports platform for mobile games: weekly PUBG Mobile and MLBB tournaments with a $30,000 yearly prize pool, plus media, ratings and polls.',
    fullOverview:
      'BIGPLAY was built from the ground up to support the fast-growing mobile esports community in Central Asia. The platform features automated tournament bracket generation, live streaming integrations, interactive user polls, real-time leaderboard statistics, and localized payment gateway options.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'WebSockets', 'GraphQL'],
  },
  {
    id: 'mega',
    number: '02',
    title: 'MEGA',
    type: 'Website',
    url: 'Mega.kz',
    client: 'MEGA malls · Kazakhstan',
    location: 'Kazakhstan',
    year: '2023',
    role: 'Lead Frontend Engineer',
    status: 'production',
    bgGradient: 'from-[#1e2356] via-[#28328c] to-[#3b49df]',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    description:
      'Digital infrastructure and interactive portal for Kazakhstan’s premier shopping center chain, serving millions of active shoppers.',
    fullOverview:
      'Designed and developed a fast multi-tenant portal serving several shopping centers across the country. Key features include dynamic store mapping, interactive event calendars, digital gift card purchasing, and unified brand search.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'PostgreSQL', 'Framer Motion'],
  },
  {
    id: 'tanda',
    number: '03',
    title: 'TANDA',
    type: 'Website',
    url: 'Tanda.kg',
    client: 'Tanda.kg · Kyrgyzstan',
    location: 'Kyrgyzstan',
    year: '2023',
    role: 'UI/UX Developer',
    status: 'production',
    bgGradient: 'from-[#581c38] via-[#831843] to-[#be185d]',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    description:
      'Modern fashion and home goods marketplace facilitating direct commerce between regional designers and local consumers.',
    fullOverview:
      'TANDA connects modern boutique shops with online shoppers. The solution includes customizable store management, dynamic filters for men/women apparel, local payment integrations, and instant order notifications.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'REST API', 'Redux Toolkit'],
  },
  {
    id: 'cyberhub',
    number: '04',
    title: 'CYBERHUB',
    type: 'Website',
    url: 'Cyberhub.io',
    client: 'Cyberhub · Uzbekistan',
    location: 'Uzbekistan',
    year: '2022',
    role: 'Frontend Architect',
    status: 'production',
    bgGradient: 'from-[#064e3b] via-[#047857] to-[#10b981]',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    description:
      'Enterprise cybersecurity analytics platform with real-time threat detection and security alert monitoring.',
    fullOverview:
      'A comprehensive security analytics dashboard built for enterprise IT teams to monitor live threats, analyze log feeds, inspect dynamic data charts, and manage system access policies.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'D3.js', 'WebSockets'],
  },
  {
    id: 'nexus',
    number: '05',
    title: 'NEXUS BANK',
    type: 'Website',
    url: 'Nexus.bank',
    client: 'Nexus Global · Financial',
    location: 'Global Hub',
    year: '2022',
    role: 'Senior Frontend Developer',
    status: 'production',
    bgGradient: 'from-[#78350f] via-[#b45309] to-[#f59e0b]',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    description:
      'Next-generation web portal for digital assets, instant international cross-border transfers, and multi-currency accounts.',
    fullOverview:
      'An ultra-fast fintech frontend providing real-time exchange rates, interactive balance analytics, secure payment routing, and full accessibility compliance across desktop and mobile browsers.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Web3.js'],
  },
];

// ----------------------------------------------------------------------
// Project Case Study Page Component (Matches the exact layout in Image 3)
// ----------------------------------------------------------------------
interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetailView: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans px-6 md:px-16 py-10 selection:bg-orange-500 selection:text-black">

      <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-neutral-800/80 pb-6 mb-12">
        <div className="flex items-center gap-3">
          <span className="text-orange-500 font-mono text-xs font-semibold">
            {project.number}
          </span>
          <span className="text-neutral-400 font-mono text-xs uppercase tracking-[0.2em]">
            CASE STUDY
          </span>
        </div>

      
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
        >
          <span className="text-orange-500 group-hover:-translate-x-1 transition-transform">←</span>
          <span>BACK TO PROJECTS</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto">

        <div className="relative mb-16">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 hidden md:flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border border-neutral-700 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>
          </div>

          <h1 className="text-6xl sm:text-8xl md:text-[11rem] font-black uppercase tracking-tighter leading-none text-white select-none">
            {project.title}
          </h1>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4 border-t border-neutral-900">

          <div className="lg:col-span-6">
            <p className="text-lg sm:text-2xl text-neutral-200 font-normal leading-relaxed tracking-tight">
              {project.description}
            </p>
            {project.fullOverview && (
              <p className="text-sm sm:text-base text-neutral-400 mt-6 leading-relaxed">
                {project.fullOverview}
              </p>
            )}
          </div>


          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-6">
            <div>
              <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">
                CLIENT
              </span>
              <p className="text-sm font-medium text-white">{project.client}</p>
            </div>

            <div>
              <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">
                YEAR
              </span>
              <p className="text-sm font-medium text-white">{project.year}</p>
            </div>

            <div>
              <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">
                ROLE
              </span>
              <p className="text-sm font-medium text-white">{project.role}</p>
            </div>

            <div>
              <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">
                TYPE
              </span>
              <p className="text-sm font-medium text-white">{project.type}</p>
            </div>

            <div>
              <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">
                STATUS
              </span>
              <p className="text-sm font-medium text-white lowercase">{project.status}</p>
            </div>

            <div>
              <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">
                WEBSITE LINK
              </span>
              <a
                href={`https://${project.url}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-orange-400 hover:underline inline-flex items-center gap-1"
              >
                {project.url} ↗
              </a>
            </div>
          </div>
        </div>


        <div className="mt-16 pt-8 border-t border-neutral-900">
          <span className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-4">
            TECH STACK & ARCHITECTURE
          </span>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono bg-neutral-900 border border-neutral-800 text-neutral-300 px-4 py-2 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>


        <div className="mt-16 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
          <div className="bg-neutral-800/80 px-4 py-3 flex items-center justify-between border-b border-neutral-700/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="bg-neutral-900 px-4 py-1 rounded text-xs text-neutral-400 font-mono">
              https://{project.url}
            </div>
            <div className="w-12"></div>
          </div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[450px] sm:h-[600px] object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// Main Work Gallery Section Component (Horizontal Cards List)
// ----------------------------------------------------------------------
export const SelectedWorkSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // If a project is selected, render the dedicated Case Study page
  if (activeProject) {
    return (
      <ProjectDetailView
        project={activeProject}
        onBack={() => setActiveProject(null)}
      />
    );
  }

  return (
    <section className="bg-[#0a0a0a] text-white min-h-screen py-12 px-4 md:px-12 font-sans selection:bg-orange-500 selection:text-black">

      <div className="max-w-7xl mx-auto mb-8 flex items-center justify-between border-b border-neutral-800 pb-4">
        <h2 className="text-xs sm:text-sm tracking-[0.25em] text-orange-500 uppercase font-semibold flex items-center gap-2">
          <span className="text-orange-500">03</span> SELECTED WORK — 2022 / 2026
        </h2>
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
      </div>


      <div className="flex gap-6 overflow-x-auto pb-8 pt-4 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900 snap-x snap-mandatory">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveProject(project)}
            className={`snap-center flex-shrink-0 w-[85vw] sm:w-[480px] lg:w-[540px] h-[360px] sm:h-[400px] rounded-2xl bg-gradient-to-br ${project.bgGradient} p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/50 group border border-white/10 relative overflow-hidden`}
          >

            <div className="w-full bg-neutral-900/90 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-white/10 transition-transform duration-500 group-hover:-translate-y-1">
              <div className="bg-neutral-800/80 px-4 py-2.5 flex items-center gap-2 border-b border-neutral-700/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto bg-neutral-900/60 rounded-md px-3 py-0.5 text-[10px] text-neutral-400 font-mono tracking-wider border border-neutral-700/30">
                  {project.url}
                </div>
              </div>

              <div className="h-36 sm:h-44 w-full relative overflow-hidden bg-neutral-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="mt-4 flex items-end justify-between relative z-10">
              <div>
                <span className="text-xs font-mono font-semibold text-neutral-300 tracking-wider">
                  {project.number} — {project.type.toUpperCase()}
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-0.5 uppercase">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-300 mt-1 font-medium">
                  {project.url} · {project.location}
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs font-mono text-neutral-300 block mb-2">
                  {project.year}
                </span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white group-hover:bg-orange-500 group-hover:text-black transition-colors duration-300">
                  ↗
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedWorkSections;
*/