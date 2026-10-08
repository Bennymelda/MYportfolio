import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import React, { useEffect, useState } from 'react';

// Data for the rows

const row1Items = [
  'REACT',
  'TYPESCRIPT',
  'JAVASCRIPT',
  'HTML5',
  'CSS3',
  'TAILWIND CSS',
  'RESPONSIVE DESIGN',
];

const row2Items = [
  'FIGMA TO CODE',
  'API INTEGRATION',
  'REST API',
  'AXIOS',
  'FETCH',
  'ZUSTAND',
  'CONTEXT API',
];

const row3Items = [
  'FRAMER MOTION',
  'GSAP',
  'THREE.JS',
  'REACT THREE FIBER',
  'WEB ANIMATION',
  '3D WEB',
  'INTERACTIVE UI',
];

const row4Items = [
  'GIT',
  'GITHUB',
  'REACT ROUTER',
  'RECHARTS',
  'FIREBASE',
  'VITE',
  'PWA',
];


const statsData = [
  { value: 3, label: 'years building for the web' },
  { value: 46, label: 'projects built and shipped' },
  { value: 3, label: 'core technologies for interactive UI' },
  { value: 100, label: '% focused on frontend development', showTarget: true },
];




function AnimatedNumber({ value }: { value: number }) {
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) =>
    Math.round(latest)
  );

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    return controls.stop;
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
}

export default function StackAndNumbers() {
  const [startCount, setStartCount] = useState(false);
  return (
    <motion.section 
    initial={{ y: 80, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, amount: 0.2 }}
    className="border-b border-neutral-300 dark:border-neutral-800 bg-[#F8F8F6] text-[#0d0d0d] dark:bg-[#0d0d0d] dark:text-white min-h-screen p-6 md:p-12 font-sans select-none overflow-hidden">
      {/* CSS Animation keyframes for continuous infinite scrolling */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>

      {/* Top Header Row */}
      <div className="border-t border-neutral-300 dark:border-neutral-800 border-b py-4 mb-12 flex justify-between items-center">
        <div className="flex items-center gap-3 text-xs tracking-[0.2em] font-mono">
          <span className="text-[#ff5500]">04</span>
          <span className="text-neutral-600 dark:text-neutral-400 uppercase">STACK & NUMBERS</span>
        </div>
        <span className="w-1.5 h-1.5 bg-[#ff5500] rounded-full"></span>
      </div>

      {/* Marquee Ticker Rows Container */}
      <div className="flex  flex-col gap-6 my-16 py-4 overflow-hidden">
        {/* ROW 1: Scrolling Infinite Marquee */}
        <div className="overflow-hidden w-full">
          <div style={{fontFamily:"'Bebas Neue', sans-serif"}}  className="animate-marquee flex items-center gap-4 sm:gap-6 text-2xl sm:text-4xl font-extrabold whitespace-nowrap uppercase tracking-wide text-[#0d0d0d] dark:text-neutral-100">
            {/* Original Items + Duplicated array for seamless loop */}
            {[...row1Items, ...row1Items, ...row1Items, ...row1Items].map((tech, idx) => (
              <React.Fragment key={idx}>
                <span>{tech}</span>
                <span className="text-[#ff5500] text-xl font-normal">*</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ROW 2: Static (Non-scrolling) */}
        <div style={{fontFamily:"'Bebas Neue', sans-serif"}}  className="flex justify-center items-center gap-6 text-2xl sm:text-4xl uppercase tracking-wide text-[#0d0d0d] dark:text-neutral-100 overflow-x-auto no-scrollbar whitespace-nowrap">
          {row2Items.map((tech, idx) => (
            <React.Fragment key={idx}>
              <span>{tech}</span>
              {idx !== row2Items.length - 1 && (
                <span className="text-[#ff5500] text-xl font-normal">*</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ROW 3: Scrolling Infinite Marquee */}
        <div className="overflow-hidden w-full">
          <div style={{fontFamily:"'Bebas Neue', sans-serif"}} className="animate-marquee flex items-center gap-6 text-2xl sm:text-4xl font-bold uppercase tracking-wide text-[#0d0d0d] dark:text-neutral-100">
            {[...row3Items, ...row3Items, ...row3Items, ...row3Items].map((tech, idx) => (
              <React.Fragment key={idx}>
                <span>{tech}</span>
                <span className="text-[#ff5500] text-xl font-normal">*</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ROW 4: Static (Non-scrolling) */}
        <div style={{fontFamily:"'Bebas Neue', sans-serif"}} className="flex justify-center items-center gap-6 text-2xl sm:text-4xl uppercase tracking-wide text-[#0d0d0d] dark:text-neutral-100 overflow-x-auto no-scrollbar whitespace-nowrap">
          {row4Items.map((tech, idx) => (
            <React.Fragment key={idx}>
              <span>{tech}</span>
              {idx !== row4Items.length - 1 && (
                <span className="text-[#ff5500] text-xl font-normal">*</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Bottom Numbers/Stats Grid */}
      <motion.div
  initial={{ x: -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{
    type: "tween",
    duration: 0.8,
    delay: 0.5,
  }}
  viewport={{ once: true, amount: 0.2 }}
  onViewportEnter={() => setStartCount(true)}
      className="border-t border-neutral-300 dark:border-neutral-800 pt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {statsData.map((stat, idx) => (
          <div key={idx} className="relative flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span
  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
 className="text-6xl sm:text-7xl font-normal text-[#0d0d0d] dark:text-white"
>
  {startCount ? <AnimatedNumber value={stat.value} /> : "0"}
</span>

             
            </div>

           <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-normal leading-normal">
              {stat.label}
            </p>
          </div>
        ))}
        
      </motion.div>
    </motion.section>
  );
}