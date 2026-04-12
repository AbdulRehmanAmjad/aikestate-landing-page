'use client';

import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Maximize, Heart, ArrowRight } from 'lucide-react';
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
    image: 'https://picsum.photos/seed/villa1/600/400',
    tag: 'Featured',
  },
  {
    id: 2,
    title: 'Downtown Penthouse',
    location: 'Manhattan, NY',
    price: '$1,890,000',
    beds: 3,
    baths: 2,
    area: '2,800 sqft',
    image: 'https://picsum.photos/seed/penthouse2/600/400',
    tag: 'New',
  },
  {
    id: 3,
    title: 'Coastal Beach House',
    location: 'Malibu, CA',
    price: '$3,200,000',
    beds: 4,
    baths: 3,
    area: '3,500 sqft',
    image: 'https://picsum.photos/seed/beach3/600/400',
    tag: 'Premium',
  },
  {
    id: 4,
    title: 'Suburban Family Home',
    location: 'Austin, TX',
    price: '$875,000',
    beds: 4,
    baths: 3,
    area: '3,100 sqft',
    image: 'https://picsum.photos/seed/family4/600/400',
    tag: 'Hot Deal',
  },
];

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, idx) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                  {property.tag}
                </span>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
                  <Heart className="h-4 w-4 text-gray-400 hover:text-red-500 transition-colors" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-1 text-gray-400 text-xs mb-1">
                  <MapPin className="h-3 w-3" />
                  {property.location}
                </div>
                <h3 className="font-semibold text-gray-900 text-base">{property.title}</h3>
                <p className="mt-2 text-xl font-bold text-emerald-600">{property.price}</p>
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

        {/* View All */}
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
            View All Properties
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
