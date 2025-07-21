import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import { FaDownload } from 'react-icons/fa';
import img from '../assets/myPic.jpg';

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: { color: 'transparent' },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: '#00bcd4' },
      links: { color: '#00bcd4', distance: 150, enable: true, opacity: 0.3, width: 1 },
      collisions: { enable: false },
      move: { direction: 'none', enable: true, outModes: 'bounce', random: false, speed: 1, straight: false },
      number: { density: { enable: true, area: 800 }, value: 50 },
      opacity: { value: 0.3 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  };

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-2 sm: mt-12"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-16 py-12 gap-10 md:gap-0">
        
        {/* Profile Image with Hover Animation */}
       <motion.div
  initial={{ x: -80, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="flex-shrink-0 flex items-center justify-center w-full md:w-auto ml-7 "
>
  <img
    src={img}
    alt="Profile"
    className="rounded-full w-64 h-64 border-4 border-cyan-400 shadow-lg object-cover bg-black 
               transform transition duration-500 hover:scale-105 hover:rotate-2 hover:shadow-cyan-400/50"
  />
</motion.div>


        {/* Text Content */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-2/3"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white relative group">
            Hi, I'm{' '}
            <span className="relative inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 bg-clip-text text-transparent group-hover:underline">
              Abdullah Tariq
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4 text-cyan-300 font-semibold">
            Software Engineer & Full-Stack Developer
          </h2>
          <p className="max-w-2xl text-gray-300 mb-6">
            I am Abdullah Tariq, a passionate Full-Stack MERN Developer, Web & App Developer, and UI/UX designer.
            I thrive on building scalable web applications and exploring the latest technologies.
          </p>

          {/* Resume Button with Glow & Icon */}
          <a
            href="/Abdullah CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 border-2 border-cyan-400 text-white rounded shadow hover:bg-cyan-600 hover:border-cyan-600 hover:shadow-cyan-500/50 transition text-lg font-semibold"
          >
            <FaDownload className="text-white" />
            View My Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
