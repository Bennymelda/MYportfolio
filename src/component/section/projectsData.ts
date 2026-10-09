export interface Project {
  id: string;
  number: string;
  title: string;
  type: string;
  url: string;
  location: string;
  year: string;
  client?: string;
  role?: string;
  status?: string;
  bgGradient: string;
  image: string;
  description?: string;
  fullOverview?: string;
  overview?: string[];
  contributions?: string[];
  fullDescription?: string;
  technologies: string[];
  metrics?: string;
}

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
    year: '2026',
    client: 'MEGA',
    role: 'Frontend Developer',
    status: 'Completed',
    description:
      'MEGA is a shopping mall network platform designed to help visitors discover stores, promotions, services, and events in one place.',
    overview: [
      'MEGA is a digital platform for a major shopping mall network, helping visitors discover stores, promotions, services, and events in one place. The experience connects the physical shopping environment with a modern digital interface.',
      'The project focuses heavily on discoverability and usability. Visitors need to find relevant stores, offers, and information quickly, so the interface relies on clear navigation, strong visual hierarchy, responsive layouts, and dynamic content.',
    ],
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
    year: '2025',
    client: 'TANDA',
    role: 'Frontend Developer',
    status: 'Completed',
    description:
      'TANDA is a modern commerce platform focused on making regional shopping more accessible, faster, and intuitive.',
    overview: [
      'TANDA connects modern boutique shops with online shoppers. The solution includes customizable store management, dynamic filters for category browsing, local payment integrations, and instant order notifications.',
      'The project emphasizes mobile-first product discovery, trusted checkout flows, and clean account and catalog UX for local retail growth.',
    ],
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
    year: '2025',
    client: 'CYBERHUB',
    role: 'Frontend Developer',
    status: 'Completed',
    description:
      'CYBERHUB is a cybersecurity platform designed to turn complex alerts into clear operational visibility.',
    overview: [
      'CYBERHUB is a cybersecurity platform designed to give teams a centralized view of security activity, threats, vulnerabilities, and system alerts. The interface turns complex security information into dashboards that are easier to understand and act on.',
      'Because security platforms can contain large amounts of information, the project places emphasis on information hierarchy, data visualization, responsive layouts, and clear alert states.',
    ],
    bgGradient: 'from-[#064e3b] via-[#047857] to-[#10b981]',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
    fullDescription:
      'Cybersecurity platform providing enterprise level threat intelligence, vulnerability monitoring dashboards, and real-time security alerts.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'D3.js', 'Python API'],
    metrics: '99.99% Threat Prevention',
  },
  {
    id: 'nexus',
    number: '05',
    title: 'NEXUS BANK',
    type: 'WEBSITE',
    url: 'nexus.bank',
    location: 'Global Hub',
    year: '2024',
    client: 'NEXUS BANK',
    role: 'Frontend Developer',
    status: 'Completed',
    description:
      'NEXUS BANK is a digital finance platform built to simplify account management and secure transfers.',
    overview: [
      'NEXUS BANK is a modern digital banking platform designed around everyday financial management, including accounts, transactions, transfers, and digital wallets.',
      'The project focuses on creating a trustworthy and straightforward financial experience. Important information needs to be immediately visible while actions such as transfers and payments should feel clear, predictable, and easy to complete across different devices.',
    ],
    bgGradient: 'from-[#78350f] via-[#b45309] to-[#f59e0b]',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80',
    fullDescription:
      'Next-generation neo-banking portal featuring multi-currency wallets, instant cross-border transfers, and automated crypto asset management.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Ethers.js'],
    metrics: '$1B+ Processed Volume',
  },
];
