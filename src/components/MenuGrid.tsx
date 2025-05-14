import Link from 'next/link';
import React from 'react';

const MENU_ITEMS = [
  { label: 'Ulam', icon: '🍲', href: 'ulam' }, // Main dishes
  { label: 'Rice Meals', icon: '🍚', href: 'rice-meals' }, // Rice meals
  { label: 'Almusal', icon: '🍳', href: 'almusal' }, // Breakfast
  { label: 'Tanghalian', icon: '🍛', href: 'tanghalian' }, // Lunch
  { label: 'Gabihan', icon: '🍽️', href: 'gabihan' }, // Dinner
  { label: 'DIY Box', icon: '📦', href: 'diy-box' }, // Cook at home kits
];

const MenuGrid: React.FC = () => (
  <div className="grid grid-cols-4 gap-3 pb-4 w-full">
    {MENU_ITEMS.map(({ label, icon, href }) =>
      href
        ? (
            <Link
              key={label}
              href={href}
              className="flex flex-col items-center justify-center rounded-xl bg-cream-can-100 hover:bg-cream-can-200 transition p-4 border border-[var(--theme-primary-text)] cursor-pointer w-full h-full min-w-0"
            >
              <span className="text-3xl mb-2">{icon}</span>
              <span className="text-xs font-semibold" style={{ color: 'var(--theme-primary-text)' }}>{label}</span>
            </Link>
          )
        : (
            <div
              key={label}
              className="flex flex-col items-center justify-center rounded-xl bg-cream-can-100 hover:bg-cream-can-200 transition p-4 border border-[var(--theme-primary-text)] cursor-pointer w-full h-full min-w-0"
            >
              <span className="text-3xl mb-2">{icon}</span>
              <span className="text-xs font-semibold" style={{ color: 'var(--theme-primary-text)' }}>{label}</span>
            </div>
          ),
    )}
  </div>
);

export default MenuGrid;
