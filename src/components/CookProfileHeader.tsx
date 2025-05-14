import { Heart, NavArrowLeft } from 'iconoir-react';
import Link from 'next/link';
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
}) => (
  <header
    className="fixed top-0 left-0 right-0 z-40 bg-[var(--theme-primary)] px-4 pt-20 text-white max-w-[480px] mx-auto w-full"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/10" />
    {/* Top Row: Back and Fave */}
    <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 pt-4 z-10">
      <Link href=".." className="back-arrow cursor-pointer flex items-center w-16">
        <NavArrowLeft className="w-6 h-6 text-white cursor-pointer" />
      </Link>
      <div className="flex items-center space-x-3 text-xl ml-4 px-2">
        <span className="cursor-pointer">
          <Heart className="w-6 h-6" />
        </span>
      </div>
    </div>
    {/* Cook Info */}
    <div className="relative z-10 px-4 pb-4 w-full">
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

export default CookProfileHeader;
