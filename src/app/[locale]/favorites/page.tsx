import MenuHeader from '@/components/MenuHeader';
import MobileLayout from '@/layouts/MobileLayout';
import Link from 'next/link';

const favoriteCooks = [
  {
    name: 'Aling Maria',
    slug: 'aling-maria',
    image: '/images/aling-maria.jpg',
    location: 'Manila',
    specialty: 'Adobo, Menudo',
  },
  {
    name: 'Nanay Fe',
    slug: 'nanay-fe',
    image: '/images/nanay-fe.jpg',
    location: 'Cavite',
    specialty: 'Kare-Kare, Sinigang',
  },
];

export default function FavoritesPage() {
  return (
    <MobileLayout hideNav={true}>
      <MenuHeader />
      <div className="pt-20 px-4 w-full max-w-[480px] mx-auto">
        <h1 className="text-2xl font-bold mb-2">Favorites</h1>
        <p className="text-sm text-gray-600 mb-6">Your saved home cooks</p>

        {favoriteCooks.map(cook => (
          <Link
            key={cook.slug}
            href={`/${cook.slug}`}
            className="block bg-white p-3 rounded-lg shadow mb-3"
          >
            <div className="flex items-center">
              <img
                src={cook.image}
                alt={cook.name}
                className="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div>
                <div className="font-semibold text-base">{cook.name}</div>
                <div className="text-sm text-gray-500">
                  {cook.location}
                  {' '}
                  ·
                  <span className="italic">{cook.specialty}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </MobileLayout>
  );
}
