import CuisineTypeSlider from '@/components/CuisineTypeSlider';
import MenuHeader from '@/components/MenuHeader';
import { menuCategories } from '@/data/menuCategories';
import MobileLayout from '@/layouts/MobileLayout';
import { notFound } from 'next/navigation';

type PageProps = {
  params: { slug: string };
};

export default async function MenuPage({ params }: PageProps) {
  const { slug } = await params;

  const category = menuCategories[slug];

  if (!category) {
    return notFound();
  }

  return (
    <MobileLayout hideNav={true}>
      <MenuHeader />
      <div className="flex flex-col items-center w-full pt-8">
        <div className="w-full px-4">
          <h1 className="text-2xl font-bold mt-6 mb-2">{category.title}</h1>
          <p className="text-gray-700 text-center mb-6">{category.description}</p>
        </div>

        <CuisineTypeSlider cuisineTypes={category.cuisineTypes} />

        <div className="w-full mt-4 px-4">
          <h2 className="text-lg font-bold mb-6">Featured Dishes</h2>
          <div className="grid grid-cols-1 gap-4">
            {category.featuredDishes.map(dish => (
              <div key={dish.name} className="flex items-start bg-white rounded-lg">
                <img src={dish.image} alt={dish.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                <div>
                  <div className="font-semibold">{dish.name}</div>
                  <div className="text-sm text-gray-600">{dish.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full mt-8 px-4">
          <h2 className="text-lg font-bold mb-6">Home Cooks</h2>
          <div className="grid grid-cols-1 gap-4">
            {category.homeCooks.map(cook => (
              <div key={cook.name} className="flex items-center bg-white rounded-lg">
                <img src={cook.image} alt={cook.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                <div>
                  <div className="font-semibold text-base">{cook.name}</div>
                  <div className="text-xs text-gray-500 mb-1">
                    {cook.location}
                    {' '}
                    &middot;
                    <span className="italic">{cook.specialty}</span>
                  </div>
                  <div className="text-sm text-gray-600">{cook.bio}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
