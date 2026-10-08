import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';


interface LineItemProps {
 text: string;
 progress: MotionValue<number>;
 range: [number, number];
}
export default function ApproachSection() {
  const sectionRef = useRef(null);

  // Track scroll position specifically through this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'], // Entire section entry to exit
  });

  const lines = [
    "I help businesses and founders",
    "turn idea into a product",
    "people actually use —",
    "built fast, designed with intention,",
    "and engineered to convert."
  ];

  // Overall section fade: dims out when leaving the section completely
  const sectionOpacity = useTransform(
    scrollYProgress,
    [100, 0.25, 1, 1],
    [0.2, 1, 1, 0.2]
  );

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity: sectionOpacity }}
      className="bg-[#F8F8F6] text-[#0d0d0d] dark:bg-[#0d0d0d] dark:text-white min-h-[140vh] p-6 md:p-12 font-sans select-none flex flex-col relative"
    >
      {/* Sticky viewport content so text stays in place as user scrolls through */}
      <div className="sticky top-12 flex flex-col justify-between h-[80vh] w-full  mx-auto">
        
        {/* Top Header Row */}
        <div className="border-t border-neutral-300 dark:border-neutral-800 border-b py-4 mb-8 flex justify-between items-center w-full">
          <div className="flex items-center gap-3 text-xs tracking-[0.2em] font-mono">
            <span className="text-[#ff5500]">01</span>
            <span className="text-neutral-600 dark:text-neutral-400 uppercase">APPROACH</span>
          </div>
          <span className="w-1.5 h-1.5 bg-[#ff5500] rounded-full"></span>
        </div>

        {/* Line-by-Line Cumulative Reveal */}
        <div className="my-auto">
          <div className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1] flex flex-col gap-2">
            {lines.map((lineText, idx) => {
              // Range where this line turns white
              const lineStart = 0.25 + idx * 0.1;
              const lineEnd = lineStart + 0.1;

              return (
                <LineItem
                  key={idx}
                  text={lineText}
                  progress={scrollYProgress}
                  range={[lineStart, lineEnd]}
                />
              );
            })}
          </div>
        </div>

      </div>
    </motion.section>
  );
}

// Sub-component handling individual line brightness that stays bright once revealed
function LineItem({ text, progress, range }:LineItemProps) {
  // Line stays dark (0.2 opacity) until scroll reaches its range, 
  // turns bright white (1.0 opacity), and STAYS BRIGHT (1.0) afterwards.
  const lineOpacity = useTransform(
    progress,
    [range[0], range[1]],
    [0.2, 1.0]
  );

  return (
    <motion.p
      style={{ opacity: lineOpacity }}
      className="text-[#0d0d0d] dark:text-white transition-opacity duration-150"
    >
      {text}
    </motion.p>
  );
}