'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Bed, Bath, Maximize, Heart, ArrowRight, X, Phone, Calendar, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const properties = [
  {
    id: 1,
    title: 'Modern Luxury Villa',
    location: 'Beverly Hills, CA',
    price: '$2,450,000',
    beds: 5,
    baths: 4,
    area: '4,200 sqft',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=500&fit=crop&q=80',
    tag: 'Featured',
    tagColor: 'bg-emerald-600',
    description: 'Stunning contemporary villa with infinity pool, panoramic city views, and smart home technology throughout. Features a gourmet kitchen, home theater, and lush landscaped gardens.',
  },
  {
    id: 2,
    title: 'Downtown Penthouse',
    location: 'Manhattan, NY',
    price: '$1,890,000',
    beds: 3,
    baths: 2,
    area: '2,800 sqft',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=500&fit=crop&q=80',
    tag: 'New',
    tagColor: 'bg-amber-500',
    description: 'Luxury penthouse with floor-to-ceiling windows, skyline views, and premium finishes throughout. Walking distance to top restaurants and entertainment.',
  },
  {
    id: 3,
    title: 'Coastal Beach House',
    location: 'Malibu, CA',
    price: '$3,200,000',
    beds: 4,
    baths: 3,
    area: '3,500 sqft',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=500&fit=crop&q=80',
    tag: 'Premium',
    tagColor: 'bg-violet-600',
    description: 'Beachfront property with direct ocean access, private deck, and breathtaking sunset views. Perfect for those seeking the ultimate coastal lifestyle.',
  },
  {
    id: 4,
    title: 'Suburban Family Home',
    location: 'Austin, TX',
    price: '$875,000',
    beds: 4,
    baths: 3,
    area: '3,100 sqft',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop&q=80',
    tag: 'Hot Deal',
    tagColor: 'bg-rose-500',
    description: 'Spacious family home in top-rated school district with large backyard, modern kitchen, and energy-efficient features throughout. A true gem!',
  },
];

export default function FeaturedProperties() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [selectedProperty, setSelectedProperty] = useState<typeof properties[0] | null>(null);

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="properties" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
            Our Properties
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Featured Listings
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Explore our handpicked selection of premium properties, each offering unique features and exceptional value in prime locations.
          </p>
        </motion.div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, idx) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedProperty(property)}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-gray-200">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                          <svg class="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                          </svg>
                        </div>`;
                    }
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                <span className={`absolute top-3 left-3 px-3 py-1 ${property.tagColor} text-white text-xs font-semibold rounded-full shadow-sm`}>
                  {property.tag}
                </span>
                <button
                  onClick={(e) => toggleFavorite(property.id, e)}
                  className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all cursor-pointer shadow-sm hover:scale-110"
                >
                  <Heart className={`h-4 w-4 transition-colors ${favorites.has(property.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-1 text-gray-400 text-xs mb-1.5">
                  <MapPin className="h-3 w-3" />
                  {property.location}
                </div>
                <h3 className="font-semibold text-gray-900">{property.title}</h3>
                <p className="mt-2 text-2xl font-bold text-emerald-600">{property.price}</p>
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Bed className="h-3.5 w-3.5" />
                      {property.beds} Beds
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="h-3.5 w-3.5" />
                      {property.baths} Baths
                    </span>
                  </div>
                  <span className="flex items-center gap-1">
                    <Maximize className="h-3.5 w-3.5" />
                    {property.area}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All - scrolls to contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 rounded-xl"
            onClick={scrollToContact}
          >
            View All Properties
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      {/* Property Detail Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProperty(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-56 bg-gray-200">
                <img
                  src={selectedProperty.image}
                  alt={selectedProperty.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="absolute top-3 right-3 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center hover:bg-white cursor-pointer shadow-sm"
                >
                  <X className="h-4 w-4 text-gray-600" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 ${selectedProperty.tagColor} text-white text-xs font-semibold rounded-full`}>
                    {selectedProperty.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 text-gray-400 text-sm mb-1">
                  <MapPin className="h-4 w-4" />
                  {selectedProperty.location}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{selectedProperty.title}</h3>
                <p className="mt-2 text-3xl font-bold text-emerald-600">{selectedProperty.price}</p>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">{selectedProperty.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5"><Bed className="h-4 w-4" /> {selectedProperty.beds} Beds</span>
                  <span className="flex items-center gap-1.5"><Bath className="h-4 w-4" /> {selectedProperty.baths} Baths</span>
                  <span className="flex items-center gap-1.5"><Maximize className="h-4 w-4" /> {selectedProperty.area}</span>
                </div>
                <div className="mt-6 flex gap-3">
                  <Button
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl"
                    onClick={() => {
                      setSelectedProperty(null);
                      scrollToContact();
                    }}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Visit
                  </Button>
                  <Button variant="outline" className="rounded-xl border-gray-200" onClick={(e) => { toggleFavorite(selectedProperty.id, e); }}>
                    <Heart className={`h-4 w-4 ${favorites.has(selectedProperty.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                  <Button variant="outline" className="rounded-xl border-gray-200">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
