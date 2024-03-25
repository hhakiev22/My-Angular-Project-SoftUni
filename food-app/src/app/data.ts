import { Tag } from './shared/models/Tag';
import { HealthyFood } from './shared/models/Food';

export const sample_foods: HealthyFood[] = [
  {
    id: '1',
    name: 'Strawberry cheesecake',
    price: 8,
    favorite: false,
    tags: ['french', 'europe'],
    stars: 4.5,
    imageUrl: 'assets/cheescake.jpg',
    origins: ['FastFood', 'Toast', 'Vegetarian'],
    cookTime: '15-17',
  },
  {
    id: '2',
    name: 'Tofu pad Thai',
    price: 10,
    favorite: true,
    tags: ['japan', 'asia'],
    stars: 4,
    imageUrl: 'assets/TofuPadThai.webp',
    origins: ['SlowFood', 'Salad', 'Meal'],
    cookTime: '20-22',
  },
  {
    id: '3',
    name: 'Bo tai Chanh',
    price: 10,
    favorite: false,
    tags: ['china', 'asia'],
    stars: 4.5,
    imageUrl: 'assets/boTaiChanh.jpg',
    origins: ['FastFood', 'Salad'],
    cookTime: '10-12',
  },
  {
    id: '4',
    name: 'Pumpkin soup',
    price: 5,
    favorite: false,
    tags: ['haiti', 'america'],
    stars: 4.5,
    imageUrl: 'assets/pumpkinSoup.jpg',
    origins: ['SlowFood', 'Soup'],
    cookTime: '20-25',
  },
];

export const sample_tags: Tag[] = [
  { name: 'All', count: 1 },
  { name: 'FastFood', count: 4 },
  { name: 'SlowFood', count: 2 },
  { name: 'Soup', count: 1 },
  { name: 'Salad', count: 2 },
  { name: 'Meal', count: 1 },
  { name: 'Toast', count: 1 },
  { name: 'Vegetarian', count: 1 },
];
