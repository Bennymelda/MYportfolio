import { useState, useEffect, type FormEvent } from 'react';
import FooterSection from './Footer';
import { motion } from 'framer-motion';

const ContactSections = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '$1K — $3K',
    message: ''
  });

  const [currentTime, setCurrentTime] = useState('');

  // Live Almaty Clock (GMT+5)
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const nigeriaTime = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);

      setCurrentTime(nigeriaTime);
    };

    updateClock();

    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  const budgetOptions = ['< $1K', '$1K — $3K', '$3K — $7K', '$7K+', "LET'S DISCUSS"];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted contact data:', formData);
  };

  return (
    <>
      <section className="bg-[#F8F8F6] text-[#0D0D0D] dark:bg-[#0D0D0D] dark:text-white p-8 md:p-6 pt-30 md:pt-40 font-sans min-h-screen flex flex-col justify-between">
        <div className='mb-10'>
          {/* Top Header Label */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center gap-4 text-xs tracking-[0.2em] text-orange-500 font-mono border-b border-neutral-300 dark:border-neutral-800 pb-4 mb-12 uppercase"
          >
            <span>03</span>
            <span>LET'S TALK</span>
          </motion.div>

          {/* Main Title & Status Info Bar */}

          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.3 }}
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            className="text-5xl md:text-8xl font-black tracking-wide leading-none text-[#0D0D0D] dark:text-white font-sans uppercase mb-6"
          >
            CONTACT
          </motion.h1>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-18"
          >
            <div className="lg:col-span-7">
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-normal leading-relaxed max-w-xl">
                Tell me about the project — I usually reply the same day. English .
              </p>
            </div>

            {/* Quick Metadata Stats */}
            <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-4 text-xs font-mono uppercase tracking-wider pt-2">
              <div>
                <span className="text-neutral-500 dark:text-neutral-600 block mb-2">STATUS</span>
                <span className="text-[#0D0D0D] dark:text-white font-semibold">Open to projects</span>
              </div>
              <div>
                <span className="text-neutral-500 dark:text-neutral-600 block mb-2">TIMEZONE</span>
                <span className="text-[#0D0D0D] dark:text-white font-semibold">GMT+1, Anambra</span>
              </div>
              <div>
                <span className="text-neutral-500 dark:text-neutral-600 block mb-2">RESPONSE</span>
                <span className="text-[#0D0D0D] dark:text-white font-semibold">&lt; 24 hours</span>
              </div>
            </div>
          </motion.div>

          {/* Form and Contact Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Left Side: Contact Form */}
            <motion.form
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.15 }}
              onSubmit={handleSubmit}
              className="lg:col-span-7 flex flex-col space-y-10"
            >
              {/* Name Input */}
              <div className="flex flex-col border-b border-neutral-300 dark:border-neutral-800 pb-3 focus-within:border-[#0D0D0D] dark:focus-within:border-white transition-colors">
                <label className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mb-3">
                  NAME
                </label>
                <input
                  type="text"
                  placeholder="What should I call you"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-transparent text-[#0D0D0D] dark:text-white placeholder-neutral-500 dark:placeholder-neutral-600 focus:outline-none text-base"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col border-b border-neutral-300 dark:border-neutral-800 pb-3 focus-within:border-[#0D0D0D] dark:focus-within:border-white transition-colors relative">
                <label className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mb-3">
                  EMAIL
                </label>
                <div className="flex justify-between items-center">
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-transparent text-[#0D0D0D] dark:text-white placeholder-neutral-500 dark:placeholder-neutral-600 focus:outline-none text-base w-full"
                  />
                </div>
              </div>

              {/* Budget Options */}
              <div className="flex flex-col">
                <label className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mb-4">
                  BUDGET
                </label>
                <div className="flex flex-wrap gap-3">
                  {budgetOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: option })}
                      className={`px-4 py-2 rounded-full border text-xs font-mono tracking-wider transition-all duration-200 ${formData.budget === option
                        ? 'bg-neutral-800 dark:bg-neutral-800 border-[#0D0D0D] dark:border-white text-white font-bold'
                        : 'bg-transparent text-neutral-600 dark:text-neutral-400 border-neutral-300 dark:border-neutral-800 hover:border-neutral-500 dark:hover:border-neutral-600'
                        }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="flex flex-col border-b border-neutral-300 dark:border-neutral-800 pb-3 focus-within:border-[#0D0D0D] dark:focus-within:border-white transition-colors">
                <label className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mb-3">
                  MESSAGE
                </label>
                <textarea
                  rows={2}
                  placeholder="A few words about the project, timeline and goals"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-transparent text-[#0D0D0D] dark:text-white placeholder-neutral-500 dark:placeholder-neutral-600 focus:outline-none text-base resize-none"
                />
              </div>

              {/* Submit Pill Button */}
              <div className="pt-4">
                <motion.button
                  type="submit"
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#0D0D0D] dark:bg-white text-white dark:text-black font-mono text-xs tracking-widest px-10 py-3.5 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 font-bold uppercase transition-colors"
                >
                  SEND
                </motion.button>
              </div>
            </motion.form>

            {/* Right Side: Direct Channels & Resume / Clock */}
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.15 }}
              className="lg:col-span-5 flex flex-col justify-between space-y-10"
            >
              <div>
                <div className="text-[10px] font-mono tracking-widest text-neutral-500 dark:text-neutral-600 uppercase mb-6">
                  DIRECT CHANNELS
                </div>

                <div className="space-y-6">
                  {/* Email Channel */}
                  <div className="border-b border-neutral-300 dark:border-neutral-800 pb-4">
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-1">
                      EMAIL
                    </span>
                    <a
                      href="mailto:asian.paradissseee@gmail.com"
                      className="text-[#0D0D0D] dark:text-white text-base font-semibold hover:underline"
                    >
                      benedictaibesi45@gmail.com
                    </a>
                  </div>

                  {/* Phone Channel */}
                  <div className="border-b border-neutral-300 dark:border-neutral-800 pb-4">
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-1">
                      PHONE
                    </span>
                    <a
                      href="tel:+77002982030"
                      className="text-[#0D0D0D] dark:text-white text-base font-semibold hover:underline"
                    >
                      +234 903 448 1350
                    </a>
                  </div>

                  {/* Telegram Channel */}
                  <div className="border-b border-neutral-300 dark:border-neutral-800 pb-4">
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-1">
                      Twitter
                    </span>
                    <a
                      href="https://t.me/tadashi_brooo"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#0D0D0D] dark:text-white text-base font-semibold hover:underline"
                    >
                      @BMelda28430
                    </a>
                  </div>

                  {/* GitHub Channel */}
                  <div className="border-b border-neutral-300 dark:border-neutral-800 pb-4">
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-1">
                      GITHUB
                    </span>
                    <a
                      href="https://github.com/dadashi44"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#0D0D0D] dark:text-white text-base font-semibold hover:underline"
                    >
                      Bennymelda
                    </a>
                  </div>

                  {/* LinkedIn Channel */}
                  <div className="border-b border-neutral-300 dark:border-neutral-800 pb-4">
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-1">
                      LINKEDIN
                    </span>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#0D0D0D] dark:text-white text-base font-semibold hover:underline"
                    >
                      Ibesi Benedicta
                    </a>
                  </div>
                </div>

                {/* Resume Button */}
                {/*
                <div className="mt-8">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-500 dark:text-neutral-600 uppercase block mb-3">
                    RESUME
                  </span>
                  <a
                    href="#download-cv"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-xs font-mono tracking-wider font-bold text-[#0D0D0D] dark:text-white hover:border-[#0D0D0D] dark:hover:border-neutral-500 transition-colors uppercase"
                  >
                    DOWNLOAD CV (PDF) ↗
                  </a>
                </div>
              </div>
  */}
              {/* Local Time Widget */}
              <motion.div
                initial={{ y: 40, opacity: 0, scale: 0.97 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.7,
                  ease: "easeOut",
                }}
                className="bg-[#F8F8F6] dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6"
              >
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-2">
                  LOCAL TIME IN NIGERIA
                </span>
                <div className="text-4xl md:text-5xl font-mono font-bold tracking-widest text-[#0D0D0D] dark:text-white">
                  {currentTime || '07:00:20'}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>


      </section>
      <FooterSection />
    </>
  );
};

export default ContactSections;