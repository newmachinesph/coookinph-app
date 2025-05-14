import { Search } from 'iconoir-react';
import React from 'react';

const SearchBar: React.FC = () => (
  <div className="w-full max-w-[480px] mx-auto mb-4 px-4">
    <div className="bg-[var(--theme-primary)] rounded-full flex items-center px-4 py-2 border border-cream-can-300">
      <span className="search-icon mr-2 h-6 w-6 flex items-center justify-center text-white">
        <Search className="w-6 h-6" />
      </span>
      <input
        type="text"
        placeholder="What are you craving?"
        id="openSearch"
        className="flex-1 text-sm outline-none bg-transparent text-white placeholder-cream-can-200"
      />
    </div>
  </div>
);

export default SearchBar;
