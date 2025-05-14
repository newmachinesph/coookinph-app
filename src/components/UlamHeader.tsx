import { Box, Heart, NavArrowLeft } from 'iconoir-react';
import Link from 'next/link';
import React from 'react';

const UlamHeader: React.FC = () => (
  <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--theme-primary)] px-4 pt-4 pb-2 text-[var(--theme-primary-text)] max-w-[480px] mx-auto w-full">
    <div className="flex items-center justify-between">
      <Link href=".." className="back-arrow cursor-pointer flex items-center">
        <NavArrowLeft className="w-6 h-6" style={{ color: 'var(--theme-primary-text)' }} />
      </Link>
      <div className="flex-1 flex flex-col items-center">
        <span className="text-[10px] uppercase">Deliver to</span>
        <span className="font-bold text-sm">
          Bonifacio Global City
          {' '}
          <span className="align-middle">▼</span>
        </span>
      </div>
      <span className="flex items-center gap-2">
        <Heart className="w-6 h-6 cursor-pointer" style={{ color: 'var(--theme-primary-text)' }} />
        <Box className="w-6 h-6 cursor-pointer" style={{ color: 'var(--theme-primary-text)' }} />
      </span>
    </div>

  </header>
);

export default UlamHeader;
