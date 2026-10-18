export type Dish = {
  name: string;
  image: string;
  description: string;
};

export type HomeCook = {
  name: string;
  image: string;
  bio: string;
  location: string;
  specialty: string;
};

export type CuisineType = {
  name: string;
  image: string;
};

export type MenuCategory = {
  title: string;
  description: string;
  cuisineTypes: CuisineType[];
  featuredDishes: Dish[];
  homeCooks: HomeCook[];
};

export const menuCategories: Record<string, MenuCategory> = {
  ulam: {
    title: 'Ulam',
    description: 'Discover delicious Filipino ulam (main dishes) from home chefs and cooks!',
    cuisineTypes: [
      { name: 'Filipino', image: '/images/adobo.jpg' },
      { name: 'Chinese', image: '/images/makati.jpg' },
      { name: 'Japanese', image: '/images/chefs.png' },
      { name: 'Korean', image: '/images/hero-image.jpg' },
      { name: 'Western', image: '/images/diy-box.png' },
      { name: 'Indian', image: '/images/laing.jpg' },
      { name: 'Thai', image: '/images/sinigang.jpg' },
    ],
    featuredDishes: [
      { name: 'Adobo', image: '/images/adobo.jpg', description: 'Classic Filipino chicken & pork stew.' },
      { name: 'Sinigang', image: '/images/sinigang.jpg', description: 'Tamarind soup with pork & vegetables.' },
      { name: 'Laing', image: '/images/laing.jpg', description: 'Taro leaves in coconut milk.' },
      { name: 'Kare-Kare', image: '/images/hero-image.jpg', description: 'Peanut stew with oxtail and vegetables.' },
      { name: 'Bicol Express', image: '/images/chefs.png', description: 'Spicy pork in coconut milk.' },
    ],
    homeCooks: [
      {
        name: 'Aling Maria',
        image: '/images/aling-maria.jpg',
        bio: 'Known for her authentic Adobo and warm hospitality.',
        location: 'Manila',
        specialty: 'Adobo, Menudo',
      },
      {
        name: 'Mang Lito',
        image: '/images/mang-lito.jpg',
        bio: 'Expert in grilled dishes and Filipino BBQ.',
        location: 'Quezon City',
        specialty: 'Inihaw, BBQ',
      },
      {
        name: 'Nanay Fe',
        image: '/images/nanay-fe.jpg',
        bio: 'Loves cooking hearty stews for her family and neighbors.',
        location: 'Cavite',
        specialty: 'Kare-Kare, Sinigang',
      },
      {
        name: 'Chef Ana',
        image: '/images/chefs.png',
        bio: 'Fusion cook blending Filipino and Western flavors.',
        location: 'Makati',
        specialty: 'Fusion, Pasta',
      },
      {
        name: 'Tita Rose',
        image: '/images/hero-image.jpg',
        bio: 'Passionate about traditional recipes passed down generations.',
        location: 'Taguig',
        specialty: 'Laing, Bicol Express',
      },
    ],
  },

  almusal: {
    title: 'Almusal',
    description: 'Start your day with hearty Filipino breakfasts from beloved home cooks.',
    cuisineTypes: [
      { name: 'Silog Meals', image: '/images/tapsilog.jpg' },
      { name: 'Pandesal', image: '/images/pandesal.jpg' },
      { name: 'Champorado', image: '/images/champorado.jpg' },
      { name: 'Arroz Caldo', image: '/images/arroz-caldo.jpg' },
    ],
    featuredDishes: [
      { name: 'Tapsilog', image: '/images/tapsilog.jpg', description: 'Beef tapa, garlic rice, and egg.' },
      { name: 'Longsilog', image: '/images/longsilog.jpg', description: 'Sweet pork sausage, garlic rice, and egg.' },
      { name: 'Champorado', image: '/images/champorado.jpg', description: 'Sweet chocolate rice porridge.' },
      { name: 'Arroz Caldo', image: '/images/arroz-caldo.jpg', description: 'Savory rice porridge with chicken.' },
    ],
    homeCooks: [
      {
        name: 'Tita Nena',
        image: '/images/tita-nena.jpg',
        bio: 'Loves preparing classic silog meals for her grandchildren.',
        location: 'Pasig',
        specialty: 'Tapsilog, Longsilog',
      },
      {
        name: 'Kuya Dodong',
        image: '/images/kuya-dodong.jpg',
        bio: 'Champorado champion of the barangay!',
        location: 'Cebu City',
        specialty: 'Champorado, Arroz Caldo',
      },
    ],
  },

  // Add more categories like meryenda, hapunan, etc...
};
