'use client';

import { Home, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Company: ['About Us', 'Careers', 'Press', 'Blog'],
  Properties: ['Residential', 'Commercial', 'New Developments', 'Luxury Homes'],
  Support: ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center">
                <Home className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg text-white">
                Aik<span className="text-emerald-400">Estate</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-6">
              Your trusted partner in finding the perfect property. Powered by AI, driven by expertise, committed to your satisfaction.
            </p>
            <div className="space-y-2">
              <a href="mailto:hello@aikestate.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                <Mail className="h-4 w-4" />
                hello@aikestate.com
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                <Phone className="h-4 w-4" />
                +1 (555) 123-4567
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 shrink-0" />
                123 Property Lane, Beverly Hills, CA 90210
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white text-sm mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} AikEstate. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Powered by AI Voice Technology
          </p>
        </div>
      </div>
    </footer>
  );
}
