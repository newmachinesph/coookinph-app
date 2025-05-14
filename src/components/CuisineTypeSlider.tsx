'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type CuisineType = {
  name: string;
  image: string;
};

type CuisineTypeSliderProps = {
  cuisineTypes: CuisineType[];
  className?: string;
};

export default function CuisineTypeSlider({ cuisineTypes, className }: CuisineTypeSliderProps) {
  return (
    <div className={`w-full mb-8 ${className ?? ''}`}>
      <h2 className="text-lg font-bold mb-4 px-2">Browse by Cuisine</h2>
      <Swiper
        spaceBetween={0}
        slidesPerView={5.5}
        slidesOffsetBefore={8}
        slidesOffsetAfter={0}
        className="!pb-4"
      >
        {cuisineTypes.map(cuisine => (
          <SwiperSlide key={cuisine.name}>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200 flex items-center justify-center bg-white shadow-sm">
                <img
                  src={cuisine.image}
                  alt={cuisine.name}
                  className="w-14 h-14 object-cover"
                />
              </div>
              <span className="text-xs mt-2 text-center">{cuisine.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
