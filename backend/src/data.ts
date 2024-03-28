export const sample_foods: any[] = [
  {
    id: "1",
    name: "Strawberry cheesecake",
    price: 8,
    favorite: false,
    origins: ["french", "europe"],
    stars: 4.5,
    imageUrl: "assets/cheescake.jpg",
    tags: ["FastFood", "Toast", "Vegetarian"],
    cookTime: "15-17",
  },
  {
    id: "2",
    name: "Tofu pad Thai",
    price: 10,
    favorite: true,
    origins: ["japan", "asia"],
    stars: 4,
    imageUrl: "assets/TofuPadThai.webp",
    tags: ["SlowFood", "Salad", "Meal"],
    cookTime: "20-22",
  },
  {
    id: "3",
    name: "Bo tai Chanh",
    price: 10,
    favorite: false,
    origins: ["china", "asia"],
    stars: 4.5,
    imageUrl: "assets/boTaiChanh.jpg",
    tags: ["FastFood", "Salad"],
    cookTime: "10-12",
  },
  {
    id: "4",
    name: "Pumpkin soup",
    price: 5,
    favorite: false,
    origins: ["haiti", "america"],
    stars: 4.5,
    imageUrl: "assets/pumpkinSoup.jpg",
    tags: ["SlowFood", "Soup"],
    cookTime: "20-25",
  },
];

export const sample_tags: any[] = [
  { name: "All", count: 6 },
  { name: "FastFood", count: 2 },
  { name: "SlowFood", count: 2 },
  { name: "Soup", count: 1 },
  { name: "Salad", count: 2 },
  { name: "Meal", count: 1 },
  { name: "Toast", count: 1 },
  { name: "Vegetarian", count: 1 },
];

export const sample_users: any[] = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    password: "12345",
    address: "Toronto On",
    isAdmin: true,
  },
  {
    name: "Jane Doe",
    email: "Jane@gmail.com",
    password: "12345",
    address: "Shanghai",
    isAdmin: false,
  },
];
