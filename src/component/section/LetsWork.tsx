import { motion } from "framer-motion";


export default function ContactSection() {
return (
  <motion.section
    initial={{ y: 80, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="bg-[#F8F8F6] dark:bg-[#0d0d0d] py-12 md:py-16 px-6 md:px-12 font-sans select-none"
  >
    {/* Light Gray Rounded Card */}
    <div className="dark:bg-[#ecebe6] bg-[#0d0d0d] text-black w-full max-w-7xl mx-auto rounded-2xl py-16 px-6 md:py-24 md:px-12 flex flex-col items-center text-center shadow-lg">

      {/* Main Heading */}
      <h2
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        className="text-5xl sm:text-7xl md:text-7xl font-light tracking-tight mb-6 uppercase text-neutral-200 dark:text-black"
      >
        LET'S WORK TOGETHER
      </h2>

      {/* Subtitle */}
      <p className="text-neutral-400 dark:text-neutral-600 text-sm font-normal tracking-wide mb-10 max-w-lg">
        Open to freelance, product teams and interesting experiments with motion.
      </p>

      {/* Action Pills */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">

        {/* Email Button */}
        <a
          href="mailto:asian.paradissseee@gmail.com"
          className="w-full sm:w-auto max-w-full bg-[#ff5500] hover:bg-[#e04b00] text-white text-xs sm:text-sm font-bold tracking-widest px-6 sm:px-8 py-4 rounded-full transition-colors duration-200 uppercase shadow-md text-center break-all"
        >
          BENEDICTAIBESI45@GMAIL.COM
        </a>

        {/* Email Link */}
        <a
          href="mailto:asian.paradissseee@gmail.com"
          className="w-full sm:w-auto text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white text-xs sm:text-sm font-bold tracking-widest px-6 py-4 uppercase transition-colors duration-200 text-center"
        >
          EMAIL
        </a>

      </div>
    </div>
  </motion.section>
);
}