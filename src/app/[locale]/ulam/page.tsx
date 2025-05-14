import UlamHeader from '@/components/UlamHeader';
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
  {
    name: 'Kare-Kare',
    image: '/images/hero-image.jpg',
    description: 'Peanut stew with oxtail and vegetables.',
  },
  {
    name: 'Bicol Express',
    image: '/images/chefs.png',
    description: 'Spicy pork in coconut milk.',
  },
];

export default function UlamPage() {
  return (
    <MobileLayout hideNav={true}>
      <UlamHeader />
      <div className="flex flex-col items-center w-full px-4 pt-8">
        <h1 className="text-2xl font-bold mt-6 mb-2" style={{ color: 'var(--theme-primary-text)' }}>
          Ulam
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Discover delicious Filipino ulam (main dishes) from home chefs and cooks!
        </p>
        <div className="w-full mt-4">
          <h2 className="text-lg font-bold mb-6">Featured Dishes</h2>
          <div className="grid grid-cols-1 gap-4">
            {featuredDishes.map(dish => (
              <div
                key={dish.name}
                className="flex items-start bg-white rounded-lg"
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
