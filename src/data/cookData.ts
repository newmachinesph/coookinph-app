export type Dish = {
  name: string;
  image: string;
  description: string;
  price: string;
  category: 'ulam' | 'almusal' | 'meryenda' | 'dessert' | 'inumin';
  cookTime?: string;
};

export type Cook = {
  name: string;
  slug: string;
  image: string;
  bio: string;
  location: string;
  specialty: string;
  rating?: number;
  reviews?: number;
  cuisines?: string[];
  menu: Dish[];
};

export const cooks: Record<string, Cook> = {
  'aling-maria': {
    name: 'Aling Maria',
    slug: 'aling-maria',
    image: '/images/aling-maria.jpg',
    bio: 'Known in the barangay for her warm hospitality and her time-honored Adobo. Her dishes are prepared with patience, love, and ingredients from her local palengke.',
    location: 'Manila',
    specialty: 'Adobo, Menudo',
    rating: 4.8,
    reviews: 112,
    cuisines: ['Filipino', 'Traditional', 'Home-style'],
    menu: [
      {
        name: 'Adobo',
        image: '/images/adobo.jpg',
        description: 'Classic chicken & pork stew in soy sauce, vinegar, and garlic.',
        price: '₱120',
        category: 'ulam',
        cookTime: '45 mins',
      },
      {
        name: 'Menudo',
        image: '/images/hero-image.jpg',
        description: 'Pork stew with liver, potatoes, and carrots in tomato sauce.',
        price: '₱130',
        category: 'ulam',
        cookTime: '40 mins',
      },
      {
        name: 'Tortang Talong',
        image: '/images/tortang-talong.jpg',
        description: 'Eggplant omelet dipped in egg and pan-fried to golden perfection.',
        price: '₱60',
        category: 'ulam',
      },
      {
        name: 'Lumpiang Togue',
        image: '/images/lumpiang-togue.jpg',
        description: 'Crispy fried spring rolls filled with mung bean sprouts and vegetables.',
        price: '₱55 (3 pcs)',
        category: 'meryenda',
      },
      {
        name: 'Pandesal with Kesong Puti',
        image: '/images/pandesal.jpg',
        description: 'Freshly baked pandesal with soft Filipino white cheese.',
        price: '₱35',
        category: 'almusal',
      },
      {
        name: 'Suman at Latik',
        image: '/images/suman.jpg',
        description: 'Sticky rice wrapped in banana leaves served with sweet coconut caramel.',
        price: '₱50',
        category: 'dessert',
      },
      {
        name: 'Salabat',
        image: '/images/salabat.jpg',
        description: 'Ginger tea perfect for rainy days and sore throats.',
        price: '₱30',
        category: 'inumin',
      },
    ],
  },
};
