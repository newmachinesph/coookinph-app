import { ChatBubble, Heart, NavArrowLeft, Search } from 'iconoir-react';
import React from 'react';

/**
 * Header component: fixed at the top, mobile style.
 * Uses Tailwind CSS and iconoir-react for icons.
 */
const Header: React.FC = () => (
  <header className="bg-[var(--theme-primary)] px-4 pt-4 pb-2 text-[var(--theme-bg)] fixed top-0 left-0 right-0 z-40 max-w-[480px] mx-auto w-full">
    <div className="flex items-center justify-between text-xs">
      <div className="flex items-center space-x-1">
        <span className="back-arrow cursor-pointer">
          <NavArrowLeft className="w-5 h-5" />
        </span>
        <div>
          <span className="text-[10px] uppercase">Deliver to</span>
          <br />
          <span className="font-bold text-sm">
            Bonifacio Global City
            {' '}
            <span className="align-middle">▼</span>
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-3 text-xl">
        <span className="cursor-pointer">
          <Heart className="w-6 h-6" />
        </span>
        <span className="cursor-pointer">
          <ChatBubble className="w-6 h-6" />
        </span>
      </div>
    </div>
    <div className="mt-3 bg-white rounded-full flex items-center px-4 py-2">
      <span className="search-icon mr-2 h-6 w-6 flex items-center justify-center text-gray-500">
        <Search className="w-6 h-6" />
      </span>
      <input
        type="text"
        placeholder="What are you craving?"
        id="openSearch"
        className="flex-1 text-sm outline-none bg-transparent text-gray-900 placeholder-gray-400"
      />
    </div>
  </header>
);

export default Header;
