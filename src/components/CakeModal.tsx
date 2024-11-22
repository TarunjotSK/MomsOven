import React from 'react';
import { X } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Cake } from '../types';
import { addDays, isBefore } from 'date-fns';
import { ImageCarousel } from './ImageCarousel';

interface CakeModalProps {
  cake: Cake;
  onClose: () => void;
  deliveryDate: Date;
  onDateChange: (date: Date) => void;
  orderNotes: string;
  onNotesChange: (notes: string) => void;
  onCheckout: () => void;
}

export function CakeModal({ 
  cake, 
  onClose, 
  deliveryDate, 
  onDateChange, 
  orderNotes,
  onNotesChange,
  onCheckout 
}: CakeModalProps) {
  const minDate = addDays(new Date(), 2); // Minimum 2 days notice

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-y-auto max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <X size={24} />
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <ImageCarousel images={cake.images} alt={cake.name} />
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">{cake.name}</h2>
            <p className="text-3xl font-bold text-rose-600">${cake.price}</p>
            <p className="text-gray-600">{cake.description}</p>
            
            <div>
              <h3 className="font-semibold mb-2">Ingredients:</h3>
              <div className="flex flex-wrap gap-2">
                {cake.ingredients.map((ingredient) => (
                  <span 
                    key={ingredient}
                    className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Allergens:</h3>
              <div className="flex flex-wrap gap-2">
                {cake.allergens.map((allergen) => (
                  <span 
                    key={allergen}
                    className="px-2 py-1 bg-rose-100 text-rose-700 rounded-full text-sm"
                  >
                    {allergen}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Select Delivery Date:</h3>
              <DatePicker
                selected={deliveryDate}
                onChange={onDateChange}
                minDate={minDate}
                filterDate={date => !isBefore(date, minDate)}
                className="w-full p-2 border rounded-lg"
                dateFormat="MMMM d, yyyy"
              />
            </div>

            <div>
              <h3 className="font-semibold mb-2">Special Instructions:</h3>
              <textarea
                value={orderNotes}
                onChange={(e) => onNotesChange(e.target.value)}
                placeholder="Add any special requests or notes for your order (e.g., custom message, dietary requirements)..."
                className="w-full p-2 border rounded-lg h-24 resize-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
            </div>
            
            <button
              onClick={onCheckout}
              className="w-full py-3 px-4 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}