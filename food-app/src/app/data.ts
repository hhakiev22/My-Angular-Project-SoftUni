import { TrainingType } from './shared/models/TrainingType';
import { Fitness } from './shared/models/Fitness';

export const fitness_cart: Fitness[] = [
  {
    id: '1',
    name: 'Pulse',
    pricePerYear: 800,
    favorite: false,
    towns: ['Sofia', 'Varna'],
    stars: 4.5,
    imageUrl: 'assets/pulse.png',
    types: ['contidion', 'running'],
  },
  {
    id: '2',
    name: 'Titanium',
    pricePerYear: 600,
    favorite: true,
    towns: ['Sofia'],
    stars: 4.7,
    imageUrl: 'assets/titanium.png',
    types: ['contidion', 'functional'],
  },
  {
    id: '3',
    name: 'Flais',
    pricePerYear: 400,
    favorite: false,
    towns: ['Sofia', 'Plovdiv'],
    stars: 3.5,
    imageUrl: 'assets/flais.png',
    types: ['functional', 'running'],
  },
  {
    id: '4',
    name: 'Next Level',
    pricePerYear: 750,
    favorite: true,
    towns: ['Sofia', 'Varna', 'Plovdiv'],
    stars: 3.3,
    imageUrl: 'assets/nextLevel.jpg',
    types: ['functional', 'power'],
  },
];

export const sample_types: TrainingType[] = [
  { type: 'functional', members: 584 },
  { type: 'power', members: 376 },
  { type: 'running', members: 436 },
];
