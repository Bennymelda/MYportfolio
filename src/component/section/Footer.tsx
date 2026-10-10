import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function FooterSection() {
  return (
   <footer className="bg-[#EDEDE8] text-[#0d0d0d] dark:bg-[#181717] dark:text-white border-t border-neutral-300 dark:border-zinc-700 pt-16 md:pt-20 font-sans select-none overflow-hidden flex flex-col justify-between min-h-screen px-4">
      {/* Top Part: Call to Action + Navigation Links */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        {/* Left Column: Heading & CTAs */}
        <div className="md:col-span-7 flex flex-col items-start gap-8">
          <h2 style={{fontFamily:"'Bebas Neue', sans-serif"}}  className="text-2xl sm:text-5xl font-normal tracking-wide  uppercase leading-none text-[#0d0d0d] dark:text-neutral-100 max-w-lg">
            GOT AN IDEA? LET'S BUILD IT TOGETHER.
          </h2>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-4 rounded-full border  border-neutral-300 dark:border-neutral-700 hover:border-[#0d0d0d] dark:hover:border-white text-[#0d0d0d] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 text-lg font-semibold tracking-wider uppercase  transition-all flex items-center gap-2"
            >
              START A PROJECT <span className="text-lg "><FiArrowUpRight /></span>
            </Link>
          
          </div>
        </div>

        {/* Right Column: Menu & Social Links */}
        <div className="md:col-span-5 grid grid-cols-2 gap-8 text-base font-mono">
          {/* Menu Links */}
          <div className="flex flex-col gap-3">
            <span className="text-neutral-600 dark:text-neutral-500 uppercase tracking-widest text-[12px] mb-2">MENU</span>
            <Link to="/" className="text-neutral-600 dark:text-neutral-400 hover:text-[#0d0d0d] dark:hover:text-white transition-colors">Home</Link>
            <Link to="/work" className="text-neutral-600 dark:text-neutral-400 hover:text-[#0d0d0d] dark:hover:text-white transition-colors">Work</Link>
            <Link to="/about" className="text-neutral-600 dark:text-neutral-400 hover:text-[#0d0d0d] dark:hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="text-neutral-600 dark:text-neutral-400 hover:text-[#0d0d0d] dark:hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3">
            <span className="text-neutral-600 dark:text-neutral-500 uppercase tracking-widest text-[12px] mb-2">SOCIAL</span>
            <a href="https://x.com/BMelda28430" target="_blank" rel="noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-[#0d0d0d] dark:hover:text-white transition-colors">Twitter</a>
            <a href="https://github.com/Bennymelda" target="_blank" rel="noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-[#0d0d0d] dark:hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/benny-ibesi" target="_blank" rel="noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-[#0d0d0d] dark:hover:text-white transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/ibesibenedicta" target="_blank" rel="noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-[#0d0d0d] dark:hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>

      {/* Middle Divider Row with Meta Stats & Ring Cursor */}
      <div className="relative border-t border-neutral-300 dark:border-neutral-800/80 pt-6 pb-12 w-full max-w-7xl mx-auto flex flex-row justify-between items-center text-[12px] md:text-[15px]  font-mono text-neutral-500 gap-4">
        <div>© 2026 IBESI BENEDICTA</div>

        {/* Center Location & Target Ring Cursor */}
        <div className="relative flex items-center gap-2">
          <span>ANAMBRA, NG — 12:29:02</span>
         
        </div>

        <div>BUILT WITH React + three js</div>
      </div>

      {/* Giant Watermark Brand Text at Bottom */}
      <div className="w-full text-center mt-auto pointer-events-none">
        <h1 style={{fontFamily:"'Bebas Neue', sans-serif"}} className="text-[20vw] leading-none font-medium uppercase tracking-wide text-neutral-300 dark:text-neutral-700/30 selection:bg-transparent">
         BENEDICTA
        </h1>
      </div>
    </footer>
  );
}