import { Food } from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';

export const sample_foods: Food[] = [
  {
    id: '1',
    name: 'Cheescake',
    cookTime: '10-20',
    price: 10,
    favorite: false,
    origins: ['italy'],
    stars: 4.5,
    imageUrl: 'assets/cheescake.jpg',
    tags: ['FastFood', 'Desert', 'Lunch'],
  },
  {
    id: '2',
    name: 'Bo Tai Chanh',
    price: 20,
    cookTime: '20-30',
    favorite: true,
    origins: ['persia', 'middle east', 'china'],
    stars: 4.7,
    imageUrl: 'assets/boTaiChanh.jpg',
    tags: ['SlowFood', 'Lunch'],
  },
  {
    id: '3',
    name: 'Pumpkin Soup',
    price: 5,
    cookTime: '10-15',
    favorite: false,
    origins: ['germany', 'us'],
    stars: 3.5,
    imageUrl: 'assets/pumpkinSoup.jpg',
    tags: ['FastFood', 'Soup'],
  },
  {
    id: '4',
    name: 'Tofu Pad Thai',
    price: 8,
    cookTime: '15-20',
    favorite: true,
    origins: ['belgium', 'france'],
    stars: 3.3,
    imageUrl: 'assets/TofuPadThai.webp',
    tags: ['FastFood', 'Lunch', 'Salad'],
  },
];

export const sample_tags: Tag[] = [
  { name: 'All', count: 6 },
  { name: 'FastFood', count: 4 },
  { name: 'Cheescake', count: 2 },
  { name: 'Lunch', count: 3 },
  { name: 'SlowFood', count: 2 },
  { name: 'Salad', count: 1 },
  { name: 'Soup', count: 1 },
];
