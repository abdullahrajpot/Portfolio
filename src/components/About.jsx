import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, School } from 'lucide-react';

export default function About() {
  const achievements = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Bachelor of Software Engineering",
      institution: "University Of Agriculture Faisalabad",
      grade: "3.8 CGPA",
      duration: "2023 - 2027",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Intermediate with ICS",
      institution: "Students Inn College Faisalabad",
      grade: "80%",
      duration: "2021 - 2023",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: <School className="w-8 h-8" />,
      title: "Faisalabad Board of Secondary Education",
      institution: "Dar-e-Arqam School Faisalabad",
      grade: "94%",
      duration: "2019 - 2021",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.4
      }
    }
  };

  return (
    <section id='About' className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
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
            <span className="text-cyan-400">About</span>{' '}
            <span className="text-white">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I am Abdullah Tariq, a passionate Full-Stack MERN Developer, Web&App Developer, and 
            UI/UX designer. I thrive on building scalable web applications and exploring the latest technologies.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Card Background with Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 h-full">
                {/* Icon Circle */}
                <div className="flex justify-center mb-6">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}>
                    {/* Glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                    <div className="text-white relative z-10">
                      {achievement.icon}
                    </div>
                    {/* Animated particles around icon */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-ping"></div>
                      <div className="absolute top-4 right-3 w-1 h-1 bg-cyan-300 rounded-full animate-ping delay-300"></div>
                      <div className="absolute bottom-3 left-4 w-1 h-1 bg-blue-300 rounded-full animate-ping delay-700"></div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {achievement.institution}
                  </p>
                  <div className="flex justify-center items-center space-x-3">
                    <span className={`text-lg font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                      {achievement.grade}
                    </span>
                    <span className="text-gray-400">|</span>
                    <span className="text-cyan-400 font-medium">
                      {achievement.duration}
                    </span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full opacity-30 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 font-medium">Currently pursuing Software Engineering</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}