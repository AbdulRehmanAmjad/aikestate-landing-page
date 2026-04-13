'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-emerald-200 text-sm font-medium rounded-full backdrop-blur-sm border border-white/10 mb-6">
            Limited Time Offer
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to Find Your
            <span className="block text-amber-400">Perfect Home?</span>
          </h2>

          <p className="mt-6 text-lg text-emerald-100/80 max-w-2xl mx-auto">
            Schedule a free consultation with our experts or chat with our AI assistant right now. Your dream property is waiting for you.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 rounded-xl text-base">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Visit
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 rounded-xl text-base">
              Chat with AI Assistant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="mt-6 text-sm text-emerald-200/50">
            No commitment required. Free consultation available 24/7.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
