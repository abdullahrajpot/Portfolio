import React, { useState, useEffect } from 'react';
import { Medal, Award, Trophy, Star, Image } from 'lucide-react';
import smit from '../assets/smit.jpg';

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample achievement data - replace with your actual data
  const achievements = [
    {
      id: 1,
      title: "SMit Web&App Hackathon 2024",
      description: "Completed Web&App Development from SMIT with interactive projects for final hackathon.",
      image:smit,
      icon: <Trophy className="w-8 h-8" />
    },
    {
      id: 2,
      title: "React Developer Certification",
      description: "Advanced React development with modern hooks and state management solutions.",
      image: "/api/placeholder/800/400",
      icon: <Medal className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Full Stack Project Award",
      description: "Built comprehensive full-stack applications with modern tech stack.",
      image: "/api/placeholder/800/400",
      icon: <Award className="w-8 h-8" />
    },
    {
      id: 4,
      title: "UI/UX Excellence",
      description: "Created stunning user interfaces with focus on user experience design.",
      image: "/api/placeholder/800/400",
      icon: <Star className="w-8 h-8" />
    }
  ];

  // Auto-advance slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === achievements.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [achievements.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === achievements.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? achievements.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id='Achievements' className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          {/* Main Image/Content Area */}
          <div className="relative h-96 md:h-[500px]">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                  index === currentIndex 
                    ? 'translate-x-0 opacity-100' 
                    : index < currentIndex 
                      ? '-translate-x-full opacity-0' 
                      : 'translate-x-full opacity-0'
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
                  <div className="max-w-2xl mx-auto px-8 text-white">
                    <div className="flex items-center justify-center mb-6">
                      <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white shadow-xl">
                        {achievement.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        {/* <div className="flex justify-center mt-8 space-x-3">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-cyan-400 w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div> */}

        {/* Progress Bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / achievements.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Achievement Counter */}
        <div className="text-center mt-6">
          <span className="text-gray-400 text-sm">
            {currentIndex + 1} / {achievements.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Achievements;