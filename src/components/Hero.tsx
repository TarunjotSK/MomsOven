import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&q=80&w=2070")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Artisanal Cakes for Your Special Moments
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Experience the perfect blend of flavors, crafted with passion and the finest ingredients.
            Each cake tells a unique story of elegance and taste.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#featured"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-rose-600 hover:bg-rose-700 transition-colors"
            >
              Explore Our Cakes
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-white px-6 py-3 border-2 border-white text-base font-medium rounded-lg text-grey-900 hover:bg-gray-50 hover:text-black transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full text-gray-50 h-16"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M0 100 C 20 0 50 0 100 100 Z" />
        </svg>
      </div>
    </div>
  );
}