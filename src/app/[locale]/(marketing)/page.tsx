/* eslint-disable @next/next/no-img-element */
'use client';
import HomeHeader from '@/components/HomeHeader';
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

export default function HomePage() {
  return (
    <MobileLayout>
      <HomeHeader />
      <div className="relative flex flex-col items-center w-full px-4 pb-[20px]">
        {/* Category Menu */}
        <MenuGrid />

        {/* Featured Dishes */}
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
