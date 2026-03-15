import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Contact() {

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <SEO 
        title="Contact"
        description="Get in touch to discuss your lighting project. Available for festivals, theatre productions, concerts, and live events nationwide. Email: darcy@darcythripp.com.au"
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
            Let's Work Together
          </h1>
          <div className="w-20 h-px bg-white/30 mb-12" />
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-2xl font-light mb-8">Get in Touch</h2>
              <p className="text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
                Whether you're planning a festival, theatre production, or live event, 
                I'd love to hear about your project and discuss how we can bring your 
                vision to light.
              </p>
              
              {/* Email Button */}
              <Button
                asChild
                className="bg-white text-black hover:bg-white/90 transition-colors text-lg px-8 py-6 h-auto"
              >
                <a href="mailto:darcy@darcythripp.com.au">
                  <Mail className="w-5 h-5 mr-3" />
                  Email Me
                </a>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
              <div className="flex flex-col items-center text-center gap-3">
                <Mail className="w-6 h-6 text-white/40" />
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Email</p>
                  <a href="mailto:darcy@darcythripp.com.au" className="text-white/70 hover:text-white transition-colors text-sm">
                    darcy@darcythripp.com.au
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <Phone className="w-6 h-6 text-white/40" />
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Phone</p>
                  <a href="tel:0473588607" className="text-white/70 hover:text-white transition-colors text-sm">
                    +61 0473 588 607
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <MapPin className="w-6 h-6 text-white/40" />
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Location</p>
                  <p className="text-white/70 text-sm">
                    Available for projects nationwide
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}