import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: "-8%",
        scale: 0.98,
      }}
      transition={{
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="fixed inset-0 z-[100] bg-[#F8F8F6] text-[#0D0D0D] dark:bg-[#0D0D0D] dark:text-white flex flex-col items-center justify-center"
    >
      <div className="text-center">

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-[11px] md:text-xs tracking-[0.35em] uppercase text-neutral-500 dark:text-neutral-400"
        >
          Hello
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="mt-3 text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight"
        >
          Benedicta
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.35,
          }}
          className="mt-4 text-[10px] md:text-xs tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-500"
        >
          Frontend Developer
        </motion.p>

      </div>

      {/* Loading line */}
      <div className="absolute bottom-8 left-6 right-6 md:left-10 md:right-10">
        <div className="h-px bg-neutral-300 dark:bg-neutral-800 overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              ease: "linear",
            }}
            className="h-full bg-[#0D0D0D] dark:bg-white"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Welcome;