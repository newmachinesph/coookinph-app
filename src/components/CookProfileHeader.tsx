'use client';

import { Heart, HeartSolid, NavArrowLeft } from 'iconoir-react';
import React from 'react';

type CookProfileHeaderProps = {
  name: string;
  image: string;
  onBack?: () => void;
  onFave?: () => void;
  isFave?: boolean;
  location?: string;
  specialty?: string;
};

const CookProfileHeader: React.FC<CookProfileHeaderProps> = ({
  name,
  image,
  location,
  specialty,
  onBack,
  onFave,
  isFave,
}) => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 px-4 pt-20 text-white max-w-[480px] mx-auto w-full h-48"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-b-lg" />

      {/* Top Navigation Row */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 pt-4 z-10">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center bg-black/30 rounded-full"
          aria-label="Back"
        >
          <NavArrowLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={onFave}
          className="w-10 h-10 flex items-center justify-center bg-black/30 rounded-full"
          aria-label={isFave ? 'Unfavorite' : 'Favorite'}
        >
          {isFave
            ? (
                <HeartSolid className="w-6 h-6 text-red-500" />
              )
            : (
                <Heart className="w-6 h-6 text-white" />
              )}
        </button>
      </div>

      {/* Cook Info */}
      <div className="relative z-10 px-4 pb-4 mt-12">
        <h1 className="text-2xl font-bold text-white drop-shadow">{name}</h1>
        {(location || specialty) && (
          <div className="text-white text-sm drop-shadow">
            {location}
            {location && specialty && ' · '}
            <span className="italic">{specialty}</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default CookProfileHeader;
