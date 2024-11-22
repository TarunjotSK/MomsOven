import React from 'react';
import { Phone, Mail, Clock, Instagram, Facebook, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+1234567890" className="flex items-center text-gray-600 hover:text-rose-600">
                <Phone size={18} className="mr-2" />
                (123) 456-7890
              </a>
              <a href="mailto:hello@luxurybakery.com" className="flex items-center text-gray-600 hover:text-rose-600">
                <Mail size={18} className="mr-2" />
                hello@luxurybakery.com
              </a>
              <div className="flex items-start text-gray-600">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Bakery Street<br />New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>Opening Hours</span>
              </div>
              <div className="ml-8 space-y-1">
                <p>Monday - Friday: 8:00 AM - 7:00 PM</p>
                <p>Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/momsovendoon/#" className="text-gray-600 hover:text-rose-600" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-rose-600">
                <Facebook size={24} />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Subscribe to our Newsletter</h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-gray-500 text-sm">
          <p> {new Date().getFullYear()} Mom's Oven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}