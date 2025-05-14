import { ChatBubble, Heart, Search } from 'iconoir-react';
import React from 'react';

const HomeHeader: React.FC<{ onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ onSearchChange }) => (
  <header className="bg-[var(--theme-primary)] px-4 pt-4 pb-3 text-[var(--theme-bg)] fixed top-0 left-0 right-0 z-40 max-w-[480px] mx-auto w-full">
    <div className="flex items-center">
      <div className="flex-1 flex items-center bg-white rounded-full px-4 py-2">
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
      <div className="flex items-center space-x-3 text-xl ml-4">
        <span className="cursor-pointer">
          <Heart className="w-6 h-6" />
        </span>
        <span className="cursor-pointer">
          <ChatBubble className="w-6 h-6" />
        </span>
      </div>
    </div>
  </header>
);

export default HomeHeader;
