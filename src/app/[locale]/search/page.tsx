'use client';

import MenuHeader from '@/components/MenuHeader';
import { cooks } from '@/data/cookData';
import MobileLayout from '@/layouts/MobileLayout';
import Link from 'next/link';
import { useState } from 'react';

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const cookResults = Object.values(cooks).filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase()),
  );

  const dishResults = Object.values(cooks)
    .flatMap(c => c.menu.map(d => ({ ...d, cook: c.name, slug: c.slug })))
    .filter(d =>
      d.name.toLowerCase().includes(query.toLowerCase()),
    );

  return (
    <MobileLayout hideNav={true}>
      <MenuHeader />
      <div className="pt-20 px-4 max-w-[480px] mx-auto w-full">
        <h1 className="text-2xl font-bold mb-4">Search</h1>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search dishes or cooks..."
          className="w-full border px-3 py-2 rounded mb-6"
        />

        {query.length > 0 && (
          <>
            <h2 className="text-md font-semibold mb-2">Cooks</h2>
            {cookResults.map(cook => (
              <Link key={cook.slug} href={`/${cook.slug}`} className="block mb-3">
                <div className="flex items-center bg-white p-3 rounded-lg shadow">
                  <img src={cook.image} className="w-12 h-12 rounded-md mr-4 object-cover" alt={cook.name} />
                  <div>
                    <div className="font-medium">{cook.name}</div>
                    <div className="text-sm text-gray-500">{cook.specialty}</div>
                  </div>
                </div>
              </Link>
            ))}

            <h2 className="text-md font-semibold mt-6 mb-2">Dishes</h2>
            {dishResults.map((dish, i) => (
              <Link key={i} href={`/${dish.slug}`} className="block mb-3">
                <div className="flex items-center bg-white p-3 rounded-lg shadow">
                  <img src={dish.image} className="w-12 h-12 rounded-md mr-4 object-cover" alt={dish.name} />
                  <div>
                    <div className="font-medium">{dish.name}</div>
                    <div className="text-sm text-gray-500">
                      By
                      {dish.cook}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
    </MobileLayout>
  );
}
