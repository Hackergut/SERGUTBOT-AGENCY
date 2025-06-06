import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  MessageCircle, 
  Bot, 
  Zap, 
  Users, 
  Check, 
  ArrowRight, 
  ChevronDown,
  Star,
  Clock,
  Shield
} from 'lucide-react';
import Hero from './Hero';
import Services from './Services';
import HowItWorks from './HowItWorks';
import Portfolio from './Portfolio';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Footer from './Footer';

const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
            >
              SergutBot Agency
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <a href="#servizi" className="hover:text-yellow-400 transition-colors">Servizi</a>
              <a href="#come-funziona" className="hover:text-yellow-400 transition-colors">Come Funziona</a>
              <a href="#prezzi" className="hover:text-yellow-400 transition-colors">Prezzi</a>
              <a href="#contatti" className="hover:text-yellow-400 transition-colors">Contatti</a>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full font-semibold"
            >
              Consulenza Gratuita
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* How It Works */}
      <HowItWorks />

      {/* Portfolio */}
      <Portfolio />

      {/* Pricing */}
      <Pricing />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;