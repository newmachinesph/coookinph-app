/* eslint-disable @next/next/no-img-element */
'use client';
import HomeHeader from '@/components/HomeHeader';
import MenuGrid from '@/components/MenuGrid';
import MobileLayout from '@/layouts/MobileLayout';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const featuredDishes = [
  { name: 'Adobo', image: '/images/adobo.jpg', description: 'Filipino favorite' },
  { name: 'Sinigang', image: '/images/sinigang.jpg', description: 'Sour soup with pork' },
  { name: 'Laing', image: '/images/laing.jpg', description: 'Taro in coconut milk' },
];

const hotNow = [
  { name: 'Laing', image: '/images/laing.jpg' },
  { name: 'Sinigang', image: '/images/sinigang.jpg' },
  { name: 'Adobo', image: '/images/adobo.jpg' },
];

const reorderAgain = [
  { name: 'Sinigang', cook: 'Nanay Fe', image: '/images/sinigang.jpg' },
  { name: 'Laing', cook: 'Mang Lito', image: '/images/laing.jpg' },
];

const homeCooks = [
  {
    name: 'Aling Maria',
    image: '/images/aling-maria.jpg',
    location: 'Manila',
    specialty: 'Adobo, Menudo',
  },
  {
    name: 'Nanay Fe',
    image: '/images/nanay-fe.jpg',
    location: 'Cavite',
    specialty: 'Kare-Kare, Sinigang',
  },
  {
    name: 'Mang Lito',
    image: '/images/mang-lito.jpg',
    location: 'Quezon City',
    specialty: 'BBQ, Inihaw',
  },
  {
    name: 'Tita Rose',
    image: '/images/hero-image.jpg',
    location: 'Taguig',
    specialty: 'Laing, Bicol Express',
  },
];

export default function HomePage() {
  return (
    <MobileLayout>
      <HomeHeader />

      <div className="relative flex flex-col w-full">
        {' '}
        {/* reduced padding from px-4 to px-3 */}

        {/* Menu Categories */}
        <div className="px-2">
          <MenuGrid />
        </div>

        {/* 🔥 Hot Now (Swiper portrait scroll) */}
        <div className="mt-5">
          <h2 className="text-base font-semibold mb-2 px-2">🔥 Hot Now</h2>

          <Swiper
            spaceBetween={8}
            slidesPerView={2.3}
            slidesOffsetBefore={8} // Adds 8px offset to the start
          >
            {hotNow.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="w-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-36 object-cover rounded-sm"
                  />
                  <p className="text-sm mt-2 text-center">{item.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="px-2">
          {/* ✨ Featured Dishes */}
          <div className="mt-6">
            <h2 className="text-base font-semibold mb-2">✨ Featured Dishes</h2>
            <div className="grid grid-cols-1 gap-2">
              {featuredDishes.map(dish => (
                <div
                  key={dish.name}
                  className="flex bg-white rounded-sm p-2 items-center border border-[#f9db3b]/25"
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-14 h-14 object-cover rounded-sm mr-3"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{dish.name}</div>
                    <div className="text-xs text-gray-500">{dish.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 🔁 Reorder Again */}
          <div className="mt-6">
            <h2 className="text-base font-semibold mb-2">🔁 Reorder Again</h2>
            <div className="grid grid-cols-1 gap-2">
              {reorderAgain.map((item, i) => (
                <div
                  key={i}
                  className="flex bg-white rounded-sm p-2 items-center border border-[#f9db3b]/25"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded-sm mr-3"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-gray-500">
                      By
                      {item.cook}
                    </div>
                  </div>
                  <button className="text-xs text-[var(--theme-primary)] font-semibold">
                    Reorder
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 👩‍🍳 Home Cooks */}
          <div className="mt-6">
            <h2 className="text-base font-semibold mb-2">👩‍🍳 Home Cooks</h2>
            <div className="grid grid-cols-1 gap-2">
              {homeCooks.map((cook, i) => (
                <div
                  key={i}
                  className="flex bg-white rounded-sm p-2 items-center border border-[#f9db3b]/25"
                >
                  <img
                    src={cook.image}
                    alt={cook.name}
                    className="w-14 h-14 object-cover rounded-sm mr-3"
                  />
                  <div>
                    <div className="font-medium text-sm">{cook.name}</div>
                    <div className="text-xs text-gray-500">
                      {cook.location}
                      {' '}
                      ·
                      <span className="italic">{cook.specialty}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </MobileLayout>
  );
}
