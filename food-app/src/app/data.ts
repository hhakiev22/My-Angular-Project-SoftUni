import { Trainer } from './shared/models/Trainer';
import { Fitness } from './shared/models/Fitness';

export const fitness_cart: Fitness[] = [
  {
    id: '1',
    name: 'Pulse',
    pricePerYear: 800,
    favorite: false,
    origins: ['Sofia', 'Varna'],
    stars: 4.5,
    imageUrl: 'assets/pulse.png',
    trainers: ['Mario Ivanov', 'Kristin Petrova'],
  },
  {
    id: '2',
    name: 'Titanium',
    pricePerYear: 600,
    favorite: true,
    origins: ['Sofia'],
    stars: 4.7,
    imageUrl: 'assets/titanium.png',
    trainers: ['Andjelina Georgieva', 'Svetoslav Genov'],
  },
  {
    id: '3',
    name: 'Flais',
    pricePerYear: 400,
    favorite: false,
    origins: ['Sofia', 'Plovdiv'],
    stars: 3.5,
    imageUrl: 'assets/flais.png',
    trainers: ['Peter Mladenov', 'Ivelin Deneva'],
  },
  {
    id: '4',
    name: 'Next Level',
    pricePerYear: 750,
    favorite: true,
    origins: ['Sofia', 'Varna', 'Plovdiv'],
    stars: 3.3,
    imageUrl: 'assets/nextLevel.jpg',
    trainers: ['Ilian Popov', 'Susan Georgiev'],
  },
];

export const sample_trainers: Trainer[] = [
  { name: 'Pulse', count: 584 },
  { name: 'Titanium', count: 376 },
  { name: 'Next Level', count: 542 },
  { name: 'Flais', count: 436 },
];
