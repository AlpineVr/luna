import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <SEO 
        title="About"
        description="Professional lighting designer with over three years of experience creating immersive visual experiences for festivals, theatrical productions, and live events across Australia."
      />
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
            About Darcy
          </h1>
          <div className="w-20 h-px bg-white/30 mb-12" />
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="pb-32 px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-16"
        >
          {/* Featured Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943951666ddcf725fc087e7/61de0a7f8_IMG_4316.png"
              alt="Darcy at work"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              Darcy is a lighting designer specializing in creating immersive visual experiences 
              for festivals, theatrical productions, and live events. With over a three years 
              of experience in the industry, I bring technical expertise and artistic 
              vision to every project.
            </p>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              My work spans from intimate theatre productions to large-scale music festivals, 
              always focusing on how light can transform spaces and enhance emotional connections 
              with audiences.
            </p>
          </div>

          {/* Expertise */}
          <div>
            <h2 className="text-2xl md:text-3xl font-light mb-8 tracking-tight">Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Festival Lighting', desc: 'Large-scale outdoor and indoor festival productions' },
                { title: 'Theatre Design', desc: 'Dramatic lighting for stage performances' },
                { title: 'Previsualisation', desc: 'Ensuring exceptional lighting outcomes before anyone hits the stage' },
                { title: 'Technical Direction', desc: 'Pre-production planning and execution' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="border-l border-white/20 pl-6"
                >
                  <h3 className="text-lg font-light mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools & Software */}
          <div>
            <h2 className="text-2xl md:text-3xl font-light mb-8 tracking-tight">Tools & Software</h2>
            <div className="flex flex-wrap gap-3">
              {['GrandMA3', 'GrandMA2','ETC Eos', 'Depence R4', 'Vectorworks', 'Capture', 'Resolume', 'QLab',].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 border border-white/20 text-sm tracking-wider text-white/70"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}