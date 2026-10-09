import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [theme, setTheme] = useState<"light" | "dark">("dark");
const [activeNav, setActiveNav] = useState('');
const [showNav, setShowNav] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);
useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 0) {
      setShowNav(true);
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down
      setShowNav(false);
    } else {
      // Scrolling up
      setShowNav(true);
    }

    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [lastScrollY]);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );

    localStorage.setItem("theme", theme);
  }, [theme]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('EN');


  useEffect(() => {
  document.body.style.overflow = isMenuOpen ? "hidden" : "";

  return () => {
    document.body.style.overflow = "";
  };
}, [isMenuOpen]);
const navLinks = [
    { label: 'HOME', to: '/' },
    { label: 'WORK', to: '/work' },
    { label: 'ABOUT', to: '/about' },
    { label: 'CONTACT', to: '/contact' }
  ];

    return ( <>
     {/* --- NAVBAR --- */}
<header
  className={`bg-[#F8F8F6] text-[#0D0D0D] dark:bg-[#0D0D0D] dark:text-white border border-neutral-300 dark:border-zinc-800 flex justify-between py-4 px-6 items-center fixed top-0 left-0 z-[60] w-full transition-transform duration-300 ease-in-out ${
    showNav ? "translate-y-0" : "-translate-y-full"
  }`}
>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-7 h-7 bg-[#0D0D0D] text-white dark:bg-white dark:text-black rounded-full flex items-center justify-center text-xs font-bold">
            B
          </div>
          <span className="font-semibold dark:text-white text-black text-sm tracking-[0.2em]">Benny</span>
        </Link>

        {/* Navigation Links */}
       <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.15em]">
  <NavLink
    to="/work"
    className={({ isActive }) =>
      `group relative py-2 transition-colors duration-300 ${
       isActive ? "text-[#0D0D0D] dark:text-white" : "text-neutral-600 dark:text-neutral-400"
      }`
    }
  >
    {({ isActive }) => (
      <>
        <span 
        className="group-hover:text-[#0D0D0D] dark:group-hover:text-white transition-colors duration-300">
          WORK
        </span>

        <span
          className={`absolute left-0 bottom-0 h-px bg-[#0D0D0D] dark:bg-white transition-all duration-300 ${
            isActive
              ? "w-full opacity-100"
              : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
          }`}
        />
      </>
    )}
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
      `group relative py-2 transition-colors duration-300 ${
        isActive ? "text-[#0D0D0D] dark:text-white" : "text-neutral-600 dark:text-neutral-400"
      }`
    }
  >
    {({ isActive }) => (
      <>
        <span className="group-hover:text-[#0D0D0D] dark:group-hover:text-white transition-colors duration-300">
          ABOUT
        </span>

        <span
         className={`absolute left-0 bottom-0 h-px bg-[#0D0D0D] dark:bg-white transition-all duration-300 ${
            isActive
              ? "w-full opacity-100"
              : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
          }`}
        />
      </>
    )}
  </NavLink>

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      `group relative py-2 transition-colors duration-300 ${
        isActive ? "text-[#0D0D0D] dark:text-white" : "text-neutral-600 dark:text-neutral-400"
      }`
    }
  >
    {({ isActive }) => (
      <>
        <span className="group-hover:text-[#0D0D0D] dark:group-hover:text-white transition-colors duration-300">
          CONTACT
        </span>

        <span
         className={`absolute left-0 bottom-0 h-px bg-[#0D0D0D] dark:bg-white transition-all duration-300 ${
            isActive
              ? "w-full opacity-100"
              : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
          }`}
        />
      </>
    )}
  </NavLink>
</nav>

        {/* Header Controls */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 rounded-full p-1 text-[11px] font-semibold">
           
            <button
              onClick={() => setActiveLang('EN')}
              className={`px-2.5 py-0.5 rounded-full transition-all ${
  activeLang === 'RU'
    ? 'bg-[#0D0D0D] text-white dark:bg-white dark:text-black'
    : 'text-neutral-600 dark:text-neutral-400'
}`}
            >
              EN
            </button>
          </div>
     

          {/* Theme Badge */}
        <button
  type="button"
  onClick={() =>
    setTheme(theme === "dark" ? "light" : "dark")
  }
  className="flex items-center gap-2 
    bg-black/5 dark:bg-white/5 
    border border-black/20 dark:border-white/20 
    rounded-full px-3.5 py-1 text-[11px] tracking-widest"
>
  <span className="w-1.5 h-1.5 bg-[#ff5500] rounded-full"></span>

  <span className="text-black dark:text-white">
    {theme === "dark" ? "DARK" : "LIGHT"}
  </span>
</button>


{/* Mobile Hamburger */}
<button
  type="button"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="border w-9 h-9 cursor-pointer border-neutral-300 rounded-full  dark:border-neutral-700 flex md:hidden w-8 h-8 items-center justify-center"
  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
>
  <span className="relative w-6 h-6 ">
    <span
      className={`absolute left-0  top-1/2 w-6 h-px bg-gray-400 dark:bg-white transition-transform duration-300 ${
        isMenuOpen ? "rotate-45" : "-translate-y-1.5"
      }`}
    />

    <span
      className={`absolute left-0 top-1/2 w-6 h-px bg-gray-400 dark:bg-white transition-transform duration-300 ${
        isMenuOpen ? "-rotate-45" : "translate-y-1.5"
      }`}
    />
  </span>
</button>
        </div>
      </header>

<AnimatePresence>
  {isMenuOpen && (
    <motion.div
      className="fixed inset-0 z-50 bg-[#F8F8F6] text-[#0D0D0D] dark:bg-[#0D0D0D] dark:text-white p-6 md:p-12 flex flex-col justify-between font-sans min-h-screen"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
    >

      {/* Main Navigation Links */}
      <nav className="flex flex-col space-y-2 my-20">
        {navLinks.map((link, index) => (
          <motion.div
            key={link.label}
            className="flex items-center gap-6"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{
              duration: 0.9,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              to={link.to}
              onClick={() => {
                setActiveNav(link.label);
                setIsMenuOpen(false);
              }}
              className={`text-5xl sm:text-6xl font-black tracking-wide leading-none uppercase transition-colors ${
                activeNav === link.label
                  ? "text-[#0D0D0D] dark:text-white"
                  : "text-[#0D0D0D] dark:text-neutral-200 hover:text-neutral-500 dark:hover:text-neutral-500"
              }`}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Bottom Footer Section */}
      <motion.div
        className="flex flex-col space-y-6 pt-8 border-t border-neutral-300 dark:border-neutral-900"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Email */}
        <div>
          <a
            href="mailto:benedictaibesi45@gmail.com"
            className="text-lg font-semibold text-[#0D0D0D] dark:text-white hover:underline transition-all"
          >
            benedictaibesi45@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-xs font-mono tracking-widest text-neutral-600 dark:text-neutral-400 uppercase">
          <a
            href="https://t.me/tadashi_brooo"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#0D0D0D] dark:hover:text-white transition-colors"
          >
            Twitter
          </a>

          <a
            href="https://github.com/dadashi44"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#0D0D0D] dark:hover:text-white transition-colors"
          >
            GITHUB
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#0D0D0D] dark:hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
        </div>

        {/* Language Switcher */}
        <div className="pt-2">
          <div className="inline-flex items-center bg-black/5 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-full p-1 text-xs font-mono tracking-widest">
            {[ "EN"].map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLang(lang)}
                className={`px-4 py-1 rounded-full transition-all duration-200 ${
                  activeLang === lang
                    ? "bg-[#0D0D0D] text-white dark:bg-white dark:text-black font-bold"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-[#0D0D0D] dark:hover:text-white"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </> );
}
 
export default Navbar;