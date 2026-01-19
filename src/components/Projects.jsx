import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUp } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import nextarm from "../assets/nextarm.png"
import krist from "../assets/krist.png"
import zenbud from "../assets/zenbud.png"
import br from "../assets/br.png"
import event from "../assets/event.png"
import jumbo from "../assets/jumbo.png"
import internhub from "../assets/internhub.png"
import reactLogo from "../assets/react.svg";

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: "InternHub",
      description: "InternHub – A smart platform connecting students to internships, career roadmaps, and admin-managed opportunities across all fields.",
      Image: internhub,
      tags: ["React", "Tailwind", "Emailjs", "Mongodb"],
      liveUrl: "coming-soon",
      codeUrl: "https://github.com/abdullahrajpot/internhub.git",
      gradient: "from-purple-600 via-blue-600 to-cyan-500"
    },
    {
      id: 2,
      title: "Webchat",
      description: "WebChat combines live group chat with task management to boost teamwork and productivity.",
      Image: jumbo,
      tags: ["React", "Express", "Nodejs", "Material Ui", "Mongodb"],
      liveUrl: "https://webchat-dev.vercel.app/",
      codeUrl: "https://github.com/abdullahrajpot/webchat.git",
      gradient: "from-purple-600 via-blue-600 to-cyan-500"
    },
    {
      id: 3,
      title: "NextArm",
      description: "NextARM Web delivers cutting-edge web development, mobile apps, and cloud solutions to transform your business digitally",
      Image: nextarm,
      tags: ["React", "Tailwind", "Emailjs"],
      liveUrl: "https://next-arm-1.vercel.app/",
      codeUrl: "https://github.com/abdullahrajpot/next-arm-project.git",
      gradient: "from-purple-600 via-blue-600 to-cyan-500"
    },
    {
      id: 4,
      title: "Krist",
      description: "A full-stack food delivery platform with real-time order tracking and payment integration for seamless dining experience.",
      Image: krist,
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://lyrical-twist.surge.sh",
      codeUrl: "https://github.com/abdullahrajpot/Krist-store.git",
      gradient: "from-blue-500 via-purple-500 to-pink-500"
    },
    {
      id: 5,
      title: "Zenbud",
      description: "ZenBud is a comprehensive study app featuring task management, Pomodoro timer, Spotify integration, notepad, and AI chatbot assistant to help students study smarter and more efficiently.",
      Image: zenbud,
      tags: ["React Native", "Node.js", "FireBase"],
      liveUrl: "https://www.loom.com/share/d7de7724f79542b38522b6310795c539?sid=7aeb9ee7-4ea5-44be-b938-ad4d71ee58f9",
      codeUrl: "https://github.com/abdullahrajpot/Hackathon-App-Main.git",
      gradient: "from-orange-500 via-red-500 to-pink-500"
    },
    {
      id: 6,
      title: "Event Planner",
      description: "An event planner app with MongoDB-based authentication that allows users to securely log in and efficiently create, manage, and track all their personal or organizational events.",
      image: event,
      tags: ["React Native", "Node.js", "MongoDB"],
      liveUrl: "https://www.loom.com/share/23cf202efaf14766baffd40bc1cc8288?sid=762fc12a-42a3-4b6f-afd8-35debf474dc6",
      codeUrl: "https://github.com/abdullahrajpot/zenbud-main.git",
      gradient: "from-orange-500 via-red-500 to-pink-500"
    },
    {
      id: 7,
      title: "Br Architect",
      description: "A fully responsive architectural portfolio website developed using HTML, CSS, Bootstrap, and JavaScript with modern design aesthetics",
      image: br,
      tags: ["HTML", "Css", "Bootstrap", "Js"],
      liveUrl: "http://military-treatment.surge.sh",
      codeUrl: "https://github.com/abdullahrajpot/br-architect.git",
      gradient: "from-green-500 via-teal-500 to-blue-500"
    }
  ];

  const handleLiveClick = (e, project) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Live clicked:', project.title);
    
    if (project.liveUrl === "coming-soon") {
      toast.info("🚀 Coming Soon! This project is currently under development.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } else {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCodeClick = (e, project) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Code clicked:', project.title);
    window.open(project.codeUrl, '_blank', 'noopener,noreferrer');
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id='Projects' className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 px-4 relative">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>
      
      {/* Background Image */}
      <img
        src={reactLogo}
        alt="Background Logo"
        className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-xl opacity-10 blur-sm z-0"
        style={{ objectFit: 'contain' }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              My
            </span>
            <span className="text-white ml-2">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card */}
              <div className="relative backdrop-blur-sm bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}></div>

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  {project.Image || project.image ? (
                    <img
                      src={project.Image || project.image}
                      alt={project.title + ' background'}
                      className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
                    />
                  ) : null}
                  <div className={`absolute inset-0 bg-gradient-to-br  opacity-80 z-10`}></div>
                </div>

                {/* Card Content */}
                <div className="p-6 relative z-20">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={(e) => handleLiveClick(e, project)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 active:bg-cyan-700 transition-colors cursor-pointer touch-manipulation"
                      style={{ minHeight: '48px' }}
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </button>
                    <button
                      onClick={(e) => handleCodeClick(e, project)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 active:bg-gray-800 transition-colors cursor-pointer touch-manipulation"
                      style={{ minHeight: '48px' }}
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </button>
                  </div>
                </div>

                {/* Floating animation effect */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ${hoveredCard === project.id ? 'animate-ping' : ''}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll to top button */}
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 active:bg-cyan-700 transition-colors shadow-lg touch-manipulation"
          style={{ minHeight: '48px', minWidth: '48px' }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Projects;