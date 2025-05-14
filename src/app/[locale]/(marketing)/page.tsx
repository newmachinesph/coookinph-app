import MenuGrid from '@/components/MenuGrid';
import MobileLayout from '@/layouts/MobileLayout';
import React from 'react';

const featuredDishes = [
  {
    name: 'Adobo',
    image: '/images/adobo.jpg',
    description: 'Classic Filipino chicken & pork stew.',
  },
  {
    name: 'Sinigang',
    image: '/images/sinigang.jpg',
    description: 'Tamarind soup with pork & vegetables.',
  },
  {
    name: 'Laing',
    image: '/images/laing.jpg',
    description: 'Taro leaves in coconut milk.',
  },
];

export default function HomePage() {
  return (
    <MobileLayout>
      <div className="flex flex-col items-center w-full px-4 pb-[80px]">
        {/* Search Bar */}
        <div className="w-full mt-6 mb-4">
          <input
            type="text"
            placeholder="What are you craving?"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Category Menu */}
        <MenuGrid />

        {/* Featured Dishes */}
        <div className="w-full">
          <h2 className="text-lg font-bold mb-3">Featured Dishes</h2>
          <div className="grid grid-cols-1 gap-4">
            {featuredDishes.map(dish => (
              <div
                key={dish.name}
                className="flex items-center bg-white rounded-lg shadow p-3"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <div className="font-semibold">{dish.name}</div>
                  <div className="text-sm text-gray-600">{dish.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
