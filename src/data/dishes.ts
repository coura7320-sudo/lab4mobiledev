export type Dish = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  special: boolean;
  image: string;
};

export const dishes: Dish[] = [
  {
    id: '1',
    name: 'Chicken Yassa',
    price: 2500,
    category: 'Main',
    description: 'Chicken with onions and lemon, served with rice.',
    special: true,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Poulet_Yassa.JPG/800px-Poulet_Yassa.JPG',
  },
  {
    id: '2',
    name: 'Thieboudienne',
    price: 3000,
    category: 'Main',
    description: 'Fish and vegetables cooked with rice.',
    special: false,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Senegalese_Thieboudienne.JPG/800px-Senegalese_Thieboudienne.JPG',
  },
  {
    id: '3',
    name: 'Mafe',
    price: 2500,
    category: 'Main',
    description: 'Meat in a peanut sauce with rice.',
    special: false,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Maf%C3%A9_s%C3%A9n%C3%A9galais.jpg/800px-Maf%C3%A9_s%C3%A9n%C3%A9galais.jpg',
  },
  {
    id: '4',
    name: 'Fataya',
    price: 500,
    category: 'Starter',
    description: 'Fried pastry filled with fish or meat.',
    special: true,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Fataya.jpg/800px-Fataya.jpg',
  },
  {
    id: '5',
    name: 'Green Salad',
    price: 1000,
    category: 'Starter',
    description: 'Lettuce, tomato, cucumber and onion.',
    special: false,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Insalata_mista.jpg/800px-Insalata_mista.jpg',
  },
  {
    id: '6',
    name: 'Thiakry',
    price: 800,
    category: 'Dessert',
    description: 'Sweet millet couscous with yoghurt.',
    special: false,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Thiakry_2013.jpg/800px-Thiakry_2013.jpg',
  },
  {
    id: '7',
    name: 'Bissap Juice',
    price: 400,
    category: 'Drink',
    description: 'Cold hibiscus juice.',
    special: true,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Jus_de_bissap_artisanal_dans_un_restaurant_africain_%C3%A0_Lyon_%282019%29.jpg/800px-Jus_de_bissap_artisanal_dans_un_restaurant_africain_%C3%A0_Lyon_%282019%29.jpg',
  },
  {
    id: '8',
    name: 'Cafe Touba',
    price: 300,
    category: 'Drink',
    description: 'Spiced coffee.',
    special: false,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Caf%C3%A9_Touba._Pouring.jpg/800px-Caf%C3%A9_Touba._Pouring.jpg',
  },
];
