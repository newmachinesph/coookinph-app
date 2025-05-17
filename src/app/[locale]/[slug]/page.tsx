import CookMenu from '@/components/cookMenu';
import CookProfileHeader from '@/components/CookProfileHeader';
import MenuHeader from '@/components/MenuHeader';
import { cooks } from '@/data/cookData';
import MobileLayout from '@/layouts/MobileLayout';
import { notFound } from 'next/navigation';

type PageProps = {
  params: { slug?: string; locale?: string };
};

export default async function CookPage({ params }: PageProps) {
  const { slug, locale: _locale } = await params;

  if (!slug || typeof slug !== 'string') {
    return notFound();
  }

  const cleanSlug = slug.replace('@', '');
  const cook = cooks[cleanSlug];

  if (!cook) {
    return notFound();
  }

  return (
    <MobileLayout hideNav={true}>
      <MenuHeader />
      <div className="flex flex-col items-center w-full pt-20 px-4">
        <CookProfileHeader
          name={cook.name}
          image={cook.image}
          location={cook.location}
          specialty={cook.specialty}
        />

        <div className="text-center text-gray-700 mt-12 mb-4">{cook.bio}</div>
        <div className="text-sm text-gray-500 mb-6">
          ⭐
          {' '}
          {cook.rating}
          {' '}
          (
          {cook.reviews}
          {' '}
          reviews)
        </div>

        <CookMenu menu={cook.menu} />
      </div>
    </MobileLayout>
  );
}
