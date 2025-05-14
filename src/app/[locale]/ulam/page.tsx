import CuisineTypeSlider from '@/components/CuisineTypeSlider';
import UlamHeader from '@/components/UlamHeader';
import MobileLayout from '@/layouts/MobileLayout';
import React from 'react';

const cuisineTypes = [
  { name: 'Filipino', image: '/images/adobo.jpg' },
  { name: 'Chinese', image: '/images/makati.jpg' },
  { name: 'Japanese', image: '/images/chefs.png' },
  { name: 'Korean', image: '/images/hero-image.jpg' },
  { name: 'Western', image: '/images/diy-box.png' },
  { name: 'Indian', image: '/images/laing.jpg' },
  { name: 'Thai', image: '/images/sinigang.jpg' },
];

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

const homeCooks = [
  {
    name: 'Aling Maria',
    image: '/images/aling-maria.jpg',
    bio: 'Known for her authentic Adobo and warm hospitality.',
    location: 'Manila',
    specialty: 'Adobo, Menudo',
  },
  {
    name: 'Mang Lito',
    image: '/images/mang-lito.jpg',
    bio: 'Expert in grilled dishes and Filipino BBQ.',
    location: 'Quezon City',
    specialty: 'Inihaw, BBQ',
  },
  {
    name: 'Nanay Fe',
    image: '/images/nanay-fe.jpg',
    bio: 'Loves cooking hearty stews for her family and neighbors.',
    location: 'Cavite',
    specialty: 'Kare-Kare, Sinigang',
  },
  {
    name: 'Chef Ana',
    image: '/images/chefs.png',
    bio: 'Fusion cook blending Filipino and Western flavors.',
    location: 'Makati',
    specialty: 'Fusion, Pasta',
  },
  {
    name: 'Tita Rose',
    image: '/images/hero-image.jpg',
    bio: 'Passionate about traditional recipes passed down generations.',
    location: 'Taguig',
    specialty: 'Laing, Bicol Express',
  },
];

export default function UlamPage() {
  return (
    <MobileLayout hideNav={true}>
      <UlamHeader />
      <div className="flex flex-col items-center w-full pt-8">
        <div className="w-full">
          <h1 className="text-2xl font-bold mt-6 mb-2 px-4" style={{ color: 'var(--theme-primary-text)' }}>
            Ulam
          </h1>
          <p className="text-gray-700 text-center mb-6 px-4">
            Discover delicious Filipino ulam (main dishes) from home chefs and cooks!
          </p>
        </div>

        {/* Cuisine Types Slider Section */}
        <CuisineTypeSlider cuisineTypes={cuisineTypes} />

        <div className="w-full mt-4 px-4">
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

        {/* Home Cook Profiles Section */}
        <div className="w-full mt-8 px-4">
          <h2 className="text-lg font-bold mb-6">Home Cooks</h2>
          <div className="grid grid-cols-1 gap-4">
            {homeCooks.map(cook => (
              <div
                key={cook.name}
                className="flex items-center bg-white rounded-lg "
              >
                <img
                  src={cook.image}
                  alt={cook.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <div className="font-semibold text-base">{cook.name}</div>
                  <div className="text-xs text-gray-500 mb-1">
                    {cook.location}
                    {' '}
                    &middot;
                    {' '}
                    <span className="italic">{cook.specialty}</span>
                  </div>
                  <div className="text-sm text-gray-600">{cook.bio}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
