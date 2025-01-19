export type User = {
  id: number;
  name: string;
  products: Product[];
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
};

export const mockUsers: User[] = [
  { id: 1, name: "Junita", products: [] },
  { id: 2, name: "Alex", products: [] },
  { id: 3, name: "Konrad", products: [] },
  { id: 4, name: "Julia", products: [] },
];

export const mockItems: Product[] = [
  {
    id: 1,
    title: "New York Streak",
    description: "Beige brown, 42 size",
    price: 1000,
    imageUrl: "https://i.ibb.co/SsmkhPq/Rectangle-23.png",
  },
  {
    id: 2,
    title: "Luxe 3 series",
    description: "Modern watch with sleek design",
    price: 500,
    imageUrl: "https://i.ibb.co/WVySXBL/Rectangle-24.png",
  },
  {
    id: 3,
    title: "EZ sneakers",
    description: "Comfortable sneakers, 42 size",
    price: 150,
    imageUrl: "https://i.ibb.co/JqD4MwR/Rectangle-5.png",
  },
];

export async function getAllProducts() {
  return mockItems;
}

export async function assignProductToUser(userId: number, productId: number) {
  const user = mockUsers.find((u) => u.id === userId);
  const product = mockItems.find((p) => p.id === productId);

  if (user && product) {
    user.products.push(product);
  }

  return user;
}

export async function getAllUsers() {
  return mockUsers;
}
