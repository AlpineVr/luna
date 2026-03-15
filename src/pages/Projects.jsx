import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { projects } from '@/components/data/projects';

export default function Projects() {

  // Assign random sizes to create varied grid layout
  const projectsWithSizes = projects.map((project, index) => {
    const sizePatterns = [
      'col-span-1 row-span-1',
      'col-span-2 row-span-1',
      'col-span-1 row-span-2',
      'col-span-2 row-span-2',
    ];
    return {
      ...project,
      gridSize: sizePatterns[index % sizePatterns.length]
    };
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <SEO 
        title="Projects"
        description="A collection of lighting design work spanning festivals, theatre productions, concerts, and corporate events. View our portfolio of professional lighting projects."
      />
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
            Projects
          </h1>
          <div className="w-20 h-px bg-white/30 mb-6" />
          <p className="text-lg text-white/60 max-w-2xl">
            A collection of lighting design work spanning festivals, theatre productions, 
            concerts, and corporate events.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] gap-4">
            {projectsWithSizes.map((project, index) => (
              <Link
                key={project.id}
                to={createPageUrl(`ProjectDetail?id=${project.id}`)}
                className={`${project.gridSize} block`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full group relative overflow-hidden rounded-2xl cursor-pointer"
                >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image_url})` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Content - Shows on Hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-3">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-1.5 text-sm">
                    {project.client && (
                      <div className="flex items-center gap-3">
                        <span className="text-white/40 uppercase tracking-widest text-xs">Client</span>
                        <span className="text-white/80">{project.client}</span>
                      </div>
                    )}
                    {project.year && (
                      <div className="flex items-center gap-3">
                        <span className="text-white/40 uppercase tracking-widest text-xs">Year</span>
                        <span className="text-white/80">{project.year}</span>
                      </div>
                    )}
                    {project.category && (
                      <div className="flex items-center gap-3">
                        <span className="text-white/40 uppercase tracking-widest text-xs">Type</span>
                        <span className="text-white/80 capitalize">{project.category}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Title Badge - Always Visible */}
                <div className="absolute top-6 left-6 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <span className="px-4 py-2 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full text-sm tracking-wider">
                    {project.title}
                  </span>
                </div>
              </motion.div>
              </Link>
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/40 text-lg">No projects yet</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}