import { motion } from 'framer-motion';
import  { useState } from 'react';


const servicesData = [
  {
    id: 1,
    number: '01',
    title: 'DESIGN TO CODE',
    description:
      'I turn Figma designs into responsive, production-ready interfaces with clean structure, thoughtful spacing and attention to detail across every screen size.',
    tags: ['FIGMA TO CODE', 'RESPONSIVE UI', 'UI DEVELOPMENT'],
  },
  {
    id: 2,
    number: '02',
    title: 'BUILD',
    description:
      'I build modern web experiences with React, TypeScript and Tailwind CSS, connecting them to APIs to create functional SaaS, e-commerce and dashboard experiences.',
    tags: ['REACT', 'TYPESCRIPT', 'API INTEGRATION'],
  },
  {
    id: 3,
    number: '03',
    title: 'INTERACTION',
    description:
      'I bring interfaces to life with Framer Motion, GSAP and Three.js, creating smooth animations, interactive elements and immersive 3D experiences.',
    tags: ['FRAMER MOTION', 'GSAP', 'THREE.JS'],
  },
];



export default function ServicesSection() {
  const [activeCardId, setActiveCardId] = useState(2); // Mobile click state (defaults to BUILD)

  return (
    <motion.section
    initial={{ y: 80, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, amount: 0.2 }}
   className="bg-[#F8F8F6] text-[#0d0d0d] dark:bg-[#0d0d0d] dark:text-white min-h-screen p-6 md:p-12 font-sans select-none">
      {/* Top Header Row with Divider */}
      <div className="relative border-t border-neutral-300 dark:border-neutral-800 border-b py-4 mb-12 flex justify-between items-center">
        <div className="flex items-center gap-3 text-xs tracking-[0.2em] font-mono">
          <span className="text-[#ff5500]">02</span>
          <span className="text-neutral-600 dark:text-neutral-400 uppercase">WHAT I CAN HELP WITH</span>
        </div>

        

      </div>

      {/* Grid Layout with Dividers */}
      <div className="grid grid-cols-1 md:grid-cols-3  mx-auto border-t border-b border-neutral-300 dark:border-neutral-800/80 md:border-t-0 md:border-b-0">
        {servicesData.map((service, index) => {
          const isMobileActive = activeCardId === service.id;

          return (
            <motion.div
            initial={{ y: 80, opacity: 0 }}
whileInView={{ y: 0, opacity: 1 }}
transition={{
  duration: 0.8,
  delay: index * 0.15,
}}
viewport={{ once: true, amount: 0.2 }}
              key={service.id}
              onClick={() => setActiveCardId(service.id)}
              className={`group relative p-8 md:p-10 cursor-pointer transition-all duration-300 flex flex-col justify-between
                /* Vertical borders between columns on desktop */
                ${index !== servicesData.length - 1 ? 'md:border-r md:border-neutral-300 dark:md:border-neutral-800' : ''}
                /* Horizontal borders between rows on mobile */
                ${index !== servicesData.length - 1 ? 'border-b border-neutral-300 dark:border-neutral-800 md:border-b-0' : ''}
                
                /* Desktop Hover States */
               md:hover:bg-[#eeeeeb] dark:md:hover:bg-[#151515] md:hover:shadow-lg

                /* Mobile Click States */
                ${isMobileActive
  ? 'bg-[#eeeeeb] dark:bg-[#151515] md:bg-transparent'
  : 'bg-transparent'
}
              `}
            >
              <div>
                {/* Number & Top-Right Circle Toggle */}
                <div className="flex justify-between items-start mb-12">
                  <span className="text-xs font-mono text-[#ff5500]">{service.number}</span>
                  
                  {/* Circle Graphic: turns solid orange on hover (Desktop) or active (Mobile) */}
                  <div
                    className={`w-8 h-8 rounded-full transition-all duration-300 flex items-center justify-center
                      /* Mobile state */
                      ${isMobileActive ? 'bg-[#ff5500] border-transparent md:bg-transparent md:border-neutral-700' : 'border border-neutral-400 dark:border-neutral-700 bg-transparent'}
                      /* Desktop hover state */
                      md:group-hover:bg-[#ff5500] md:group-hover:border-transparent
                    `}
                  ></div>
                </div>

                {/* Main Heading */}
                <h3 style={{fontFamily:"'Bebas Neue', sans-serif"}} className="text-5xl font-extrabold tracking-wider mb-6 uppercase text-[#0d0d0d] dark:text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 dark:text-neutral-400 text-normal leading-[1.4] mb-10">
                  {service.description}
                </p>
              </div>

              {/* Tag Pills */}
              <motion.div
               initial={{ y: 100, opacity: 0 }} 
  whileInView={{ y: 0, opacity: 1 }} 
  transition={{
    type: "tween",
    duration: 0.8,
  }}
               className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag, idx) => (
                  <span
                    key={idx}
                   className="text-[10px] tracking-wider text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-700/50 px-3 py-1.5 rounded-full bg-black/5 dark:bg-neutral-900/30 group-hover:border-neutral-400 dark:group-hover:border-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-neutral-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}