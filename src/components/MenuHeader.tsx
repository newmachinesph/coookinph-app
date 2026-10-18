import { ChatBubble, Heart, NavArrowLeft, Search } from 'iconoir-react';
import Link from 'next/link';
import React from 'react';

const MenuHeader: React.FC<{ onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ onSearchChange }) => (
  <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--theme-primary)] px-4 pt-4 pb-2 text-white max-w-[480px] mx-auto w-full">
    <div className="flex items-center h-10">
      <Link href=".." className="back-arrow cursor-pointer flex items-center w-16">
        <NavArrowLeft className="w-6 h-6 text-white cursor-pointer" />
      </Link>
      <div className="flex-1 flex flex-col items-center">
        <span className="text-[10px] uppercase">Deliver to</span>
        <span className="font-bold text-sm">
          Bonifacio Global City
        </span>
      </div>
      <div className="flex items-center space-x-3 text-xl ml-4 w-16">
        <span className="cursor-pointer">
          <Heart className="w-6 h-6" />
        </span>
        <span className="cursor-pointer">
          <ChatBubble className="w-6 h-6" />
        </span>
      </div>
    </div>
    <div className="flex-1 flex items-center bg-white rounded-full px-4 py-2 mt-3 mb-1">
      <span className="search-icon mr-2 h-6 w-6 flex items-center justify-center text-gray-500">
        <Search className="w-6 h-6" />
      </span>
      <input
        type="text"
        placeholder="What are you craving?"
        id="openSearch"
        className="flex-1 text-sm outline-none bg-transparent text-gray-900 placeholder-gray-400"
        onChange={onSearchChange}
      />
    </div>
  </header>
);

export default MenuHeader;
