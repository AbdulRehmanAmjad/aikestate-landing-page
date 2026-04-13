'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'First-time Buyer',
    content: 'AikEstate made buying my first home an absolute breeze. The AI assistant answered all my questions instantly, and the agents were incredibly supportive throughout the entire process. I couldn\'t have asked for a better experience!',
    rating: 5,
    avatar: 'https://picsum.photos/seed/sarah1/100/100',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Property Investor',
    content: 'As someone who invests in multiple properties, I need quick, accurate information. AikEstate\'s AI voice assistant is a game-changer - I can get property details and schedule visits while on the go. Highly recommend for serious investors.',
    rating: 5,
    avatar: 'https://picsum.photos/seed/michael2/100/100',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Happy Homeowner',
    content: 'We were relocating from another state and couldn\'t visit properties in person. The virtual tours and AI-powered Q&A sessions helped us make confident decisions remotely. We found our dream home without ever stepping foot in the city!',
    rating: 5,
    avatar: 'https://picsum.photos/seed/emily3/100/100',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
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
              Testimonials
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Don&apos;t just take our word for it. Hear from the thousands of homeowners and investors who have found success with AikEstate.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative group hover:shadow-lg transition-all duration-300"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-emerald-100" />
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
