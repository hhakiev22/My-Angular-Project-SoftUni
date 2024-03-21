import { Cart } from './shared/models/Cart';

export const fitness_cart: Cart[] = [
  {
    id: '1',
    name: 'Pulse',
    pricePerYear: 800,
    favorite: false,
    origins: ['Sofia', 'Varna'],
    stars: 4.5,
    imageUrl: 'assets/pulse.png',
    // tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id: '2',
    name: 'Titanium',
    pricePerYear: 600,
    favorite: true,
    origins: ['Sofia'],
    stars: 4.7,
    imageUrl: 'assets/titanium.png',
    // tags: ['SlowFood', 'Lunch'],
  },
  {
    id: '3',
    name: 'Flais',
    pricePerYear: 400,
    favorite: false,
    origins: ['Sofia', 'Plovdiv'],
    stars: 3.5,
    imageUrl: 'assets/flais.png',
    // tags: ['FastFood', 'Hamburger'],
  },
  {
    id: '4',
    name: 'Next Level',
    pricePerYear: 750,
    favorite: true,
    origins: ['Sofia', 'Varna', 'Plovdiv'],
    stars: 3.3,
    imageUrl: 'assets/nextLevel.jpg',
    // tags: ['FastFood', 'Fry'],
  },
];
