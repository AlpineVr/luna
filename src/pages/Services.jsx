import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Services() {
  const services = [
    {
      title: 'Design',
      description: 'Creating comprehensive lighting designs that transform spaces and enhance the emotional impact of every performance. Working primarily with GrandMA3, I develop lighting solutions from concept through to final documentation, crafting designs that serve the artistic vision while maintaining technical excellence.',
      imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943951666ddcf725fc087e7/0d63996d3_IMG_4378.jpg',
    },
    {
      title: 'Operation',
      description: 'Expert operation of lighting systems with specialization in GrandMA3 and other major control platforms. Delivering precise, creative control during live performances, ensuring seamless execution of the lighting design from rehearsal through to final show.',
      imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943951666ddcf725fc087e7/480920125_webjpg.jpg',
    },
    {
      title: 'Previsualisation',
      description: 'Advanced 3D previsualisation services using Depence R4 and Capture. Visualize and refine your lighting design before installation, allowing you to explore creative possibilities and make informed decisions while saving time and resources.',
      imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943951666ddcf725fc087e7/268cad6c9_Screenshot2025-12-30114419.png',
    },
    {
      title: 'Technical Documentation & Planning',
      description: 'Comprehensive technical drawings and site planning using Vectorworks. Detailed rigging plans, power distribution schematics, and equipment layouts that ensure safe, efficient, and effective installations for any scale of production.',
      imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943951666ddcf725fc087e7/b5c0155e3_Screenshot2025-12-29192116.png',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <SEO 
        title="Services"
        description="Comprehensive lighting solutions for festivals, theatre, concerts, and live events. Specializing in design, operation, previsualisation, and technical documentation with GrandMA3, Depence R4, and Vectorworks."
      />
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
            Services
          </h1>
          <div className="w-20 h-px bg-white/30 mb-12" />
          <p className="text-xl text-white/70 leading-relaxed max-w-3xl">
            Comprehensive lighting solutions for festivals, theatre, concerts, and live events. 
            From initial concept to final execution, I bring technical expertise and creative 
            vision to every project.
          </p>
        </motion.div>
      </section>

      {/* Services Sections */}
      <section className="pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 ${
                    isEven ? 'lg:col-start-1' : 'lg:col-start-2'
                  }`}
                >
                  {service.imageUrl ? (
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-white/30 text-sm tracking-wider uppercase">
                        {service.title} image
                      </p>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div
                  className={`space-y-6 ${
                    isEven ? 'lg:col-start-2' : 'lg:col-start-1'
                  }`}
                >
                  <div>
                    <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                      {service.title}
                    </h2>
                    <div className="w-16 h-px bg-white/30 mb-8" />
                  </div>
                  <p className="text-lg text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-32 px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="border border-white/10 rounded-3xl p-12 md:p-16 bg-white/5 backdrop-blur-sm">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Ready to Light Up Your Next Project?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with creative and technical lighting solutions.
            </p>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-lg hover:bg-white/90 transition-all duration-300 text-lg font-light group"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}