import { useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ContactSection from './LetsWork';
import FooterSection from './Footer';
export interface Project {
  id: string;
  number: string;
  title: string;
  type: string;
  url: string;
  location: string;
  year: string;
contributions: string[];
  description: string;
  fullOverview?: string;
overview: string[];
  client: string;
  role: string;
  status: string;

  bgGradient: string;
  image: string;

  fullDescription: string;
  technologies: string[];

  metrics?: string;
}

// 5 Sample Project Data
export const PROJECTS_DATA: Project[] = [
  {
    id: 'bigplay',
    number: '01',
    title: 'BIGPLAY',
    type: 'WEBSITE',
    url: 'bigplay.gg',
    location: 'Kazakhstan',
    year: '2024 - H.D.',
      client: 'BIGPLAY',
  role: 'Frontend Developer',
  status: 'Completed',
   description:
    'BIGPLAY is a premier esports tournament platform designed to make competitive gaming easier to discover, manage, and participate in.',
overview: [
  'BIGPLAY is an esports platform focused on competitive gaming, tournament discovery, and player engagement. The experience is designed to make it easy for players to discover tournaments, follow competitions, and track their progress.',
  'The project required a strong focus on performance, responsive interfaces, reusable components, and clear information architecture. Because users interact with the platform around live competitions, the interface needs to remain fast, intuitive, and reliable.',
],
  fullOverview:
    'The platform brings tournament discovery, matchmaking, leaderboards, and live gaming experiences into one streamlined interface.',
contributions: [
  'Built responsive tournament interfaces focused on fast navigation and clear competition flows.',
  'Developed reusable React and TypeScript components to keep tournament, leaderboard, and player interfaces consistent.',
  'Integrated API data to display dynamic tournament, player, and competition information.',
  'Designed interactive UI states for matchmaking, tournament progress, leaderboards, and live updates.',
  'Optimized layouts and assets for a smoother experience across desktop, tablet, and mobile devices.',
  'Implemented reusable styling patterns with Tailwind CSS to speed up development and maintain visual consistency.',
],

    bgGradient: 'from-[#1a2d6d] via-[#1f3a8a] to-[#2563eb]',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
    fullDescription:
      'BIGPLAY is a premier esports tournament platform offering automated matchmaking, yearly prize pools, custom leaderboards, and live game streaming integrations.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'WebSockets'],
    metrics: '500K+ Active Gamers',
    
  },
  {
    id: 'mega',
    number: '02',
    title: 'MEGA',
    type: 'WEBSITE',
    url: 'mega.kz',
   
    location: 'MEGA malls · Kazakhstan',
    year: '2023',
         client: 'MEGA',
  role: 'Frontend Developer',
  status: 'Completed',
  overview: [
  'MEGA is a digital platform for a major shopping mall network, helping visitors discover stores, promotions, services, and events in one place. The experience connects the physical shopping environment with a modern digital interface.',
  'The project focuses heavily on discoverability and usability. Visitors need to find relevant stores, offers, and information quickly, so the interface relies on clear navigation, strong visual hierarchy, responsive layouts, and dynamic content.',
],
   description:
    'MEGA is a premier esports tournament platform designed to make competitive gaming easier to discover, manage, and participate in.',
contributions: [
  'Built responsive shopping mall interfaces that make stores, promotions, and locations easy to discover.',
  'Created reusable React components for store directories, promotional sections, and content-driven pages.',
  'Integrated API-driven content so mall information and promotions can be displayed dynamically.',
  'Designed intuitive navigation patterns to help users quickly find stores, offers, and important mall information.',
  'Optimized responsive layouts and image handling for a consistent experience across different screen sizes.',
  'Focused on accessibility, visual hierarchy, and clear calls to action throughout the experience.',
],
  fullOverview:
    'The platform brings tournament discovery, matchmaking, leaderboards, and live gaming experiences into one streamlined interface.',

    bgGradient: 'from-[#1e2356] via-[#28328c] to-[#3b49df]',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80',
    fullDescription:
      'Official digital hub for Kazakhstan\'s largest shopping mall network. Features store directories, live promotions, loyalty programs, and digital gift card purchasing.',
    technologies: ['Next.js', 'Tailwind CSS', 'GraphQL', 'PostgreSQL'],
    metrics: '2M+ Monthly Visitors',
  },
  {
    id: 'tanda',
    number: '03',
    title: 'TANDA',
    type: 'WEBSITE',
    url: 'tanda.kg',
    location: 'Kyrgyzstan',
    year: '2023',
    overview: [
  'MEGA is a digital platform for a major shopping mall network, helping visitors discover stores, promotions, services, and events in one place. The experience connects the physical shopping environment with a modern digital interface.',
  'The project focuses heavily on discoverability and usability. Visitors need to find relevant stores, offers, and information quickly, so the interface relies on clear navigation, strong visual hierarchy, responsive layouts, and dynamic content.',
],
         client: 'TANDA',
  role: 'Frontend Developer',
  status: 'Completed',
   description:
    'TANDA is a premier esports tournament platform designed to make competitive gaming easier to discover, manage, and participate in.',
contributions: [
  'Built responsive e-commerce interfaces focused on making product discovery and purchasing straightforward.',
  'Developed reusable product, category, cart, and checkout components with React.',
  'Integrated payment and API flows to support dynamic products, orders, and customer interactions.',
  'Implemented mobile-first layouts to create a smooth shopping experience on smaller screens.',
  'Improved product browsing with clear categories, visual hierarchy, and intuitive navigation.',
  'Optimized UI interactions and loading states to make the shopping experience feel faster and more responsive.',
],
  fullOverview:
    'The platform brings tournament discovery, matchmaking, leaderboards, and live gaming experiences into one streamlined interface.',

    bgGradient: 'from-[#581c38] via-[#831843] to-[#be185d]',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
    fullDescription:
      'A modern e-commerce mobile and web platform designed for local fashion retailers, enabling seamless localized delivery and instant digital payments.',
    technologies: ['React Native', 'React', 'Tailwind CSS', 'Stripe'],
    metrics: '150+ Partner Brands',
  },
  {
    id: 'cyberhub',
    number: '04',
    title: 'CYBERHUB',
    type: 'WEBSITE',
    url: 'cyberhub.io',
    location: 'Uzbekistan',
    year: '2022',
         client: 'CYBERHUB',
  role: 'Frontend Developer',
  status: 'Completed',
  overview: [
  'CYBERHUB is a cybersecurity platform designed to give teams a centralized view of security activity, threats, vulnerabilities, and system alerts. The interface turns complex security information into dashboards that are easier to understand and act on.',
  'Because security platforms can contain large amounts of information, the project places emphasis on information hierarchy, data visualization, responsive layouts, and clear alert states. The goal is to help users identify important issues without being overwhelmed by the interface.',
],
   description:
    'CYBERHUB is a premier esports tournament platform designed to make competitive gaming easier to discover, manage, and participate in.',
contributions: [
  'Built data-focused dashboard interfaces for displaying security events, alerts, and system activity.',
  'Created reusable React and TypeScript components for dashboards, monitoring views, and data visualizations.',
  'Integrated API data to present dynamic security information in a clear and actionable format.',
  'Designed information hierarchies that help users quickly identify important alerts and system changes.',
  'Optimized complex dashboard layouts for different screen sizes without sacrificing usability.',
  'Focused on performance and reusable architecture to keep the interface maintainable as the product grows.',
],
  fullOverview:
    'The platform brings tournament discovery, matchmaking, leaderboards, and live gaming experiences into one streamlined interface.',

    bgGradient: 'from-[#064e3b] via-[#047857] to-[#10b981]',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
    fullDescription:
      'Cybersecurity platform providing enterprise level threat intelligence, vulnerability monitoring dashboards, and real-time security alerts.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'D3.js', 'Python API'],
    metrics: '99.99% Threat Prevention',
  },
  {
    id: 'fintech',
    number: '05',
    title: 'NEXUS BANK',
    type: 'WEBSITE',
    url: 'nexus.bank',
    location: 'Global Hub',
    year: '2022',
         client: 'CYBERHUB',
  role: 'Frontend Developer',
  status: 'Completed',
   description:
    'CYBERHUB is a premier esports tournament platform designed to make competitive gaming easier to discover, manage, and participate in.',
contributions: [
  'Built a modern banking interface focused on making financial information easy to understand and navigate.',
  'Developed reusable React and TypeScript components for accounts, transactions, wallets, and financial dashboards.',
  'Integrated API-driven data to display dynamic balances, transactions, and account information.',
  'Designed clear interaction flows for transfers, payments, and other key financial actions.',
  'Created responsive layouts that maintain usability across desktop, tablet, and mobile devices.',
  'Focused on clear visual hierarchy, meaningful feedback states, and a trustworthy financial interface.',
],
overview: [
  'NEXUS BANK is a modern digital banking platform designed around everyday financial management, including accounts, transactions, transfers, and digital wallets.',
  'The project focuses on creating a trustworthy and straightforward financial experience. Important information needs to be immediately visible while actions such as transfers and payments should feel clear, predictable, and easy to complete across different devices.',
],
  fullOverview:
    'The platform brings tournament discovery, matchmaking, leaderboards, and live gaming experiences into one streamlined interface.',

    bgGradient: 'from-[#78350f] via-[#b45309] to-[#f59e0b]',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80',
    fullDescription:
      'Next-generation neo-banking portal featuring multi-currency wallets, instant cross-border transfers, and automated crypto asset management.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Ethers.js'],
    metrics: '$1B+ Processed Volume',
  },
];


const SelectedProjectsHeader = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [viewMode, setViewMode] = useState('GRID');

  return (
    <>
    <motion.section
  className="bg-[#F8F8F6] pt-25 md:pt-40 dark:bg-[#0D0D0D] text-neutral-900 dark:text-[#E5E5E0] min-h-screen p-8 md:p-4 font-sans flex flex-col justify-between"
>
      <div>
        {/* Top Header Label */}
        <motion.div
        initial={{ opacity: 0, y: -15 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  }}
        className="flex items-center gap-4 text-xs tracking-[0.2em] text-[#ff5500] font-mono border-b border-neutral-200 dark:border-neutral-800 pb-4 mb-12 uppercase">
          <span>01</span>
          <span>Selected Projects</span>
        </motion.div>

        {/* Main Title & Circle Decorative Element */}
        <div className="flex justify-between items-start mb-5">
          <motion.h1
          initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1,
    delay: 0.15,
    ease: [0.22, 1, 0.36, 1],
  }}
           style={{fontFamily:"'Bebas Neue', sans-serif"}}  
           className="text-7xl md:text-9xl font-black tracking-wide leading-none text-neutral-900 dark:text-white font-sans uppercase">
            Work
          </motion.h1>

         
        </div>

        {/* Description & Stats Grid */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          {/* Paragraph Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    delay: 0.4,
    ease: [0.22, 1, 0.36, 1],
  }}
          className="max-w-xl text-neutral-600 dark:text-neutral-400 text-medium md:text-xl leading-6 font-normal">
           
            Eight products from Kazakhstan and Kyrgyzstan: an esports platform, 
            a marketplace, a mall network, a govtech vendor, a paint factory, 
            a microfinance company and two mobile apps.
          </motion.p>

          {/* Stats Metadata */}
          <motion.div 
           initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    delay: 0.5,
    ease: [0.22, 1, 0.36, 1],
  }}
          className="grid grid-cols-3 gap-10 text-xs font-mono uppercase tracking-wider">
            <div>
              <span className="text-neutral-500 dark:text-neutral-500 block mb-2">Projects</span>
              <span className="text-neutral-900 dark:text-white text-base font-normal">9</span>
            </div>
            <div>
              <span className="text-neutral-500 dark:text-neutral-500 block mb-2">Years</span>
              <span className="text-neutral-900 dark:text-white text-base font-normal">2022 — 2026</span>
            </div>
            <div>
              <span className="text-neutral-500 dark:text-neutral-500 block mb-2">Role</span>
              <span className="text-neutral-900 dark:text-white text-base font-normal">Frontend</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filter Tabs & View Switcher Controls */}
    <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    delay: 0.65,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-wrap justify-between items-center gap-4"
>
  {/* Category Filters */}
  <div className="flex flex-wrap items-center gap-3 text-xs font-mono tracking-widest">
    {["WEBSITES"].map((category) => (
      <button
        key={category}
        onClick={() => setActiveCategory(category)}
        className={`px-5 py-2 rounded-full border transition-all duration-200 ${
          activeCategory === category
            ? "bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-black dark:border-white font-bold"
            : "bg-transparent text-neutral-500 dark:text-neutral-400 border-neutral-300 dark:border-neutral-800 hover:border-neutral-500 dark:hover:border-neutral-600"
        }`}
      >
        {category}
      </button>
    ))}
  </div>

  {/* Grid/List View Controls */}
  <div className="flex items-center bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-full p-1 text-xs font-mono tracking-widest">
    {["GRID", "LIST"].map((mode) => (
      <button
        key={mode}
        onClick={() => setViewMode(mode)}
        className={`px-5 py-1.5 rounded-full transition-all duration-200 ${
          viewMode === mode
            ? "bg-transparent text-neutral-900 dark:text-white border border-neutral-900 dark:border-white font-bold"
            : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
        }`}
      >
        {mode}
      </button>
    ))}
  </div>
</motion.div>




<motion.section
  className="bg-[#F8F8F6] dark:bg-[#0D0D0D] min-h-screen py-16  font-sans text-zinc-900 dark:text-[#E5E5E0]"
> 
      <div
  className={`max-w-8xl mx-auto ${
    viewMode === "GRID"
      ? "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-18"
      : "flex flex-col gap-10"
  }`}
>
        {PROJECTS_DATA.map((project) => (
          <Link
             key={project.id}
    to={`/work/${project.id}`}
    className="block"
          >
          <motion.article
  key={project.id}
  className={`group cursor-pointer ${
  viewMode === "GRID"
    ? "flex flex-col"
    : "flex flex-col md:flex-row gap-6 md:gap-8 border-b border-zinc-200 dark:border-zinc-800 pb-10"
}`}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  }}
>
            {/* Card Background Container */}
            <div
             className={`relative rounded-2xl bg-gradient-to-br ${project.bgGradient} p-6 sm:p-8 flex items-center justify-center overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-[1.01] ${
  viewMode === "GRID"
    ? "aspect-[16/10] w-full"
    : "w-full md:w-[360px] aspect-[16/10] shrink-0"
}`}
            >
              {/* Top-left Badge */}
              <span className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-black/40 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded">
                {project.url}
              </span>

              {/* Browser Window Mockup */}
              <div className="w-[88%] h-[82%] bg-zinc-900 rounded-lg shadow-2xl overflow-hidden border border-white/10 flex flex-col transform translate-y-2 group-hover:translate-y-1 transition-transform duration-500 ease-out">
                {/* Browser Top Bar */}
                <div className="h-6 bg-[#212124] px-3 flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                </div>

                {/* Screenshot Content */}
                <div className="relative w-full h-full bg-zinc-800">
                  <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Project Details Below Card */}
            <div
  className={`flex flex-col space-y-2 ${
    viewMode === "GRID"
      ? "mt-4"
      : "justify-center flex-1 md:py-4"
  }`}
>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white uppercase">
                  {project.title}
                </h3>
               <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500 tracking-wider">
                  {project.year} - H.B
                </span>
              </div>

             <p className="text-xs text-zinc-500 dark:text-zinc-400 tracking-wide font-medium">
                {project.url} . {project.location}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.map((tag, idx) => (
                  <span
                    key={idx}
                   className="px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 text-[11px] font-medium tracking-wide bg-white/30 dark:bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
          </Link>
        ))}
      </div>
    </motion.section>






    
    </motion.section>
    <ContactSection />
    <FooterSection />
</>
  );
};

export default SelectedProjectsHeader;