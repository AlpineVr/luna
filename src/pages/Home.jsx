import React from 'react';
import HeroCarousel from '../components/portfolio/HeroCarousel';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { projects as allProjects } from '@/components/data/projects';

export default function Home() {
  // Filter only featured projects for home page
  const projects = allProjects.filter(p => p.featured_on_home);

  return (
    <>
      <SEO 
        title="Lighting Designer & Operator"
        description="Professional lighting design and operation for festivals, theatre, concerts, and live events. Specializing in GrandMA3, previsualisation, and technical documentation."
      />
      <HeroCarousel projects={projects} />
      <Footer />
    </>
  );
}