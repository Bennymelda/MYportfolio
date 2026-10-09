import { useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ContactSection from './LetsWork';
import FooterSection from './Footer';
import { PROJECTS_DATA } from "./projectsData";


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
           
             Five projects built around modern web experiences from an
  e-commerce platform and recruiter dashboard to interactive
  portfolio experiences and practical web applications. I focus on responsive interfaces, thoughtful
  design, and smooth user interactions.
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
              <span className="text-neutral-900 dark:text-white text-base font-normal">2024 — 2026</span>
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
                {project.url} 
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