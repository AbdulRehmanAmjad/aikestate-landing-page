'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  onOpenAssistant?: () => void;
}

export default function CTASection({ onOpenAssistant }: CTASectionProps) {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"
        />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-emerald-200 text-sm font-medium rounded-full backdrop-blur-sm border border-white/10 mb-8"
          >
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            Limited Time Offer
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to Find Your
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              Perfect Home?
            </span>
          </h2>

          <p className="mt-6 text-lg text-emerald-100/70 max-w-2xl mx-auto leading-relaxed">
            Schedule a free consultation with our experts or chat with our AI assistant right now. Your dream property is waiting for you.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 rounded-xl text-base shadow-lg shadow-amber-500/30 h-12"
              onClick={scrollToContact}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Visit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 rounded-xl text-base h-12 backdrop-blur-sm"
              onClick={() => {
                window.dispatchEvent(new CustomEvent('open-voice-assistant'));
              }}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat with AI Assistant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="mt-8 text-sm text-emerald-200/40">
            No commitment required. Free consultation available 24/7.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
