import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroCarousel({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === projects.length - 1 ? 0 : prevIndex + 1;
      }
      return prevIndex === 0 ? projects.length - 1 : prevIndex - 1;
    });
  }, [projects.length]);

  useEffect(() => {
    if (projects.length <= 1) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [paginate, projects.length]);

  if (!projects || projects.length === 0) {
    return (
      <div className="h-screen w-full bg-[#0a0a0a] flex items-center justify-center">
        <p className="text-white/40 text-lg tracking-widest uppercase">No projects yet</p>
      </div>
    );
  }

  const currentProject = projects[currentIndex];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
      {/* Main Image */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 0.8, ease: [0.32, 0.72, 0, 1] },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentProject.image_url})` }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Project Info - Bottom Right */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute bottom-12 right-12 md:bottom-20 md:right-20 z-10 text-right"
        >
          <div className="space-y-4">
            <motion.h2 
              className="text-4xl md:text-6xl font-light text-white tracking-tight"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {currentProject.title}
            </motion.h2>
            
            <div className="space-y-2 text-white/70">
              {currentProject.client && (
                <div className="flex items-center justify-end gap-3">
                  <span className="text-xs tracking-[0.3em] uppercase text-white/40">Client</span>
                  <span className="text-sm md:text-base font-light">{currentProject.client}</span>
                </div>
              )}
              {currentProject.tools && (
                <div className="flex items-center justify-end gap-3">
                  <span className="text-xs tracking-[0.3em] uppercase text-white/40">Tools</span>
                  <span className="text-sm md:text-base font-light">{currentProject.tools}</span>
                </div>
              )}
              {currentProject.year && (
                <div className="flex items-center justify-end gap-3">
                  <span className="text-xs tracking-[0.3em] uppercase text-white/40">Year</span>
                  <span className="text-sm md:text-base font-light">{currentProject.year}</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {projects.length > 1 && (
        <>
          <button
            onClick={() => paginate(-1)}
            className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 p-3 text-white/50 hover:text-white transition-colors duration-300 group"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 stroke-[1]" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 p-3 text-white/50 hover:text-white transition-colors duration-300 group"
            aria-label="Next project"
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10 stroke-[1]" />
          </button>
        </>
      )}

      {/* Slide Indicators */}
      {projects.length > 1 && (
        <div className="absolute bottom-12 left-12 md:bottom-20 md:left-20 z-10 flex items-center gap-3">
          <span className="text-white/40 text-xs tracking-[0.3em] uppercase">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <div className="w-12 h-px bg-white/20 relative overflow-hidden">
            <motion.div 
              className="absolute inset-y-0 left-0 bg-white/70"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 6, ease: 'linear' }}
              key={currentIndex}
            />
          </div>
          <span className="text-white/40 text-xs tracking-[0.3em] uppercase">
            {String(projects.length).padStart(2, '0')}
          </span>
        </div>
      )}
    </div>
  );
}