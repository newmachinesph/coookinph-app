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
    <div className="mt-3">
      <div className="bg-[var(--theme-primary)] rounded-full flex items-center px-4 py-2 border border-cream-can-300">
        <span className="search-icon mr-2 h-6 w-6 flex items-center justify-center" style={{ color: 'var(--theme-primary-text)' }}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M17 17L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="What are you craving?"
          id="openSearch"
          className="flex-1 text-sm outline-none bg-transparent placeholder-[var(--theme-primary-text)]"
          style={{ color: 'var(--theme-primary-text)' }}
        />
      </div>
    </div>
  </header>
);

export default UlamHeader;
