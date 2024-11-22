import React from 'react';
import { Cake } from '../types';

interface CakeCardProps {
  cake: Cake;
  onClick: () => void;
}

export function CakeCard({ cake, onClick }: CakeCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={cake.images[0]} 
          alt={cake.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{cake.name}</h3>
        <p className="mt-2 text-2xl font-bold text-rose-600">${cake.price}</p>
        <p className="mt-1 text-sm text-gray-500">Serves {cake.servings} people</p>
      </div>
    </div>
  );
}