import {motion} from "framer-motion"
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from "react-router-dom";

export default function HeroSection() {

  return (
    <motion.div className="min-h-screen pt-25
    bg-[#F8F8F6] text-[#0d0d0d] dark:bg-[#0d0d0d] dark:text-white font-sans flex flex-col justify-between p-6 md:p-6 md:pt-40 select-none overflow-hidden">

      {/* --- MAIN HERO BODY --- */}
 <motion.main
  initial={{ y: 100, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="flex-1 flex flex-col mt-6 sm:mt-8"
>
       {/* Hero Top Meta */}
<div className="flex justify-between flex-col sm:flex-row gap-4 items-start">

  <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-sm leading-relaxed max-w-sm">
    Frontend developer based in Anambra. 3D Model, Motion
    <br className="hidden sm:block" />
    3, TypeScript — interfaces that load fast and move well.
  </p>

  <div
    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
    className="text-[11px] tracking-[0.2em] text-neutral-600 dark:text-neutral-500 uppercase"
  >
    AVAILABLE FOR WORK — 2026
  </div>

</div>
        {/* Hero Title */}
        <div className="relative mt-8 sm:mt-10 mb-8 sm:mb-10">
         <h1
  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
  className="text-[17vw] sm:text-[12vw] md:text-[11vw] leading-[0.78] tracking-wide uppercase flex flex-col font-bold"
>
  <span>BENNY</span>

  <span className="ml-[15vw] sm:ml-20 md:ml-30 mt-1 sm:mt-2">
    IBESI
  </span>
</h1>
        </div>

        {/* Hero Bottom Footer */}
        
       <div className="flex flex-col border-t border-zinc-300 dark:border-zinc-800 pt-5 sm:flex-row justify-between items-start sm:items-end gap-5 sm:gap-6 pb-2">
          <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 font-light">
  I'm a <strong className="text-[#0d0d0d] dark:text-white font-semibold">Frontend Developer</strong>
</p>

          {/* Double Pill Button */}
          <div className='flex gap-5'>
         <div className="group relative overflow-hidden flex items-center gap-1 bg-[#F8F8F6] dark:bg-white/5 border border-black/20 dark:border-white/20 p-1.5 rounded-full">
    <Link
      to="/work"
      className="relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-full text-lg font-semibold tracking-wider text-[#0d0d0d] dark:text-white transition-colors duration-300 group-hover:text-white dark:group-hover:text-black"
    >
      SELECTED WORK
      <span className="text-lg">
        <FiArrowUpRight />
      </span>
    </Link>

   <span className="absolute inset-x-0 bottom-0 h-0 bg-[#0d0d0d] dark:bg-white transition-all duration-300 ease-out group-hover:h-full" />
  </div>
              <div className="group relative overflow-hidden flex items-center gap-1 bg-[#F8F8F6] dark:bg-white/5 border border-black/20 dark:border-white/20 p-1.5 rounded-full">
    <Link
      to="/contact"
      className="relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-full text-lg font-semibold tracking-wider text-[#0d0d0d] dark:text-white transition-colors duration-300 group-hover:text-white dark:group-hover:text-black"
    >
      SAY HELLO
      <span className="text-lg">
        <FiArrowUpRight />
      </span>
    </Link>

    <span className="absolute inset-x-0 bottom-0 h-0 bg-[#0d0d0d] dark:bg-white transition-all duration-300 ease-out group-hover:h-full" />
  </div>
          </div>
        </div>
      </motion.main>
    </motion.div>
  );
}