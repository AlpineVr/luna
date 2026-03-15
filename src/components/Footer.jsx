import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Horizontal Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-8">
            {/* Left - Social Links */}
            <div className="flex items-center gap-6 justify-center lg:justify-start">
              <a
                href="https://www.instagram.com/darcythripp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/darcythripplx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Center - Logo */}
            <div className="flex justify-center">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943951666ddcf725fc087e7/8b7f7f3a2_output-onlinepngtools1.png"
                alt="Darcy Thripp LX"
                className="h-12 w-12 object-contain opacity-80"
              />
            </div>

            {/* Right - Copyright */}
            <div className="flex flex-col items-center lg:items-end justify-center lg:justify-end gap-1">
              <p className="text-xs text-white/30 tracking-wider">
                © {new Date().getFullYear()} Darcy Thripp LX
              </p>
              <p className="text-xs text-white/20 tracking-wider">
                ABN 11768701172
              </p>
            </div>
          </div>

          {/* Acknowledgement of Country - Full Width Below */}
          <div className="pt-8 border-t border-white/5">
            <p className="text-xs text-white/40 leading-relaxed text-center max-w-4xl mx-auto">
              We acknowledge the Traditional Custodians of the lands on which we work and live, 
              and pay our respects to Elders past, present and emerging. We celebrate the stories, 
              culture and traditions of Aboriginal and Torres Strait Islander peoples of all communities 
              who also work and live on this land.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}