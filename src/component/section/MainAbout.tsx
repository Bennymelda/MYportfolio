import { motion } from "framer-motion";
import StackAndNumbers from "./StackNumber";
import ContactSection from "./LetsWork";
import FooterSection from "./Footer";

const AboutSection = () => {


  const stats = [
    {
      value: '9+',
      description: 'frontend projects built across SaaS, e-commerce and web experiences',
    },
    {
      value: '3',
      description: 'years building and learning frontend development',
    },
    {
      value: '3D',
      description: 'interactive web experiences with Three.js and React',
    },
    {
      value: 'API',
      description: 'integrating APIs into functional frontend applications',
    },
  ];



  const principles = [
    {
      number: '01',
      title: 'Content and structure first, effects second'
    },
    {
      number: '02',
      title: 'Motion should carry meaning, not steal attention'
    },
    {
      number: '03',
      title: 'Mobile is the starting point, not an afterthought'
    },
    {
      number: '04',
      title: 'Performance and accessibility are part of the experience'
    }
  ];

  const experiences = [
    {
      period: '7 MONTHS AGO',
      current: false,
      company: 'Perfect Exam',
      role: 'Frontend Developer',
      details:
        'AI learning platform · Design systems, React, Gsap, responsive UI, API I ntegration & usability testing'
    },
    {
      period: '5 MONTHS AGO',
      current: false,
      company: 'FRESHMART',
      role: 'Frontend Developer · Personal Project',
      details:
        'React, TypeScript, Tailwind CSS, React Router, Context API, Framer Motion, Vite, PWA · E-commerce'
    }
  ];

  return (
    <div className="w-full max-w-full overflow-x-clip">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-[#F8F8F6] text-[#0d0d0d] dark:bg-[#0D0D0D] dark:text-white p-5 sm:p-8 md:p-16 pt-30 md:pt-40 font-sans min-h-screen flex flex-col justify-between"
      >
        <div>
          {/* Top Header Label */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-4 text-xs tracking-[0.2em] text-red-500 font-mono border-b border-neutral-300 dark:border-neutral-800 pb-4 mb-12 uppercase"
          >

            <span>02</span>
            <span>WHO IS BEHIND THIS</span>
          </motion.div>

          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-5xl md:text-8xl font-black tracking-wide leading-none text-[#0d0d0d] dark:text-white font-sans uppercase mb-6">
            ABOUT
          </motion.h1>
          {/* Main Title & Quick Info Grid */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: "easeOut",
            }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-7">


              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-base font-normal leading-relaxed max-w-lg">
                Frontend developer, Anambra, Nigeria — React, TypeScript, Tailwind CSS, APIs, and interactive web experiences.
              </p>


            </div>

            {/* Quick Metadata Stats */}

            <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono uppercase tracking-wider pt-2">
              <div>
                <span className="text-neutral-500 dark:text-neutral-600 block mb-2">BASED IN</span>
                <span className="text-[#0d0d0d] dark:text-white font-semibold">Anambra, NG</span>
              </div>

              <div>
                <span className="text-neutral-500 dark:text-neutral-600 block mb-2">EXPERIENCE</span>
                <span className="text-[#0d0d0d] dark:text-white font-semibold">since 2024</span>
              </div>

              <div>
                <span className="text-neutral-500 dark:text-neutral-600 block mb-2">LANGUAGES</span>
                <span className="text-[#0d0d0d] dark:text-white font-semibold">ENGLISH</span>
              </div>
            </div>


          </motion.div>

          {/* Main Content Grid: Image + Biography */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Side: Photo Container */}
            <motion.div
              initial={{ x: -80, opacity: 0, scale: 0.96 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-5 relative group">
              <div
                className="relative aspect-[4/5] w-full bg-neutral-200 dark:bg-neutral-900 rounded-lg overflow-hidden border border-neutral-300 dark:border-neutral-800">
                {/* Corner Watermarks */}
                <span className="absolute top-4 left-4 text-[10px] font-mono tracking-widest text-neutral-600 dark:text-neutral-400 uppercase z-10">
                  IBESI BENEDICTA
                </span>

                {/* Replace src with your actual image path */}
                <img
                  src="/benny.png"
                  alt="IBESI BENEDICTA"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                />

                <span className="absolute bottom-4 left-4 text-[10px] font-mono tracking-widest text-neutral-600 dark:text-neutral-500 uppercase z-10">
                  IBESI BENEDICTA - BENNY
                </span>
              </div>
            </motion.div>

            {/* Right Side: Detailed Biography & Call-to-Actions */}
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-7 flex flex-col justify-between space-y-8">

              <div className="space-y-6 text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-semibold leading-relaxed">
                <p>
                  I'm Benedicta, a frontend developer based in Anambra, Nigeria. I build
                  modern web experiences with React, TypeScript and Tailwind CSS, turning
                  ideas and Figma designs into responsive, functional interfaces.
                </p>

                <p>
                  Right now, I'm building a recruiter dashboard designed to make hiring
                  workflows easier to manage — from jobs and candidates to team members,
                  applications and recruitment pipelines. I work with APIs and modern
                  frontend tools to turn complex product requirements into intuitive
                  experiences.
                </p>

                <p>
                  I'm also exploring the more interactive side of frontend development,
                  using Framer Motion, GSAP and Three.js to create interfaces that feel
                  alive rather than simply static. I enjoy experimenting with motion,
                  interactions and 3D while keeping the experience usable.
                </p>

                <p>
                  I care about the details that make a product feel polished: responsive
                  layouts, smooth interactions, clear interfaces and thoughtful user
                  experiences. For me, good frontend development isn't just about making
                  something work — it's about making it feel right.
                </p>
              </div>



              {/* Action Pill Buttons */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.9,
                  ease: "easeOut",
                }}
                className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700
text-[#0d0d0d] dark:text-white
hover:border-[#0d0d0d] dark:hover:border-white text-xs font-mono tracking-wider font-bold  transition-colors uppercase flex items-center gap-2"
                >
                  HIRE ME ↗
                </a>
                <a
                  href="#cv"
                  className="px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700
text-[#0d0d0d] dark:text-white
hover:border-[#0d0d0d] dark:hover:border-white text-xs font-mono tracking-wider font-bold  transition-colors uppercase flex items-center gap-2"
                >
                  DOWNLOAD CV ↗
                </a>
                <a
                  href="https://github.com/dadashi44"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700
text-[#0d0d0d] dark:text-white
hover:border-[#0d0d0d] dark:hover:border-white text-xs font-mono tracking-wider font-bold  transition-colors uppercase flex items-center gap-2"
                >
                  GITHUB ↗
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="bg-[#F8F8F6] text-[#0D0D0D] dark:bg-[#0D0D0D] dark:text-white p-5 sm:p-8 md:p-16 font-sans flex flex-col gap-20">
        {/* 03 EXPERIENCE SECTION */}
        <div>
          {/* Section Header */}
          <div className="flex justify-between items-center text-xs tracking-[0.2em] font-mono border-b border-neutral-300 dark:border-neutral-800 pb-4 mb-8 uppercase">
            <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400">
              <span className="text-orange-500 font-bold">03</span>
              <span className="text-neutral-700 dark:text-neutral-300">EXPERIENCE</span>
            </div>
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
          </div>

          {/* Experience Rows */}
          <div className="divide-y divide-neutral-300 dark:divide-neutral-800">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center  transition-colors px-2 rounded-lg"
              >
                {/* Timeline Indicator */}
                <div className="md:col-span-3 flex items-center gap-3">
                  <span className="text-xs font-mono text-neutral-500 tracking-wider">
                    {exp.period}
                  </span>
                </div>

                {/* Company Title */}
                <div className="md:col-span-4">
                  <h2 className="text-3xl md:text-3xl font-black tracking-tight text-[#0D0D0D] dark:text-white uppercase font-sans hover:text-orange-500 ">
                    {exp.company}
                  </h2>
                </div>

                {/* Role & Tech Details */}
                <div className="md:col-span-5 flex flex-col gap-1">
                  <div className="text-sm font-semibold text-[#0D0D0D] dark:text-white">
                    {exp.role}
                  </div>
                  <div className="text-xs font-mono text-neutral-500 leading-relaxed">
                    {exp.details}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 04 EDUCATION SECTION */}
        <div>
          {/* Section Header */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-between items-center text-xs tracking-[0.2em] font-mono border-b border-neutral-300 dark:border-neutral-800 pb-4 mb-12 uppercase"
          >
            <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400">
              <span className="text-red-500 font-bold">04</span>
              <span className="text-neutral-700 dark:text-neutral-300">EDUCATION</span>
            </div>
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
          </motion.div>

          {/* Education Card */}
          <div className="max-w-xl">
            <motion.div
              initial={{ y: 70, opacity: 0, scale: 0.97 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.25 }}
              className="relative border border-neutral-200 dark:border-neutral-800 bg-[#F8F8F6] dark:bg-[#111111]/60 rounded-2xl p-8 hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors"
            >
              {/* Top Info Header */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono text-neutral-500">
                  — 2025
                </span>

                <div className="w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-800"></div>
              </div>

              {/* University Title */}
              <h3 className="text-3xl font-normal text-[#0D0D0D] dark:text-gray-200 leading-tight mb-3">
                University of Nigeria, Nsukka
              </h3>

              {/* Degree Subtitle */}
              <div className="text-xs font-mono font-bold text-red-500 tracking-widest uppercase mb-6">
                B.SC. INTEGRATED SCIENCE
              </div>

              {/* Graduation Info */}
              <div className="text-xs font-mono text-neutral-500 space-y-1">
                <p className="text-[#0D0D0D] dark:text-gray-300 text-sm">
                  Graduated — 2025
                </p>
                <p>
                  Nsukka, Enugu State, Nigeria
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="bg-[#F8F8F6] text-[#0D0D0D] dark:bg-[#0D0D0D] dark:text-white p-5 sm:p-8 md:p-16 font-sans flex flex-col gap-20">
        {/* 05 IMPACT SECTION */}
        <div>
          {/* Section Header */}
          <div className="flex justify-between items-center text-xs tracking-[0.2em] font-mono border-b border-neutral-300 dark:border-neutral-800 pb-4 mb-12 uppercase">
            <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400">
              <span className="text-red-500 font-bold">05</span>
              <span className="text-neutral-700 dark:text-neutral-300">IMPACT</span>
            </div>
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
          </div>

          {/* Stats Grid with Borders */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.5
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-neutral-300 dark:border-neutral-800 divide-y md:divide-y-0 md:divide-x divide-neutral-300 dark:divide-neutral-800 py-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col justify-between p-6 md:p-8 first:pl-0 last:pr-0"
              >
                <div className="text-4xl md:text-7xl font-mono font-bold text-[#FF5533] tracking-tight mb-6">
                  {stat.value}
                </div>
                <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 06 PRINCIPLES SECTION */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
          }}
        >
          {/* Section Header */}
          <div className="flex justify-between items-center text-xs tracking-[0.2em] font-mono border-b border-neutral-300 dark:border-neutral-800 pb-4 mb-12 uppercase">
            <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400">
              <span className="text-red-500 font-bold">06</span>
              <span className="text-neutral-700 dark:text-neutral-300">PRINCIPLES</span>
            </div>
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
          </div>

          {/* Principles Grid */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="border border-neutral-200 dark:border-neutral-800 bg-[#F8F8F6] dark:bg-[#111111]/60 rounded-2xl p-8 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors flex flex-col justify-between min-h-[160px]"
              >
                <span className="text-xs font-mono text-red-500 font-bold mb-6 block">
                  {principle.number}
                </span>
                <h3 className="text-xl md:text-2xl font-medium text-[#0D0D0D] dark:text-gray-300 leading-snug">
                  {principle.title}
                </h3>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <StackAndNumbers />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default AboutSection;