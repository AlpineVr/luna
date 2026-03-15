import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { projects } from '@/components/data/projects';

export default function ProjectDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');
  
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <SEO 
          title="Project Not Found"
          description="The requested project could not be found."
        />
        <div className="text-center">
          <p className="text-white/40 mb-4">Project not found</p>
          <Link to={createPageUrl('Projects')} className="text-white/70 hover:text-white underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const projectDescription = project.description || `${project.title} - ${project.client || ''} ${project.year || ''}. ${project.role || 'Lighting design project'}.`;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <SEO 
        title={project.title}
        description={projectDescription}
        image={project.image_url}
      />
      {/* Back Button */}
      <div className="pt-32 px-6 md:px-12 lg:px-20">
        <Link
          to={createPageUrl('Projects')}
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Image */}
      <section className="pt-12 px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="relative h-[60vh] rounded-3xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image_url})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Project Info */}
      <section className="pt-16 pb-12 px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8">
            {project.title}
          </h1>

          {/* Quick Info Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {project.client && (
              <div className="border-l border-white/20 pl-6">
                <div className="flex items-center gap-2 text-white/40 uppercase tracking-widest text-xs mb-2">
                  <User className="w-4 h-4" />
                  Client
                </div>
                <p className="text-lg text-white/80">{project.client}</p>
              </div>
            )}
            {project.role && (
              <div className="border-l border-white/20 pl-6">
                <div className="flex items-center gap-2 text-white/40 uppercase tracking-widest text-xs mb-2">
                  <User className="w-4 h-4" />
                  My Role
                </div>
                <p className="text-lg text-white/80">{project.role}</p>
              </div>
            )}
            {project.year && (
              <div className="border-l border-white/20 pl-6">
                <div className="flex items-center gap-2 text-white/40 uppercase tracking-widest text-xs mb-2">
                  <Calendar className="w-4 h-4" />
                  Year
                </div>
                <p className="text-lg text-white/80">{project.year}</p>
              </div>
            )}
            {project.tools && (
              <div className="border-l border-white/20 pl-6">
                <div className="flex items-center gap-2 text-white/40 uppercase tracking-widest text-xs mb-2">
                  <Wrench className="w-4 h-4" />
                  Tools
                </div>
                <p className="text-lg text-white/80">{project.tools}</p>
              </div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Description */}
      {project.description && (
        <section className="pb-12 px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-light mb-6 tracking-tight">About the Project</h2>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-white/70 leading-relaxed whitespace-pre-wrap">{project.description}</p>
            </div>
          </motion.div>
        </section>
      )}

      {/* Additional Images */}
      {project.additional_images && project.additional_images.length > 0 && (
        <section className="pb-12 px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-light mb-8 tracking-tight">Gallery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.additional_images.map((image, index) => (
                <div key={index} className="space-y-3">
                  <div className="relative aspect-video rounded-2xl overflow-hidden">
                    <img
                      src={image.url}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {image.photographer_credit && (
                    <p className="text-xs text-white/40 tracking-wider">
                      Photo: {image.photographer_credit}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Collaborators */}
      {project.collaborators && project.collaborators.length > 0 && (
        <section className="pb-32 px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-light mb-8 tracking-tight">Collaborators & Credits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.collaborators.map((collab, index) => (
                <div key={index} className="border border-white/10 rounded-xl p-6 bg-white/5">
                  <p className="text-lg font-light text-white mb-1">{collab.name}</p>
                  <p className="text-sm text-white/50 uppercase tracking-wider">{collab.role}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      <Footer />
    </div>
  );
}