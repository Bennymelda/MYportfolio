
import {Link} from "react-router-dom";
// TypeScript Interfaces
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

export const SelectedWorkSection: React.FC = () => {


  return (
  <section className="bg-[#F8F8F6] dark:bg-[#0a0a0a] text-neutral-900 dark:text-white min-h-screen py-12 px-4 md:px-12 font-sans selection:bg-orange-500 selection:text-black">

    {/* Header */}
    <div className="max-w-7xl mx-auto mb-8 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4">

      <h2 className="text-xs sm:text-sm tracking-[0.25em] text-orange-500 uppercase font-semibold flex items-center gap-2">
        <span className="text-orange-500">03</span>
        SELECTED WORK — 2022 / 2026
      </h2>

      <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
    </div>

    {/* Horizontal Scroll Container */}
    <div className="flex scrollbar-hide flex-col md:flex-row gap-6 md:overflow-x-auto pb-8 pt-4 md:snap-x md:snap-mandatory">

      {PROJECTS_DATA.map((project) => (
        <Link
          key={project.id}
          to={`/work/${project.id}`}
          className={`snap-center flex-shrink-0 w-[85vw] sm:w-[480px] lg:w-[540px] h-[360px] sm:h-[400px] rounded-2xl bg-gradient-to-br ${project.bgGradient} p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-black/50 group border border-black/10 dark:border-white/10 relative overflow-hidden`}
        >

          {/* Website Frame Mockup */}
          <div className="w-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-black/60 dark:border-white/10 transition-transform duration-500 group-hover:-translate-y-1">

            {/* Browser Bar */}
            <div className="bg-neutral-200/80 dark:bg-neutral-800/80 px-4 py-2.5 flex items-center gap-2 border-b border-neutral-300/70 dark:border-neutral-700/50">

              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>

              <div className="mx-auto bg-white/80 dark:bg-neutral-900/60 rounded-md px-3 py-0.5 text-[10px] text-neutral-500 dark:text-neutral-400 font-mono tracking-wider border border-neutral-300/50 dark:border-neutral-700/30">
                {project.url}
              </div>

            </div>

            {/* Website Preview Image */}
            <div className="h-36 sm:h-44 w-full relative overflow-hidden bg-neutral-100 dark:bg-neutral-950">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
              />

            </div>
          </div>

          {/* Card Bottom Meta Content */}
          <div className="mt-4 flex items-end justify-between relative z-10">

            <div>

              <span className="text-xs font-mono font-semibold text-neutral-300 tracking-wider">
                {project.number} — {project.type}
              </span>

              <h3
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                className="text-3xl sm:text-4xl font-extrabold tracking-wide text-white mt-0.5 uppercase"
              >
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

              {/* Arrow */}
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white group-hover:bg-orange-500 group-hover:text-black transition-colors duration-300">
                ↗
              </span>

            </div>

          </div>

        </Link>
      ))}

    </div>

  </section>
);
};

export default SelectedWorkSection;