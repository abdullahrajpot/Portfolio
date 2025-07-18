import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#About' },
  { name: 'Skills', href: '#TechStack' },
  { name: 'Projects', href: '#Projects' },
  { name: 'Achievements', href: '#Achievements' },
];

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (name) => {
    setActive(name);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-4 left-0 w-full z-50 flex justify-center pointer-events-none"
    >
      <div className="max-w-7xl w-[96%] mx-auto px-4 py-3 flex items-center justify-between rounded-2xl shadow-lg bg-gradient-to-r from-cyan-900/80 via-gray-900/80 to-gray-800/80 border border-cyan-900 pointer-events-auto">
        {/* Logo */}
        <a href="#home" className="text-cyan-400 text-2xl font-bold tracking-tight">
          Abdullah<span className="text-white">'s</span> <span className="font-normal text-gray-300">Portfolio</span>
        </a>
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => handleNavClick(link.name)}
                className={`text-lg font-medium transition-colors duration-200 ${
                  active === link.name
                    ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
                    : 'text-gray-200 hover:text-cyan-400'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-3 ml-6">
          <a href="https://www.linkedin.com/in/abdullah-tariq-883aa627b/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-cyan-800/40 transition"><FaLinkedin className="text-2xl text-gray-200 hover:text-cyan-400" /></a>
          <a href="https://github.com/abdullahrajpot" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-cyan-800/40 transition"><FaGithub className="text-2xl text-gray-200 hover:text-cyan-400" /></a>
          <a href="mailto:abdullahtariq5044@email.com" className="p-2 rounded-lg hover:bg-cyan-800/40 transition"><FaEnvelope className="text-2xl text-gray-200 hover:text-cyan-400" /></a>
        </div>
        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-cyan-400 text-2xl focus:outline-none ml-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full md:hidden bg-gray-900 px-4 pb-4 space-y-2 rounded-b-2xl shadow-lg"
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => handleNavClick(link.name)}
                className={`block py-2 text-lg font-medium transition-colors duration-200 ${
                  active === link.name ? 'text-cyan-400' : 'text-gray-200 hover:text-cyan-400'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className="flex items-center space-x-3 mt-2">
            <a href="https://www.linkedin.com/in/abdullah-tariq-883aa627b/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-cyan-800/40 transition"><FaLinkedin className="text-2xl text-gray-200 hover:text-cyan-400" /></a>
            <a href="https://github.com/abdullahrajpot" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-cyan-800/40 transition"><FaGithub className="text-2xl text-gray-200 hover:text-cyan-400" /></a>
            <a href="mailto:abdullahtariq5044@email.com" className="p-2 rounded-lg hover:bg-cyan-800/40 transition"><FaEnvelope className="text-2xl text-gray-200 hover:text-cyan-400" /></a>
          </div>
        </motion.ul>
      )}
    </motion.nav>
  );
} 