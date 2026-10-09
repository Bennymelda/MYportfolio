import { Link, useNavigate, useParams } from "react-router-dom";
import { PROJECTS_DATA, type Project } from "./projectsData";
import FooterSection from "./Footer";
import { motion } from "framer-motion";
interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}
export const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = PROJECTS_DATA.find(
    (project) => project.id === projectId
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <ProjectDetailView
      project={project}
      onBack={() => navigate("/work")}
    />
  );
};

export const ProjectDetailView: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
 const currentIndex = PROJECTS_DATA.findIndex(
  (item) => item.id === project.id
);

const nextProject =
  PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];
 
  return (
    <>
    <motion.div 
     initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
    className="pt-30 bg-[#F8F8F6] dark:bg-[#0a0a0a] text-white font-sans px-4 md:px-4 py-10 selection:bg-orange-500 selection:text-black">

     <motion.div
      initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    delay: 0.15,
    ease: [0.22, 1, 0.36, 1],
  }}
      className="max-w-7xl mx-auto flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800/80 pb-6 mb-12">

    <motion.div 
      initial={{ opacity: 0, x: -15 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.6,
    delay: 0.3,
    ease: "easeOut",
  }}
    className="flex items-center gap-3">
      <span className="text-orange-500 font-mono text-xs font-semibold">
        {project.number}
      </span>

      <span className="text-neutral-500 dark:text-neutral-400 font-mono text-xs uppercase tracking-[0.2em]">
        CASE STUDY
      </span>
    </motion.div>

    <motion.button
      className="group flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
  initial={{ opacity: 0, x: 15 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.6,
    delay: 0.3,
    ease: "easeOut",
  }}
      onClick={onBack}
     
   >
      <span className="text-orange-500 group-hover:-translate-x-1 transition-transform">
        ←
      </span>

      <span>BACK TO PROJECTS</span>
    </motion.button>

  </motion.div>

      <div className="max-w-7xl mx-auto">

  <motion.div
   initial={{ y: -30, opacity: 0 }}
 whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
   className="relative mb-10">
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}

      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      className="text-4xl sm:text-4xl md:text-[6rem] font-black uppercase tracking-wide leading-none text-neutral-900 dark:text-white select-none"
    >
      {project.title}
    </motion.h1>
  </motion.div>

  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-2">

    {/* Description */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.7,
    delay: 0.15,
    ease: [0.22, 1, 0.36, 1],
  }}
    className="lg:col-span-6">
      <p className="text-normal sm:text-xl text-neutral-500 dark:text-neutral-400 font-normal leading-relaxed tracking-tight">
        {project.description}
      </p>
    </motion.div>

    {/* Project Details */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.7,
    delay: 0.25,
    ease: [0.22, 1, 0.36, 1],
  }}

    className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-6">

      <div>
        <span className="block text-[10px] font-mono text-neutral-500 dark:text-neutral-500 uppercase tracking-widest mb-2">
          CLIENT
        </span>
        <p className="text-sm font-medium text-neutral-900 dark:text-white">
          {project.client}
        </p>
      </div>

      <div>
        <span className="block text-[10px] font-mono text-neutral-500 dark:text-neutral-500 uppercase tracking-widest mb-2">
          YEAR
        </span>
        <p className="text-sm font-medium text-neutral-900 dark:text-white">
          {project.year}
        </p>
      </div>

      <div>
        <span className="block text-[10px] font-mono text-neutral-500 dark:text-neutral-500 uppercase tracking-widest mb-2">
          ROLE
        </span>
        <p className="text-sm font-medium text-neutral-900 dark:text-white">
          {project.role}
        </p>
      </div>

      <div>
        <span className="block text-[10px] font-mono text-neutral-500 dark:text-neutral-500 uppercase tracking-widest mb-2">
          TYPE
        </span>
        <p className="text-sm font-medium text-neutral-900 dark:text-white">
          {project.type}
        </p>
      </div>

      <div>
        <span className="block text-[10px] font-mono text-neutral-500 dark:text-neutral-500 uppercase tracking-widest mb-2">
          STATUS
        </span>
        <p className="text-sm font-medium text-neutral-900 dark:text-white lowercase">
          {project.status}
        </p>
      </div>

    </motion.div>
  </div>


  {/* Browser Preview */}
  <motion.div 
  initial={{ opacity: 0, y: 60, scale: 0.98 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  }}

  className="mt-16 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl">

    {/* Browser Bar */}
    <div className="bg-neutral-100 dark:bg-neutral-800/80 px-4 py-3 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-700/50">

      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
      </div>

      <div className="bg-white dark:bg-neutral-900 px-4 py-1 rounded text-xs text-neutral-500 dark:text-neutral-400 font-mono border border-neutral-200 dark:border-transparent">
        https://{project.url}
      </div>

      <div className="w-12"></div>

    </div>

    {/* Image + Gradient */}
    <div
      className={`w-full bg-gradient-to-br ${project.bgGradient} px-10 py-6 sm:py-10 sm:px-15 md:py-14 md:px-30`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[350px] sm:h-[500px] object-cover object-top rounded-xl"
      />
    </div>

  </motion.div>

</div>

     <motion.section className="mt-20 bg-[#F8F8F6] dark:bg-[#0e0e0e] text-neutral-700 dark:text-[#a1a1a1] min-h-screen font-sans flex items-center justify-center">
  <motion.div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

    {/* Left Column */}
    <motion.div
     initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
     className="lg:col-span-5 max-w-7xl flex flex-col space-y-8">

      <div className="space-y-6 text-xl leading-relaxed">
        {(project.overview ?? []).map((paragraph) => (
          <p key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{
    duration: 0.6,
    delay: 0.2,
    ease: [0.22, 1, 0.36, 1],
  }}
      >
        <a
          href="#"
          className="inline-flex items-center gap-2 border border-neutral-300 dark:border-zinc-700 hover:border-neutral-500 dark:hover:border-zinc-500 text-neutral-700 dark:text-neutral-300 font-medium px-10 py-5 rounded-full uppercase text-lg tracking-wider transition-colors"
        >
          Open Website

          <svg
            className="w-4.5 h-4.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 17L17 7M17 7H7M17 7V17"
            />
          </svg>
        </a>
      </motion.div>

    </motion.div>


    {/* Right Column */}
    <motion.div
     initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.2 }}

  transition={{
    duration: 0.8,
    delay: 0.15,
    ease: [0.22, 1, 0.36, 1],
  }}
     className="lg:col-span-7 flex flex-col items-end justify-between space-y-10">

      {/* My Contribution */}
      <div className="w-full max-w-[580px]">

        <h3 className="text-sm uppercase tracking-widest text-neutral-500 dark:text-zinc-500 font-semibold mb-6">
          My Contribution
        </h3>

        <ul className="space-y-4 text-base leading-relaxed border-t border-neutral-200 dark:border-zinc-800/80 pt-2">

          {(project.contributions ?? []).map((item) => (
            <li
              key={item}
              className="relative pl-4 border-b border-neutral-200 dark:border-zinc-800/80 pb-4 before:content-['•'] before:absolute before:left-0 before:text-orange-500"
            >
              {item}
            </li>
          ))}

        </ul>

      </div>


      {/* Stack */}
      <motion.div 
      initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{
    duration: 0.6,
    delay: 0.2,
    ease: [0.22, 1, 0.36, 1],
  }}
      className="w-full max-w-[580px]">

        <h3 className="text-xs uppercase tracking-widest text-neutral-500 dark:text-zinc-500 font-semibold mb-4">
          Stack
        </h3>

        <div className="flex flex-wrap gap-2 text-sm font-mono uppercase tracking-wider">

          {project.technologies.map((technology, index) => (
            <motion.span
              key={technology}
               initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{
      duration: 0.4,
      delay: index * 0.08,
      ease: "easeOut",
    }}
              className="px-4 py-1.5 rounded-full border border-neutral-300 dark:border-zinc-700 text-neutral-700 dark:text-neutral-300"
            >
              {technology}
            </motion.span>
          ))}

        </div>

      </motion.div>

    </motion.div>

  </motion.div>
</motion.section>

   <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  <Link
    to={`/work/${nextProject.id}`}
    className="group block border-t border-neutral-200 dark:border-zinc-800 mt-24 pt-10 pb-20"
  >
    <div>

      {/* Label */}
      <motion.p
        className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.15,
        }}
      >
        Next Project
      </motion.p>

      {/* Project Title */}
      <motion.h2
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        className="text-8xl sm:text-10xl font-bold uppercase tracking-wide text-neutral-900 dark:text-white group-hover:text-neutral-500 dark:group-hover:text-zinc-400 transition-colors"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {nextProject.title}
      </motion.h2>

      {/* URL */}
      <motion.p
        className="text-sm text-neutral-500 dark:text-zinc-400 mt-2"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.35,
        }}
      >
        {nextProject.url}
      </motion.p>

    </div>
  </Link>
</motion.div>

    </motion.div>
   <FooterSection />
    </>

  );
};