import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Bot, 
  Coffee, 
  Code, 
  Database, 
  Globe, 
  Layers, 
  Server, 
  GitBranch, 
  Figma,
  Zap,
  Cpu
} from 'lucide-react';

export default function TechStack() {
  const techStacks = [
    // Row 1
    [
      { name: 'Artificial Intelligence', icon: <Bot className="w-10 h-10" /> },
      { name: 'Java', icon: <Coffee className="w-10 h-10" /> },
      { name: 'Python', icon: <Code className="w-10 h-10" /> },
    //   { name: 'Machine Learning', icon: <Brain className="w-10 h-10" /> },
    //   { name: 'Artificial Intelligence', icon: <Bot className="w-10 h-10" /> },
    ],
    // Row 2
    [
      { name: 'MongoDB', icon: <Database className="w-10 h-10" /> },
      { name: 'Node.js', icon: <Server className="w-10 h-10" /> },
      { name: 'React', icon: <Globe className="w-10 h-10" /> },
      { name: 'TailwindCSS', icon: <Layers className="w-10 h-10" /> },
    //   { name: 'MongoDB', icon: <Database className="w-10 h-10" /> },
    ],
    // Row 3
    [
    //   { name: 'Figma', icon: <Figma className="w-10 h-10" /> },
      { name: 'Express', icon: <Zap className="w-10 h-10" /> },
    //   { name: 'Jupyter', icon: <Cpu className="w-10 h-10" /> },
      { name: 'Git', icon: <GitBranch className="w-10 h-10" /> },
      { name: 'Figma', icon: <Figma className="w-10 h-10" /> },
    ]
  ];

  return (
    <section id='TechStack' className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-cyan-400">Tech</span>{' '}
            <span className="text-white">Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I work with to build amazing applications
          </p>
        </motion.div>

        {/* Moving Tech Stack Rows */}
        <div className="space-y-8">
          {techStacks.map((row, rowIndex) => (
            <div key={rowIndex} className="relative overflow-hidden">
              {/* Moving Row */}
              <motion.div
                className="flex space-x-10"
                animate={{
                  x: rowIndex % 2 === 0 ? [0, -1200] : [-1200, 0],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {/* Duplicate the row for seamless loop */}
                {[...row, ...row, ...row, ...row].map((tech, index) => (
                  <motion.div
                    key={`${rowIndex}-${index}`}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="flex-shrink-0 group cursor-pointer"
                  >
                    {/* Main Card */}
                    <div className="relative bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 w-52 h-36 flex flex-col items-center justify-center group-hover:border-cyan-400/50 transition-all duration-300">
                      {/* Icon */}
                      <div className="mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                        {tech.icon}
                      </div>
                      
                      {/* Tech Name */}
                      <h3 className="text-white text-base font-medium text-center group-hover:text-cyan-300 transition-colors duration-300">
                        {tech.name}
                      </h3>

                      {/* Subtle glow effect on hover */}
                      <div className="absolute inset-0 bg-cyan-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl">
            <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
            <div className="text-gray-300">Technologies</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl">
            <div className="text-3xl font-bold text-cyan-400 mb-2">1+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl">
            <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
            <div className="text-gray-300">Projects Built</div>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}