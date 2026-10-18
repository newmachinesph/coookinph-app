import type { Dish } from '@/data/cookData';

type Props = {
  menu: Dish[];
};

const categoryLabels: Record<Dish['category'], string> = {
  ulam: 'Ulam (Main Dishes)',
  almusal: 'Almusal (Breakfast)',
  meryenda: 'Meryenda (Snacks)',
  dessert: 'Dessert',
  inumin: 'Drinks',
};

export default function CookMenu({ menu }: Props) {
  // Group dishes by category
  const groupedMenu = menu.reduce((acc: any, dish: any) => {
    if (!acc[dish.category]) {
      acc[dish.category] = [];
    }
    acc[dish.category].push(dish);
    return acc;
  }, {} as Record<string, Dish[]>);

  return (
    <div className="w-full">
      <h2 className="text-lg font-bold mb-4">Menu</h2>

      {Object.entries(groupedMenu).map(([category, dishes]: any) => (
        <div key={category} className="mb-6">
          <h3 className="text-md font-semibold mb-2 text-[var(--theme-primary-text)]">
            {categoryLabels[category as Dish['category']] || category}
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {dishes.map((dish: any) => (
              <div
                key={dish.name}
                className="flex items-start bg-white rounded-lg shadow-sm p-3"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div className="flex-1">
                  <div className="font-semibold">{dish.name}</div>
                  <div className="text-sm text-gray-600">{dish.description}</div>
                  <div className="text-sm text-gray-800 font-medium mt-1">{dish.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
