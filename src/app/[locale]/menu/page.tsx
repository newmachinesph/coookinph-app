import MenuHeader from '@/components/MenuHeader';
import { cooks } from '@/data/cookData';
import MobileLayout from '@/layouts/MobileLayout';

type Dish = {
  name: string;
  image: string;
  description: string;
  price: string;
  category: 'ulam' | 'almusal' | 'meryenda' | 'dessert' | 'inumin';
  cook?: string; // appended later
};

const categoryLabels: Record<Dish['category'], string> = {
  ulam: 'Ulam (Main Dishes)',
  almusal: 'Almusal (Breakfast)',
  meryenda: 'Meryenda (Snacks)',
  dessert: 'Dessert',
  inumin: 'Drinks',
};

export default function GeneralMenuPage() {
  // Collect all dishes from all cooks, tagging cook's name
  const allDishes: Dish[] = Object.values(cooks).flatMap(cook =>
    cook.menu.map(dish => ({ ...dish, cook: cook.name })),
  );

  // Group dishes by category
  const grouped = allDishes.reduce((acc: any, dish: any) => {
    if (!acc[dish.category]) {
      acc[dish.category] = [];
    }
    acc[dish.category].push(dish);
    return acc;
  }, {} as Record<string, Dish[]>);

  return (
    <MobileLayout hideNav={true}>
      <MenuHeader />
      <div className="flex flex-col items-center w-full pt-20 px-4">
        <h1 className="text-2xl font-bold mb-2">All Dishes</h1>
        <p className="text-gray-600 text-sm mb-6">Explore meals from all our home cooks!</p>

        {Object.entries(grouped).map(([category, dishes]: any) => (
          <div key={category} className="mb-8 w-full">
            <h2 className="text-lg font-semibold mb-3 text-[var(--theme-primary-text)]">
              {categoryLabels[category as Dish['category']] || category}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {dishes.map((dish: any) => (
                <div key={dish.name + dish.cook} className="flex items-start bg-white rounded-lg shadow p-3">
                  <img src={dish.image} alt={dish.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                  <div className="flex-1">
                    <div className="font-semibold">{dish.name}</div>
                    <div className="text-sm text-gray-600">{dish.description}</div>
                    <div className="text-sm text-gray-800 mt-1">{dish.price}</div>
                    <div className="text-xs text-gray-500 italic">
                      By
                      {dish.cook}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MobileLayout>
  );
}
