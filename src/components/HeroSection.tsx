'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Home, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  const [searchType, setSearchType] = useState('All Types');
  const [searchLocation, setSearchLocation] = useState('');

  const handleSearch = () => {
    const propertiesSection = document.getElementById('properties');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax-like layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800" />
        {/* Animated decorative shapes */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-3xl"
        />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-emerald-200 text-sm font-medium rounded-full backdrop-blur-sm border border-white/10 mb-8">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            Trusted by 10,000+ homeowners
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1]"
        >
          Find Your
          <span className="block mt-2">
            Dream <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Home</span>
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-emerald-100/70 max-w-2xl mx-auto leading-relaxed"
        >
          Discover premium properties in the best neighborhoods. Your perfect home is just a conversation away with our AI-powered assistant.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-2 shadow-2xl shadow-black/20">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-xl focus-within:ring-2 focus-within:ring-emerald-500/30 transition-all">
                <MapPin className="h-5 w-5 text-emerald-600 shrink-0" />
                <input
                  type="text"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  placeholder="City, neighborhood, or address..."
                  className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <div className="flex gap-2">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-xl sm:w-44 focus-within:ring-2 focus-within:ring-emerald-500/30 transition-all">
                  <Home className="h-5 w-5 text-emerald-600 shrink-0" />
                  <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="bg-transparent text-sm text-gray-700 outline-none w-full cursor-pointer"
                  >
                    <option>All Types</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Condo</option>
                  </select>
                </div>
                <Button
                  onClick={handleSearch}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 rounded-xl shrink-0 shadow-md shadow-emerald-600/30"
                >
                  <Search className="h-5 w-5 sm:mr-2" />
                  <span className="hidden sm:inline">Search</span>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats with counter animation */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 grid grid-cols-3 gap-4 max-w-md mx-auto"
        >
          {[
            { value: '2,500+', label: 'Properties' },
            { value: '1,200+', label: 'Happy Clients' },
            { value: '98%', label: 'Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-xl sm:text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-[11px] text-emerald-200/50 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => {
          document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-white/40 uppercase tracking-widest group-hover:text-white/60 transition-colors">Scroll</span>
          <ChevronDown className="h-5 w-5 text-white/40 group-hover:text-white/60 transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  );
}
