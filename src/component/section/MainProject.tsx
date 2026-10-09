
import { Link } from "react-router-dom";
import { PROJECTS_DATA } from "./projectsData";

export const SelectedWorkSection: React.FC = () => {


  return (
  <section className="bg-[#F8F8F6] dark:bg-[#0a0a0a] text-neutral-900 dark:text-white min-h-screen py-12 px-4 md:px-12 font-sans selection:bg-orange-500 selection:text-black">

    {/* Header */}
    <div className="max-w-7xl mx-auto mb-8 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4">

      <h2 className="text-xs sm:text-sm tracking-[0.25em] text-orange-500 uppercase font-semibold flex items-center gap-2">
        <span className="text-orange-500">03</span>
        SELECTED WORK — 2024 / 2026
      </h2>

      <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
    </div>

    {/* Horizontal Scroll Container */}
    <div className="flex scrollbar-hide flex-col md:flex-row gap-6 md:overflow-x-auto pb-8 pt-4 md:snap-x md:snap-mandatory">

      {PROJECTS_DATA.map((project) => (
        <Link
          key={project.id}
          to={`/work/${project.id}`}
          className={`snap-center flex-shrink-0 w-[85vw] sm:w-[480px] lg:w-[540px] h-[360px] sm:h-[400px] rounded-2xl bg-gradient-to-br ${project.bgGradient} p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-black/50 group border border-black/10 dark:border-white/10 relative overflow-hidden`}
        >

          {/* Website Frame Mockup */}
          <div className="w-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-black/60 dark:border-white/10 transition-transform duration-500 group-hover:-translate-y-1">

            {/* Browser Bar */}
            <div className="bg-neutral-200/80 dark:bg-neutral-800/80 px-4 py-2.5 flex items-center gap-2 border-b border-neutral-300/70 dark:border-neutral-700/50">

              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>

              <div className="mx-auto bg-white/80 dark:bg-neutral-900/60 rounded-md px-3 py-0.5 text-[10px] text-neutral-500 dark:text-neutral-400 font-mono tracking-wider border border-neutral-300/50 dark:border-neutral-700/30">
                {project.url}
              </div>

            </div>

            {/* Website Preview Image */}
            <div className="h-36 sm:h-44 w-full relative overflow-hidden bg-neutral-100 dark:bg-neutral-950">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
              />

            </div>
          </div>

          {/* Card Bottom Meta Content */}
          <div className="mt-4 flex items-end justify-between relative z-10">

            <div>

              <span className="text-xs font-mono font-semibold text-neutral-300 tracking-wider">
                {project.number} — {project.type}
              </span>

              <h3
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                className="text-3xl sm:text-4xl font-extrabold tracking-wide text-white mt-0.5 uppercase"
              >
                {project.title}
              </h3>

              <p className="text-xs text-neutral-300 mt-1 font-medium">
                {project.url}
              </p>

            </div>

            <div className="text-right">

              <span className="text-xs font-mono text-neutral-300 block mb-2">
                {project.year}
              </span>

              {/* Arrow */}
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white group-hover:bg-orange-500 group-hover:text-black transition-colors duration-300">
                ↗
              </span>

            </div>

          </div>

        </Link>
      ))}

    </div>

  </section>
);
};

export default SelectedWorkSection;