import React, { useState } from 'react';
import { Menu as MenuIcon } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { CakeCard } from './components/CakeCard';
import { CakeModal } from './components/CakeModal';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { cakes } from './data/cakes';
import { Cake } from './types';
import { Cake as CakeIcon } from 'lucide-react';

const stripePromise = loadStripe('your_publishable_key');

function App() {
  const [selectedCake, setSelectedCake] = useState<Cake | null>(null);
  const [deliveryDate, setDeliveryDate] = useState<Date>(new Date());
  const [orderNotes, setOrderNotes] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCheckout = async () => {
    if (!selectedCake) return;

    const stripe = await stripePromise;
    if (!stripe) return;

    alert(`Processing payment for ${selectedCake.name}\nDelivery on ${deliveryDate.toLocaleDateString()}\nNotes: ${orderNotes}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
               <CakeIcon className="h-8 w-8 text-rose-600" /> 
              {/* <img src={logo} alt="Logo" className="h-8 w-8" /> */}
              <h1 className="text-2xl font-bold text-gray-900">Mom's Oven</h1>
            </div>
            <nav className="flex items-center">
              <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-600 hover:text-rose-600 transition-colors">
                  <MenuIcon className="h-6 w-6" />
                </button>
              </div>
              <div className={`absolute top-16 left-0 right-0 md:static md:flex md:space-x-8 ${isMenuOpen ? 'block' : 'hidden'}`}>
                <a href="#featured" className="block px-4 py-2 text-gray-600 hover:text-rose-600 transition-colors">Our Cakes</a>
                <a href="#about" className="block px-4 py-2 text-gray-600 hover:text-rose-600 transition-colors">About</a>
                <a href="#contact" className="block px-4 py-2 text-gray-600 hover:text-rose-600 transition-colors">Contact</a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="flex-1 pt-24">
        <section id="featured" className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Signature Cakes</h2>
              <p className="mt-4 text-lg text-gray-600">
                Handcrafted with love and the finest ingredients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cakes.map((cake) => (
                <CakeCard
                  key={cake.id}
                  cake={cake}
                  onClick={() => setSelectedCake(cake)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal */}
      {selectedCake && (
        <CakeModal
          cake={selectedCake}
          onClose={() => {
            setSelectedCake(null);
            setOrderNotes('');
          }}
          deliveryDate={deliveryDate}
          onDateChange={setDeliveryDate}
          orderNotes={orderNotes}
          onNotesChange={setOrderNotes}
          onCheckout={handleCheckout}
        />
      )}
    </div>
  );
}

export default App;