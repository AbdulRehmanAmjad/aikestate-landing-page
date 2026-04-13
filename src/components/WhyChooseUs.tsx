'use client';

import { motion } from 'framer-motion';
import { Shield, TrendingUp, MapPin, Headphones, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Trusted Agents',
    description: 'Our verified agents bring years of expertise and a commitment to transparency, ensuring your property journey is safe and reliable at every step.',
    color: 'bg-emerald-50 text-emerald-600',
    borderColor: 'group-hover:border-emerald-200',
  },
  {
    icon: TrendingUp,
    title: 'Best Prices',
    description: 'We leverage market analytics and deep industry connections to secure the most competitive prices, saving you thousands on your dream property.',
    color: 'bg-amber-50 text-amber-600',
    borderColor: 'group-hover:border-amber-200',
  },
  {
    icon: MapPin,
    title: 'Premium Locations',
    description: 'From bustling city centers to serene suburban retreats, our curated portfolio spans the most sought-after neighborhoods and emerging hotspots.',
    color: 'bg-rose-50 text-rose-600',
    borderColor: 'group-hover:border-rose-200',
  },
  {
    icon: Headphones,
    title: '24/7 AI Support',
    description: 'Our AI voice assistant is always ready to answer your questions, schedule visits, and guide you through the process anytime, day or night.',
    color: 'bg-violet-50 text-violet-600',
    borderColor: 'group-hover:border-violet-200',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-gray-50">
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
            Why Choose Us
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            The AikEstate Advantage
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            We combine cutting-edge AI technology with deep real estate expertise to deliver an unmatched experience for buyers and sellers alike.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${feature.borderColor}`}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-5`}
              >
                <feature.icon className="h-7 w-7" />
              </motion.div>
              <h3 className="font-bold text-gray-900 text-lg">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
